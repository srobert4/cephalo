<script>
  import { detailShowingData, selectedSource } from "../stores";
  import { updateTemplate } from "../analyzeSentence.svelte";
  import Icon from "../Icon.svelte";
  import TermList from "./TermList.svelte";

  export let templates = [];
  export let terms = [];
  export let translation_hyp = "";
  export let translation_hyp_formatted = "";
  export let idx_of_filled_template = 0;

  $: selectedTemplate = idx_of_filled_template;

  $: noChanges =
    selectedTemplate === idx_of_filled_template &&
    terms === $detailShowingData["template"].terms;
</script>

<div class="output-wrapper">
  <select class="template-selector" bind:value={selectedTemplate}>
    {#each templates as template, i}
      <option value={i}>
        {@html template.template}
      </option>
    {/each}
  </select>
  <p class="de">{@html templates[selectedTemplate].translation}</p>
  <TermList bind:terms />
  <p>
    Filled:
    {#if noChanges}
      <span class="de">{@html translation_hyp_formatted}</span>
    {:else}
      <span class="de">apply changes to see output</span>
    {/if}
  </p>
  <div class="button-row">
    <button
      disabled={noChanges}
      on:click={(e) =>
        updateTemplate(
          $selectedSource,
          $detailShowingData.source,
          templates[selectedTemplate].template,
          terms
        )}>apply changes</button
    >
    <button
      disabled={noChanges}
      on:click={(e) => {
        selectedTemplate = idx_of_filled_template;
        terms = $detailShowingData["template"].terms;
      }}>reset changes</button
    >
  </div>
  <!-- {#each terms as term}
    <div class="term-wrapper">
      <span>{@html term.type} = </span>
      <div class="term-translation-wrapper">
        <span>{term.term}</span>
        <span class="de">{term.translation}</span>
      </div>
      {#if !term.translation_in_filled}
        <Icon name={"warning"} color={"red"} />
      {/if}
    </div>
  {/each} -->
</div>

<style lang="scss">
  @import "../../../variables.scss";
  .output-wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  .template-selector {
    height: 3rem;
    white-space: pre-wrap;
    font-size: 1rem;
    padding: 0.2rem;
  }

  p {
    text-align: left;
  }
  .de {
    color: $systemGray2;
    font-style: italic;
  }
  .term-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    align-items: center;
  }
  .term-translation-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .button-row {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    justify-content: center;
  }
</style>
