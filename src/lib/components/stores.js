import { writable, derived } from "svelte/store";
import tm_sentences from "../../data/synthetic_tm_data_formatted.json";

// Connection to backend
export const ngrok_endpoint = writable("");
export const ngrok_connected = writable(null);

// Editor view
export const source = writable(
  [
    'Dear Mr. Doe,',
    'You were seen in the emergency department for trouble breathing.',
    'While you were in the hospital we gave you breathing treatments and your symptoms improved.'
  ]
);
export const selectedSource = writable(-1);
export const selected = writable(""); // currently not used, could be used to implement "search by selection"

// Table view
export const query = writable("");
export const activeTableTab = writable("sentences");
export const textToInsert = writable(""); // connects table to editor, currently not used, was used for + buttons on table rows

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

// Analysis view
export const sentences = derived(source, ($source) => {
  return $source.map((s, i) => {
    return {
      source: s,
      start_index: 0,
      pred_sentence_type: "treatment",
      translation_type: i < 1 ? "nn-mt" : "template",
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

// function splitSentences() {
//   if ($ngrok_endpoint.length === 0) {
//     $sentences = content.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
//     console.log($sentences)
//   } else {
//     let url = new URL("tokenize/" + content.text, $ngrok_endpoint);
//     console.log(url);
//     fetch(url, {
//       method: "get",
//       headers: new Headers({
//         "ngrok-skip-browser-warning": "69420",
//       }),
//     })
//       .then((response) => response.json())
//       .then((d) => {
//         console.log(d);
//         $sentences = d.sentences;
//       });
//   }
// }

export const detailShowingData = writable({
  // connects analysis view to table view to show suggestions
  source: "",
  alternatives: [],
});
