import { writable, derived } from "svelte/store";
import tm_sentences from "../../data/synthetic_tm_data_formatted.json";
import terms from "../../data/terms.json";
import templates from "../../data/templates.json";

// Connection to backend
export const ngrok_endpoint = writable("");
export const ngrok_last_tested = writable({});
export const ngrok_connected = writable(false);

// Editor view
export const source = writable([
  "Dear Mr. Doe,",
  "You were seen in the emergency department for trouble breathing.",
  "While you were in the hospital we gave you breathing treatments and your symptoms improved.",
]);
export const selectedSource = writable(-1);
export const selected = writable(""); // currently not used, could be used to implement "search by selection"

// Template detail
export const templateOverride = writable("");
export const methodOverride = writable("");

// Analysis view
export const defaultSentenceData = {
  source: "",
  start_idx: 0,
  translation_type: "none",
  translation_hyp: "",
  scores: [],
  nnmt_output: [],
  template_output: [],
  tableFilter: "sentences",
  tableResults: [],
};
export const sentences = writable(
  [
    "Dear Mr. Doe,",
    "You were seen in the emergency department for trouble breathing.",
    "While you were in the hospital we gave you breathing treatments and your symptoms improved.",
  ].map((s, i) => {
    return {
      source: s,
      start_index: 0,
      translation_type: i < 1 ? "nnmt" : "template",
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
        {
          word: '<span style="color: #A8A8A8">eine<span>',
          utilized: false,
          backtranslation: "an",
        },
        {
          word: '<span style="color: #A8A8A8">Ausgabe<span>',
          utilized: false,
          backtranslation: "output",
        },
      ],
      template_output: {
        templates: [
          {
            template: "Avoid strenuous activities for at least [TIME].",
            translation:
              "Vermeiden Sie anstrengende Aktivitäten für mindestens [TIME].",
          },
          {
            template: "Do not lift anything over [N1] pounds for [N2] weeks.",
            translation: "Heben Sie [N2] Wochen lang nichts über [N1] Pfund.",
          },
        ],
        terms: [
          {
            type: "[TIME]",
            term: "2 weeks",
            translation: "2 Wochen",
            translation_in_filled: false,
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
  })
);
// export const sentences = derived(
//   [ngrok_endpoint, source, methodOverride, selectedSource],
//   (
//     [$ngrok_endpoint, $source, $methodOverride, $seletedSource],
//     set,
//     update
//   ) => {
//     if ($ngrok_endpoint.length === 0) {
//       set(
//         $source.map((s, i) => {
//           return {
//             source: s,
//             start_index: 0,
//             translation_type: i < 1 ? "nnmt" : "template",
//             translation_hyp: "translation",
//             scores: [
//               {
//                 name: "score name",
//                 info: "score description",
//                 score: i === 0 ? 1 : i === 1 ? 3 : 5,
//               },
//               {
//                 name: "score 2 name",
//                 info: "score 2 description",
//                 score: i === 0 ? 1 : i === 1 ? 3 : 5,
//               },
//             ],
//             nnmt_output: [
//               { word: "Dies", utilized: true, backtranslation: "This" },
//               { word: "ist", utilized: true, backtranslation: "is" },
//               {
//                 word: '<span style="color: #A8A8A8">eine<span>',
//                 utilized: false,
//                 backtranslation: "an",
//               },
//               {
//                 word: '<span style="color: #A8A8A8">Ausgabe<span>',
//                 utilized: false,
//                 backtranslation: "output",
//               },
//             ],
//             template_output: {
//               templates: [
//                 {
//                   template: "Avoid strenuous activities for at least [TIME].",
//                   translation:
//                     "Vermeiden Sie anstrengende Aktivitäten für mindestens [TIME].",
//                 },
//                 {
//                   template:
//                     "Do not lift anything over [N1] pounds for [N2] weeks.",
//                   translation:
//                     "Heben Sie [N2] Wochen lang nichts über [N1] Pfund.",
//                 },
//               ],
//               terms: [
//                 {
//                   type: "[TIME]",
//                   term: "2 weeks",
//                   translation: "2 Wochen",
//                   translation_in_filled: false,
//                 },
//               ],
//               filled:
//                 "Vermeiden Sie anstrengende Aktivitäten für mindestens 2 Wochen.",
//             },
//             tableFilter: i < 1 ? "nearest neighbors" : "templates",
//             tableResults: [
//               {
//                 src: "Source",
//                 display_src: "Source",
//                 ref: "Reference",
//                 show_ref: false,
//               },
//             ],
//           };
//         })
//       );
//     } else {
//       let res = $source.map((s, i) => {
//         // if (i === $seletedSource && $templateOverride !== '') {
//         // TODO: handle overrides, also add force nnmt/templates
//         // }
//         let url = new URL("analyze", $ngrok_endpoint);
//         url.searchParams.append("sentence", s);
//         console.log($seletedSource, $methodOverride);
//         url.searchParams.append(
//           "method",
//           i === $seletedSource ? $methodOverride : ""
//         );
//         // let url = new URL("analyze/" + s, $ngrok_endpoint);
//         return analyzeSentence(url);
//       });
//       Promise.all(res).then((d) => set(d));
//     }
//   }
// );

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
      $detailShowingData.translation_type == "nnmt"
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
    if (true) {
      //($ngrok_endpoint.length === 0) {
      // if no backend, load local data and filter to exact matches
      let data = [];
      if ($activeFilters.includes("sentences")) {
        data = [...data, ...tm_sentences];
      }
      if ($activeFilters.includes("terms")) {
        data = [...data, ...terms];
      }
      if ($activeFilters.includes("templates")) {
        if (Object.keys($detailShowingData).length > 0) {
          data = [...$detailShowingData.tableResults, ...data];
        } else {
          // TODO: have all templates stored for manual exploration
          data = [...templates, ...data];
        }
      }
      if (
        $activeFilters.includes("nearest neighbors") &&
        Object.keys($detailShowingData).length > 0
      ) {
        data = [...$detailShowingData.tableResults, ...data];
      }
      if (data.length === 0) {
        data = [...tm_sentences, ...terms];
      }
      if ($query.length === 0) {
        // if no query, return all data
        set(data);
      } else {
        // otherwise, filter and format
        set(
          data.reduce((acc, text) => {
            let match_start = text.src
              .toLowerCase()
              .search($query.toLowerCase());
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
      }
    } else {
      // else, we have a backend to do filtering and searching
      // TODO: add filters to query url
      let data = [];
      let url = new URL("search/" + $query, $ngrok_endpoint);
      // let url = new URL('search/', $ngrok_endpoint);
      // url.searchParams.append('query', $query);
      // url.searchParams.append('filters', $activeFilters.join(' '));
      const response = fetch(url, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
          "Access-Control-Allow-Origin": "*",
        }),
      })
        .then((response) => response.json())
        .then((d) => {
          data = d.results;
        });
      if (
        $activeFilters.includes("nearest neighbors") &&
        Object.keys($detailShowingData).length > 0
      ) {
        data = [...$detailShowingData.tableResults, ...data];
      }
      let formatted = data.map((text) => {
        let match_start = text.src.toLowerCase().search($query.toLowerCase());
        if (match_start >= 0) {
          return {
            ...text,
            display_src:
              match_start >= 0
                ? text.src.substring(0, match_start) +
                  '<span style="font-weight: 800">' +
                  text.src.substring(match_start, match_start + $query.length) +
                  "</span>" +
                  text.src.substring(match_start + $query.length)
                : text.src,
          };
        }
        return text;
      });
      set(formatted);
    }
  },
  tm_sentences
);
