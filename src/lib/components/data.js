import { writable, derived } from "svelte/store";
import tm_sentences from "./synthetic_tm_data_formatted.json";

export const ngrok_endpoint = writable("");
export const ngrok_connected = writable(null);

export const source = writable(
  "Dear Mr. Doe,\n\nYou were seen in the emergency department for trouble breathing. While you were in the hospital we gave you breathing treatments and your symptoms improved."
);

export const selected = writable("");

export const query = writable("");

export const activeTableTab = writable("sentences");

export const textToInsert = writable("");

// export const sentences = writable([]);

export const tableSentences = derived(
  [query, ngrok_endpoint],
  ([$query, $ngrok_endpoint], set) => {
    if ($query.length === 0) {
      // if no query, return tm sentences
      set(tm_sentences);
    } else if ($ngrok_endpoint.length === 0) {
      console.log("hi");
      // if no backend, filter to exact matches
      set(
        tm_sentences.filter((text) => {
          let match_start = text.src.toLowerCase().search($query.toLowerCase());
          return match_start >= 0;
        })
      );
    } else {
      // else, we have query and backend: use embedding search
      let url = new URL("search/" + $query, $ngrok_endpoint);
      const response = fetch(url, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      })
        .then((response) => response.json())
        .then((d) => {
          console.log(d);
          set(d.results);
        });
    }
  },
  tm_sentences
);

export const sentences = derived(source, ($source) => {
  return $source.split(/\. /).map((s) => {
    return {
      source: s,
      start_index: 0,
      pred_sentence_type: "treatment",
      translation_type: "baseline",
      translation_hyp: "translation",
      suggestion: "suggestion",
      alternatives: [
        {
          src: "alternative one.",
          ref: "alternative one translation.",
          show_ref: false,
        },
        {
          src: "alternative two.",
          ref: "alternative two translation.",
          show_ref: false,
        },
        {
          src: "alternative three.",
          ref: "alternative three translation.",
          show_ref: false,
        },
      ],
    };
  });
});

export const detailShowingData = writable({
  source: "",
  alternatives: [],
});
