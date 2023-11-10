<script>
  import AnalysisModeSentence from "./AnalysisModeSentence.svelte";
  import {
    activeFilters,
    selectedSource,
    sentences,
    source,
    defaultSentenceData,
    control_mode,
    baselineTranslations,
  } from "../stores.js";
  import AddBlock from "./AddBlock.svelte";
  import Legend from "./Legend.svelte";
  import Switch from "./Switch.svelte";

  function addNewBlock(idx) {
    console.log(idx);
    $sentences = $sentences.toSpliced(idx, 0, defaultSentenceData);
    $source = $source.toSpliced(idx, 0, "");
    $selectedSource = idx;
  }

  let showTranslations = false;
</script>

<div id="analysis-area" on:click={(e) => ($selectedSource = -1)}>
  <Switch bind:on={showTranslations} />
  <AddBlock on:click={(e) => addNewBlock(0)} />
  {#each $control_mode ? $baselineTranslations : $sentences as sentence, i}
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
