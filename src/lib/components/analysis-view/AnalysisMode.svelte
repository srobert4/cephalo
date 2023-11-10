<script>
  import AnalysisModeSentence from "./AnalysisModeSentence.svelte";
  import {
    activeFilters,
    selectedSource,
    sentences,
    source,
    defaultSentenceData,
    control_mode,
    data,
  } from "../stores.js";
  import AddBlock from "./AddBlock.svelte";
  import Legend from "./Legend.svelte";
  import Switch from "./Switch.svelte";

  function addNewBlock(idx) {
    console.log(idx);
    $data = $data.toSpliced(idx, 0, defaultSentenceData);
    $selectedSource = idx;
  }

  let showTranslations = false;
</script>

<div id="analysis-area" on:click={(e) => ($selectedSource = -1)}>
  <Switch bind:on={showTranslations} />
  <AddBlock on:click={(e) => addNewBlock(0)} />
  {#each $data as sentence, i}
    <div
      class="analysis-mode-sentence-wrapper"
      on:click|stopPropagation={(e) => {
        // $selectedSource = $selectedSource === i ? -1 : i;
        if ($selectedSource === i) return;
        $selectedSource = i;
        $activeFilters = [sentence[sentence.last_method_selected].tableFilter];
      }}
    >
      <AnalysisModeSentence
        selected={$selectedSource === i}
        sentenceData={sentence}
        bind:showTranslations
      />
    </div>
    <AddBlock on:click={(e) => addNewBlock(i + 1)} />
  {/each}
  {#if !$control_mode}
    <Legend />
  {/if}
</div>

<style>
  #analysis-area {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: scroll; */
  }
</style>
