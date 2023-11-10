<script context="module">
  import {
    source,
    selectedSource,
    detailShowingData,
    ngrok_connected,
    ngrok_endpoint,
    sentences,
    activeFilters,
  } from "./stores.js";

  import { get } from "svelte/store";

  export async function analyzeSentence(sentence, method = "", template = "") {
    let url = new URL("analyze", get(ngrok_endpoint));
    url.searchParams.append("sentence", sentence);
    url.searchParams.append("method", method);
    url.searchParams.append("template", template);
    const response = await fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        return d.results;
      });
    return response;
  }

  export async function updateTemplate(template) {
    if (!get(ngrok_connected)) return;
    analyzeSentence(
      get(detailShowingData).source,
      (method = "template"),
      (template = template)
    ).then((result) => {
      sentences.update((sentences) =>
        sentences.map((sentenceData, i) => {
          return i === get(selectedSource) ? result : sentenceData;
        })
      );
    });
  }

  export async function updateMethod(method) {
    if (!get(ngrok_connected)) return;
    analyzeSentence(get(detailShowingData).source, (method = method)).then(
      (result) => {
        sentences.update((sentences) =>
          sentences.map((sentenceData, i) => {
            return i === get(selectedSource) ? result : sentenceData;
          })
        );
        activeFilters.set([result.tableFilter]);
      }
    );
  }

  export async function updateSentenceText(e) {
    if (get(detailShowingData).source === e.target.innerText) return;
    source.update((src) =>
      src.map((s, i) => {
        return i === get(selectedSource) ? e.target.innerText : s;
      })
    );
    if (!get(ngrok_connected)) return;
    analyzeSentence(e.target.innerText).then((result) => {
      sentences.update((sentences) =>
        sentences.map((sentenceData, i) => {
          return i === get(selectedSource) ? result : sentenceData;
        })
      );
      activeFilters.set([result.tableFilter]);
    });
  }
</script>
