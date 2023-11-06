<script>
  import AnalysisModeSentence from "./AnalysisModeSentence.svelte";
  import DetailedAnalysisMode from "./detailed-views/DetailedAnalysisMode.svelte";
  import { createEventDispatcher } from "svelte";
  import { onMount, onDestroy } from "svelte";
  import { selectedSource, sentences } from "../stores.js";

  // const dispatch = createEventDispatcher();

  // let detailView = false;

  // let analysisData = [];
  // onMount(() => {
  //   analysisData = $sentences;
  // });

  // let selected = -1;

  // onDestroy(() => {
  //   console.log(analysisData);
  //   if (analysisData.length > 0)
  //     $source = analysisData.reduce((acc, cur, i) => {
  //       // console.log(cur.source, cur.source.length, cur.source.trim().length)
  //       return (
  //         acc +
  //         cur.source +
  //         (cur.source.length > 0 && i !== analysisData.length - 1 ? ". " : "")
  //       );
  //     }, "");
  //   // change this so that it's just a filter tag, not a new tab window
  //   activeTableTab.set("sentences");
  //   detailShowingData.set({ source: "", alternatives: [] });
  // });
</script>

<div id="analysis-area">
  {#each $sentences as sentence, i}
    <div
      class="analysis-mode-sentence-wrapper"
      on:click={(e) => {
        $selectedSource = $selectedSource === i ? -1 : i;
      }}
    >
      <AnalysisModeSentence
        selected={$selectedSource === i}
        sentenceData={sentence}
      />
    </div>
  {/each}
</div>

<style>
  #analysis-area {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
  }
</style>
