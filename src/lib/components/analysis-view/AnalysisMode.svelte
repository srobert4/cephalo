<script>
  import AnalysisModeSentence from "./AnalysisModeSentence.svelte";
  import {
    activeFilters,
    selectedSource,
    defaultSentenceData,
    data,
    lastDeleted,
    lastDeletedIdx,
  } from "../stores.js";
  import AddBlock from "./AddBlock.svelte";
  import Switch from "./Switch.svelte";
  import Icon from "../Icon.svelte";

  function addNewBlock(idx) {
    console.log(idx);
    $data = $data.toSpliced(idx, 0, defaultSentenceData);
    $selectedSource = idx;
  }

  function removeBlock(idx) {
    $lastDeleted = $data[idx];
    $data = $data.toSpliced(idx, 1);
    $lastDeletedIdx = idx;
    if ($selectedSource === idx) $selectedSource = -1;
  }

  function undoDelete() {
    if ($lastDeletedIdx === -1) return;
    $data = $data.toSpliced($lastDeletedIdx, 0, $lastDeleted);
    $lastDeletedIdx = -1;
  }

  $: nothingToUndo = $lastDeletedIdx === -1;
  let showTranslations = false;
</script>

<div
  id="analysis-area"
  on:click={(e) => {
    $selectedSource = -1;
    $activeFilters = $activeFilters.filter((x) => x !== "nearest neighbors");
  }}
>
  <div id="top-row">
    <button id="undo" disabled={nothingToUndo} on:click={undoDelete}
      ><Icon
        name={"undo"}
        height={"1.5rem"}
        width={"1.5rem"}
        color={"grey"}
      /></button
    >
    <Switch bind:on={showTranslations} />
  </div>
  <div id="sentence-list">
    <AddBlock on:click={(e) => addNewBlock(0)} />
    {#each $data as sentence, i}
      <div
        class="analysis-mode-sentence-wrapper"
        on:click|stopPropagation={(e) => {
          // $selectedSource = $selectedSource === i ? -1 : i;
          if ($selectedSource === i) return;
          $selectedSource = i;
          $activeFilters = [
            sentence[sentence.last_method_selected].tableFilter,
          ];
        }}
      >
        <AnalysisModeSentence
          selected={$selectedSource === i}
          sentenceData={sentence}
          id={i}
          bind:showTranslations
          on:x-pressed={(e) => removeBlock(i)}
        />
      </div>
      <AddBlock on:click={(e) => addNewBlock(i + 1)} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../../variables.scss";
  #analysis-area {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #sentence-list {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  #top-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  #undo {
    padding: 0;
  }
  #undo:disabled {
    cursor: auto;
    opacity: 50%;
  }

  #undo:disabled:hover {
    border-color: transparent;
  }
  // .analysis-mode-sentence-wrapper {
  //   background-color: $systemGray5t;
  // }
</style>
