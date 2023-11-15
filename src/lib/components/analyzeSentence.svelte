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
    defaultTranslationData,
    data,
    selected,
    instruction_set,
  } from "./stores.js";
  import instructions from "../../data/source_instructions_data.json";

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

  export async function logData(condition = "", instructions = "") {
    let url = new URL("log", get(ngrok_endpoint));
    url.searchParams.append("condition", condition);
    url.searchParams.append("instructions", instructions);
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(get(data)),
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "Content-type": "application/json",
      }),
    });
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
    loading_results.set(true);
    analyzeSentence(get(detailShowingData).source, "template", template).then(
      (result) => {
        data.update((data) =>
          data.map((sentenceData, i) => {
            return i === get(selectedSource) ? result : sentenceData;
          })
        );
        loading_results.set(false);
      }
    );
  }

  export async function updateMethod(method) {
    data.update((data) =>
      data.map((d, i) => {
        return i === get(selectedSource)
          ? {
              ...d,
              last_method_selected: method,
            }
          : d;
      })
    );
    activeFilters.set([get(data)[get(selectedSource)][method].tableFilter]);
  }

  export async function resetInstructions(
    lastCondition = "",
    lastInstructions = ""
  ) {
    logData(lastCondition, lastInstructions).then((d) => console.log(d));
    selectedSource.set(-1);
    data.set(instructions[get(instruction_set)]);
    // let sentences = instructions[get(instruction_set)];
    // if (!get(ngrok_connected)) {
    //   data.set(
    //     sentences.map((s) => {
    //       return {
    //         source: s,
    //         last_method_selected: "baseline",
    //         baseline: {
    //           ...defaultTranslationData,
    //           translation_hyp: s,
    //         },
    //         nnmt: {
    //           ...defaultTranslationData,
    //           translation_type: "nnmt",
    //           translation_hyp: s,
    //         },
    //         template: {
    //           ...defaultTranslationData,
    //           translation_type: "template",
    //           translation_hyp: s,
    //         },
    //       };
    //     })
    //   );
    // } else {
    //   loading_results.set(true);
    //   let res = sentences.map((d) => analyzeSentence(d));
    //   Promise.all(res).then((d) => {
    //     console.log(d);
    //     data.set(d);
    //     loading_results.set(false);
    //   });
    // }
  }

  export async function updateSentence(e, idx) {
    if (get(data)[idx].source === e.target.innerText) return;
    if (!get(ngrok_connected)) {
      data.update((data) =>
        data.map((sentenceData, i) => {
          return i === idx
            ? {
                ...sentenceData,
                source: e.target.innerText,
                baseline: {
                  ...sentenceData.baseline,
                  translation_hyp: e.target.innerText,
                },
                nnmt: {
                  ...sentenceData.nnmt,
                  translation_hyp: e.target.innerText,
                },
                template: {
                  ...sentenceData.template,
                  translation_hyp: e.target.innerText,
                },
              }
            : sentenceData;
        })
      );
    } else {
      loading_results.set(true);
      analyzeSentence(e.target.innerText).then((result) => {
        data.update((data) =>
          data.map((sentenceData, i) => {
            return i === idx ? result : sentenceData;
          })
        );
        activeFilters.set([result[result.last_method_selected].tableFilter]);
        loading_results.set(false);
      });
    }
  }

  // export async function updateSentenceText(e) {
  //   if (get(detailShowingData).source === e.target.innerText) return;
  //   source.update((src) =>
  //     src.map((s, i) => {
  //       return i === get(selectedSource) ? e.target.innerText : s;
  //     })
  //   );
  //   if (!get(ngrok_connected)) {
  //     sentences.update((sentences) =>
  //       sentences.map((sentenceData, i) => {
  //         return i === get(selectedSource)
  //           ? {
  //               ...sentenceData,
  //               source: e.target.innerText,
  //               translation_hyp: e.target.innerText,
  //             }
  //           : sentenceData;
  //       })
  //     );
  //   } else {
  //     loading_results.set(true);
  //     analyzeSentence(e.target.innerText).then((result) => {
  //       sentences.update((sentences) =>
  //         sentences.map((sentenceData, i) => {
  //           return i === get(selectedSource) ? result : sentenceData;
  //         })
  //       );
  //       activeFilters.set([result.tableFilter]);
  //       loading_results.set(false);
  //     });
  //   }
  // }

  // export async function syncTranslations(e) {
  //   if (e.target.value === 'control') {
  //     // sync baselineTranslations with sentences
  //     let res = get(baselineTranslations).map((t,i) => {
  //       let newSrc = get(source)[i]
  //       if (t.source === newSrc) return t;
  //       if (!get(ngrok_connected)) return {
  //               ...t,
  //               source: newSrc,
  //               translation_hyp: newSrc,
  //             }
  //       return getBaselineTranslation(newSrc);
  //     });
  //     Promise.all(res).then((d) => {
  //       console.log(d);
  //       baselineTranslations.set(d);
  //     });
  //   } else {
  //     // sync sentences with baselineTranslations
  //     loading_results.set(true)
  //     let res = get(sentences).map((t,i) => {
  //       let newSrc = get(source)[i]
  //       if (t.source === newSrc) return t;
  //       if (!get(ngrok_connected)) return {
  //               ...t,
  //               source: newSrc,
  //               translation_hyp: newSrc,
  //             }
  //       return analyzeSentence(newSrc);
  //     });
  //     Promise.all(res).then((d) => {
  //       console.log(d);
  //       sentences.set(d);
  //       loading_results.set(false)
  //     });
  //   }

  // }

  // export async function updateBaselineTranslations(e) {
  //   if (get(source)[get(selectedSource)] === e.target.innerText) return;
  //   source.update((src) =>
  //     src.map((s, i) => {
  //       return i === get(selectedSource) ? e.target.innerText : s;
  //     })
  //   );
  //   if (!get(ngrok_connected)) {
  //     baselineTranslations.update((ts) =>
  //       ts.map((t, i) => {
  //         return i === get(selectedSource)
  //           ? {
  //               ...defaultSentenceData,
  //               source: e.target.innerText,
  //               translation_hyp: e.target.innerText,
  //             }
  //           : t;
  //       })
  //     );
  //   } else {
  //     getBaselineTranslation(e.target.innerText).then((result) => {
  //       baselineTranslations.update((translations) =>
  //         translations.map((translation, i) => {
  //           return i === get(selectedSource) ? {
  //             ...defaultSentenceData,
  //             ...result
  //           } : translation;
  //         })
  //       );
  //     });
  //   }
  // }
</script>
