<script>
  import AnalysisModeSentence from "./AnalysisModeSentence.svelte";
  import DetailedAnalysisMode from "./detailed-views/DetailedAnalysisMode.svelte";
  import { createEventDispatcher } from "svelte";
  import { onMount, onDestroy } from "svelte";
  import {
    source,
    sentences,
    detailShowingData,
    activeTableTab,
  } from "./../data.js";

  const dispatch = createEventDispatcher();

  let detailView = false;

  let analysisData = [];
  onMount(() => {
    analysisData = $sentences;
  });

  onDestroy(() => {
    console.log(analysisData);
    if (analysisData.length > 0)
      $source = analysisData.reduce((acc, cur, i) => {
        // console.log(cur.source, cur.source.length, cur.source.trim().length)
        return (
          acc +
          cur.source +
          (cur.source.length > 0 && i !== analysisData.length - 1 ? ". " : "")
        );
      }, "");
    activeTableTab.set("sentences");
    detailShowingData.set({ source: "", alternatives: [] });
  });
</script>

<div id="analysis-area">
  {#each analysisData as sentence, i}
    <div
      class="analysis-mode-sentence-wrapper"
      style:--height={$detailShowingData.source === sentence.source
        ? "60%"
        : "10%"}
      on:click={(e) => {
        if (detailView) {
          if ($detailShowingData.source === sentence.source) {
            // close detail view
            detailView = false;
            detailShowingData.set({ source: "", alternatives: [] });
            activeTableTab.set("sentences");
          } else {
            // keep detail view open but switch to this sentence
            detailShowingData.set(sentence);
          }
        } else {
          // open detail view
          detailView = true;
          detailShowingData.set(sentence);
          activeTableTab.set("suggestions");
        }
      }}
    >
      {#if $detailShowingData.source === sentence.source}
        <DetailedAnalysisMode
          sentenceData={sentence}
          on:accept-suggestion={() => {
            analysisData[i].source = sentence.suggestion;
            detailShowingData.set(analysisData[i]);
            analysisData = analysisData;
          }}
        />
      {:else}
        <AnalysisModeSentence sentenceData={sentence} />
      {/if}
    </div>
  {/each}
</div>

<style>
  #analysis-area {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  .analysis-mode-sentence-wrapper {
    /* min-height: var(--height); */
  }
</style>
