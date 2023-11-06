import { writable, derived } from "svelte/store";
import tm_sentences from "../../data/synthetic_tm_data_formatted.json";
import terms from "../../data/terms.json";

// Connection to backend
export const ngrok_endpoint = writable("");
export const ngrok_connected = writable(null);

// Editor view
export const source = writable([
  "Dear Mr. Doe,",
  "You were seen in the emergency department for trouble breathing.",
  "While you were in the hospital we gave you breathing treatments and your symptoms improved.",
]);
export const selectedSource = writable(-1);
export const selected = writable(""); // currently not used, could be used to implement "search by selection"

// Analysis view
export const sentences = derived(source, ($source) => {
  return $source.map((s, i) => {
    return {
      source: s,
      start_index: 0,
      translation_type: i < 1 ? "nn-mt" : "template",
      translation_hyp: "translation",
      scores: [
        {
          name: "score name",
          info: "score description",
          score: i === 0 ? 1 : i === 1 ? 3 : 5,
        },
        {
          name: "score 2 name",
          info: "score 2 description",
          score: i === 0 ? 1 : i === 1 ? 3 : 5,
        },
      ],
      nnmt_output: [
        { word: "Dies", utilized: true, backtranslation: "This" },
        { word: "ist", utilized: true, backtranslation: "is" },
        { word: "eine", utilized: false, backtranslation: "an" },
        { word: "Ausgabe", utilized: false, backtranslation: "output" },
      ],
      template_output: {
        templates: [
          {
            template: "Avoid strenuous activities for at least <TIME>.",
            translation:
              "Vermeiden Sie anstrengende Aktivitäten für mindestens <TIME>.",
          },
          {
            template: "Do not lift anything over <N1> pounds for <N2> weeks.",
            translation: "Heben Sie <N2> Wochen lang nichts über <N1> Pfund.",
          },
        ],
        terms: [
          {
            type: "<TIME>",
            term: "2 weeks",
            translation: "2 Wochen",
          },
        ],
        filled:
          "Vermeiden Sie anstrengende Aktivitäten für mindestens 2 Wochen.",
      },
      tableFilter: i < 1 ? "nearest neighbors" : "templates",
      tableResults: [
        {
          src: "Source",
          display_src: "Source",
          ref: "Reference",
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

export const detailShowingData = derived(
  [sentences, selectedSource],
  ([$sentences, $seletedSource]) => {
    if ($seletedSource < 0) {
      return {};
    } else {
      return $sentences[$seletedSource];
    }
  },
  {}
);

// Table view
export const query = writable("");
// export const activeTableTab = writable("sentences");
export const textToInsert = writable(""); // connects table to editor, currently not used, was used for + buttons on table rows
export const neighborFilterEnabled = derived(
  detailShowingData,
  ($detailShowingData) => {
    return (
      Object.keys($detailShowingData).length > 0 &&
      $detailShowingData.translation_type == "nn-mt"
    );
  }
);
export const activeFilters = writable(["sentences"]);

// export const sentenceFilter = writable(true);
// export const termFilter = writable(false);
// export const templateFilter = writable(false);
// export const neighborFilter = writable(false);
// TODO: ultimately tableData should also be derived from source and selectedSource
// because when the selected sentence is changed we change the filters/order of sentences
// to reflect the analysis for the selected sentence.
export const tableData = derived(
  [query, ngrok_endpoint, activeFilters, detailShowingData],
  ([$query, $ngrok_endpoint, $activeFilters, $detailShowingData], set) => {
    let data = [];
    if ($activeFilters.includes("sentences")) {
      data = [...data, ...tm_sentences];
    }
    if ($activeFilters.includes("terms")) {
      data = [...data, ...terms];
    }
    if ($activeFilters.includes("templates")) {
      data = [
        {
          src: "Template hole",
          display_src: "Template hole",
          ref: "Template reference",
          show_ref: false,
        },
        ...data,
      ];
    }
    if ($activeFilters.includes("nearest neighbors")) {
      data = [...$detailShowingData.tableResults, ...data];
    }
    if (data.length === 0) {
      data = [...tm_sentences, ...terms];
    }
    if ($query.length === 0) {
      // if no query, return all data
      set(data);
    } else if ($ngrok_endpoint.length === 0) {
      // console.log("hi");
      // if no backend, filter to exact matches
      set(
        data.reduce((acc, text) => {
          let match_start = text.src.toLowerCase().search($query.toLowerCase());
          if (match_start >= 0) {
            acc.push({
              ...text,
              display_src:
                match_start >= 0
                  ? text.src.substring(0, match_start) +
                    '<span style="font-weight: 800">' +
                    text.src.substring(
                      match_start,
                      match_start + $query.length
                    ) +
                    "</span>" +
                    text.src.substring(match_start + $query.length)
                  : text.src,
            });
          }
          return acc;
        }, [])
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
          // console.log(d);
          set(
            d.results.map((text) => {
              let match_start = text.src
                .toLowerCase()
                .search($query.toLowerCase());
              if (match_start >= 0) {
                return {
                  ...text,
                  display_src:
                    match_start >= 0
                      ? text.src.substring(0, match_start) +
                        '<span style="font-weight: 800">' +
                        text.src.substring(
                          match_start,
                          match_start + $query.length
                        ) +
                        "</span>" +
                        text.src.substring(match_start + $query.length)
                      : text.src,
                };
              }
              return text;
            })
          );
        });
    }
  },
  tm_sentences
);
