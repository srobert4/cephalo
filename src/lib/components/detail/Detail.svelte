<script>
  import Score from "./Score.svelte";
  import NnmtOutput from "./NnmtOutput.svelte";
  import TemplateOutput from "./TemplateOutput.svelte";

  import { source, selectedSource, detailShowingData } from "../stores.js";
  $: console.log($source);
  $: console.log($selectedSource);
  $: console.log($detailShowingData);
  let inputSource;
</script>

<div id="detail-view-wrapper">
  {#if Object.keys($detailShowingData).length !== 0}
    <div
      class="input-area"
      contenteditable="true"
      bind:textContent={inputSource}
      on:blur={(e) => {
        $source[$selectedSource] = inputSource;
      }}
    >
      {$detailShowingData.source}
    </div>
    <div id="scores-row">
      {#each $detailShowingData.scores as scoreData}
        <Score {...scoreData} />
      {/each}
    </div>
    {#if $detailShowingData.translation_type === "nn-mt"}
      <NnmtOutput />
    {:else if $detailShowingData.translation_type === "template"}
      <TemplateOutput />
    {/if}
  {:else}
    <p>Select a sentence to view translation analysis.</p>
  {/if}
</div>

<style>
  #detail-view-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    flex: 1;
    border: 1px solid blue;
    width: 100%;
  }
  .input-area {
    text-align: left;
    min-height: 2rem;
  }
  #scores-row {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
</style>
