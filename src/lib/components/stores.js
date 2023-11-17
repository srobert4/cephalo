import { writable, derived } from "svelte/store";
import tm_sentences from "../../data/discharge_instructions_formatted.json";
import terms from "../../data/terms.json";
import templates from "../../data/templates.json";
import instructions from "../../data/source_instructions_data.json";

// Connection to backend
export const ngrok_endpoint = writable("");
export const ngrok_last_tested = writable({});
export const ngrok_connected = writable(false);
export const loading_results = writable(false);

// Control vs Treatment mode
export const control_mode = writable(true);

// Instruction set
export const instruction_set = writable("infection");

// Editor view
export const source = writable([
  "Dear Mr. Doe,",
  "You were seen in the emergency department for trouble breathing.",
  "While you were in the hospital we gave you breathing treatments and your symptoms improved.",
]);
export const selectedSource = writable(-1);
export const selected = writable(""); // currently not used, could be used to implement "search by selection"

// Analysis view
export const defaultTranslationData = {
  translation_type: "none",
  translation_hyp: "",
  scores: [],
  words: [],
  templates: [],
  terms: [],
  tableFilter: "sentence",
  tableResults: [],
};

export const defaultSentenceData = {
  source: "",
  last_method_selected: "baseline",
  baseline: defaultTranslationData,
  nnmt: defaultTranslationData,
  template: defaultTranslationData,
};

export const data = writable(instructions["infection"]);
export const lastDeletedIdx = writable(-1);
export const lastDeleted = writable({});
export const pendingChanges = writable(false);

export const detailShowingData = derived(
  [data, selectedSource],
  ([$data, $seletedSource]) => {
    if ($seletedSource < 0) {
      return {};
    } else {
      return $data[$seletedSource];
    }
  },
  {}
);

// Table view
export const query = writable("");
// export const activeTableTab = writable("sentences");
export const textToInsert = writable(""); // connects table to editor, currently not used, was used for + buttons on table rows
export const activeFilters = writable([]);

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
        data = [...tm_sentences, ...data];
      }
      if ($activeFilters.includes("terms")) {
        data = [...terms, ...data];
      }
      if ($activeFilters.includes("templates")) {
        if (Object.keys($detailShowingData).length > 0) {
          // ordered by similarity to selected sentence
          data = [...$detailShowingData["template"].tableResults, ...data];
        } else {
          // unordered
          data = [...templates, ...data];
        }
      }
      if (
        $activeFilters.includes("used for translation") &&
        Object.keys($detailShowingData).length > 0
      ) {
        if ($detailShowingData.last_method_selected === "nnmt") {
          data = [...$detailShowingData["nnmt"].tableResults, ...data];
        }
      }
      if (data.length === 0) {
        data = [...templates, ...tm_sentences, ...terms];
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
