<script>
  import { create } from "quill";
  import EntityChip from "./EntityChip.svelte";
  import ScoreRow from "./ScoreRow.svelte";
  import TemplateSelector from "./TemplateSelector.svelte";
  import { createEventDispatcher } from "svelte";

  export let sentenceData;
  export let sentenceTypes = [
    "greeting",
    "complaint",
    "diagnosis",
    "treatment",
  ];

  let selected = [sentenceData.matched_template];
  let selectedType = sentenceData.pred_sentence_type;
  let editedText = sentenceData.source;
  $: editsMade = !(
    editedText === sentenceData.source &&
    selectedType === sentenceData.pred_sentence_type
  );

  let srcP;
  const dispatch = createEventDispatcher();
</script>

<div class={"sentence-detail-view " + sentenceData.translation_type}>
  <div class={"color-bar " + sentenceData.translation_type} />
  <div class="analysis-area">
    <div class="header-div">
      <p class={"title " + sentenceData.translation_type}>
        {#if sentenceData.translation_type === "template"}
          Matching template
        {:else if sentenceData.translation_type === "nnmt"}
          Using similar translations
        {:else}
          Using baseline model
        {/if}
      </p>
      <select
        id="classification-selector"
        on:click|stopPropagation
        bind:value={selectedType}
      >
        {#each sentenceTypes as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </div>
    <div class="src-div">
      <p
        bind:this={srcP}
        contenteditable="true"
        bind:innerText={editedText}
        on:click|stopPropagation
      >
        {sentenceData.source}
      </p>
      <button on:click|stopPropagation disabled={!editsMade}>rerun</button>
    </div>
    {#if sentenceData.translation_type === "template"}
      <div class="feedback-div">
        <TemplateSelector bind:selected />
        <div class="button-array">
          <button on:click|stopPropagation>accept</button>
          <button on:click|stopPropagation>reject</button>
        </div>
      </div>
    {:else if sentenceData.translation_type === "nnmt"}
      <ScoreRow
        metric={"Utilization"}
        score={sentenceData.nn_mt_metadata.overall_utilization}
      />
      <ScoreRow
        metric={"Coverage"}
        score={sentenceData.nn_mt_metadata.overall_coverage}
      />
    {:else}
      <div class="feedback-div">
        <p on:click|stopPropagation>{sentenceData.suggestion}</p>
        <div class="button-array">
          <button
            on:click|stopPropagation={() => {
              dispatch("accept-suggestion", {
                src: sentenceData.src,
                sugg: sentenceData.suggestion,
              });
              sentenceData.source = sentenceData.suggestion;
              sentenceData = sentenceData;
              srcP.innerText = sentenceData.source;
            }}>accept</button
          >
          <button on:click|stopPropagation>reject</button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .sentence-detail-view {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    align-items: flex-start;
    min-height: min-content;
    border-style: solid;
    border-radius: 0.25rem;
    padding-right: 0.5rem;
    /* padding-bottom: 0.25rem; */
  }

  .sentence-detail-view.template {
    border-color: green;
  }

  .sentence-detail-view.nnmt {
    border-color: orange;
  }

  .sentence-detail-view.baseline {
    border-color: red;
  }

  .header-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .src-div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 1rem;
  }
  .feedback-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1rem;
  }

  .title {
    opacity: 0.75;
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  .title.template {
    color: green;
  }

  .title.nnmt {
    color: orange;
  }
  .title.baseline {
    color: red;
  }

  #classification-selector {
    border: none;
    margin-top: 1rem;
  }

  #classification-selector:focus {
    outline: none;
  }

  .color-bar {
    width: 5px;
    align-self: stretch;
  }

  .color-bar.template {
    background-color: green;
  }

  .color-bar.nnmt {
    background-color: orange;
  }

  .color-bar.baseline {
    background-color: red;
  }

  .analysis-area {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  p {
    text-align: left;
  }

  #button-array {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 0.5rem;
    padding-bottom: 0.25rem;
  }
</style>
