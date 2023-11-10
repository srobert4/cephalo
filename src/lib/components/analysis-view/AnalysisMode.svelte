<script>
  import AnalysisModeSentence from "./AnalysisModeSentence.svelte";
  import {
    activeFilters,
    selectedSource,
    sentences,
    source,
    defaultSentenceData,
  } from "../stores.js";
  import AddBlock from "./AddBlock.svelte";

  function addNewBlock(idx) {
    console.log(idx);
    $sentences = $sentences.toSpliced(idx, 0, defaultSentenceData);
    $source = $source.toSpliced(idx, 0, "");
    $selectedSource = idx;
  }
</script>

<div id="analysis-area" on:click={(e) => ($selectedSource = -1)}>
  <AddBlock on:click={(e) => addNewBlock(0)} />
  {#each $sentences as sentence, i}
    <div
      class="analysis-mode-sentence-wrapper"
      on:click|stopPropagation={(e) => {
        // $selectedSource = $selectedSource === i ? -1 : i;
        if ($selectedSource === i) return;
        $selectedSource = i;
        $activeFilters = [$sentences[$selectedSource].tableFilter];
      }}
    >
      <AnalysisModeSentence
        selected={$selectedSource === i}
        sentenceData={sentence}
      />
    </div>
    <AddBlock on:click={(e) => addNewBlock(i + 1)} />
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
