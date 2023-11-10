<script context="module">
  import {
    source,
    selectedSource,
    detailShowingData,
    ngrok_connected,
    ngrok_endpoint,
    sentences,
    activeFilters,
    loading_results,
    defaultSentenceData,
    baselineTranslations,
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
      .then((d) => d.results);
    console.log(response);
    return response;
  }

  export async function getBaselineTranslation(sentence) {
    let url = new URL("translate", get(ngrok_endpoint));
    url.searchParams.append("sentence", sentence);
    const response = await fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((d) => d.results);
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
    if (!get(ngrok_connected)) {
      sentences.update((sentences) =>
        sentences.map((sentenceData, i) => {
          return i === get(selectedSource)
            ? {
                ...sentenceData,
                source: e.target.innerText,
                translation_hyp: e.target.innerText,
              }
            : sentenceData;
        })
      );
    } else {
      loading_results.set(true);
      analyzeSentence(e.target.innerText).then((result) => {
        sentences.update((sentences) =>
          sentences.map((sentenceData, i) => {
            return i === get(selectedSource) ? result : sentenceData;
          })
        );
        activeFilters.set([result.tableFilter]);
        loading_results.set(false);
      });
    }
  }

  export async function updateBaselineTranslations(e) {
    if (get(source)[get(selectedSource)] === e.target.innerText) return;
    source.update((src) =>
      src.map((s, i) => {
        return i === get(selectedSource) ? e.target.innerText : s;
      })
    );
    if (!get(ngrok_connected)) {
      baselineTranslations.update((ts) =>
        ts.map((t, i) => {
          return i === get(selectedSource)
            ? {
                ...defaultSentenceData,
                source: e.target.innerText,
                translation_hyp: e.target.innerText,
              }
            : t;
        })
      );
    } else {
      getBaselineTranslation(e.target.innerText).then((result) => {
        baselineTranslations.update((translations) =>
          translations.map((translation, i) => {
            return i === get(selectedSource) ? result : translation;
          })
        );
      });
    }
  }
</script>
