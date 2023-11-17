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

  let templateStyle = 'style="font-family: Courier New, Courier, monospace;"';
  let termStyle =
    'style="font-family: Courier New, Courier, monospace; color: blue;"';
  let addedStyle = 'style="color: green;"';
</script>

<div class="output-wrapper">
  <p class="annotation">Using template:</p>
  <select class="template-selector" bind:value={selectedTemplate}>
    {#each templates as template, i}
      <option value={i}>
        {@html template.template}
      </option>
    {/each}
  </select>
  <p class="de template">{@html templates[selectedTemplate].translation}</p>
  <p class="annotation" style="margin-bottom: 0.5rem;">
    Filling the template with:
  </p>
  <TermList bind:terms />
  <div>
    <p class="annotation">Giving final translation:</p>
    {#if noChanges}
      <p class="de">
        {@html translation_hyp_formatted
          .replaceAll('class="template"', templateStyle)
          .replaceAll('class="term"', termStyle)
          .replaceAll('class="added"', addedStyle)}
      </p>
    {:else}
      <p class="de">apply changes to see output</p>
    {/if}
  </div>
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
    margin-top: 1rem;
  }
  .template {
    font-family: $referenceFont;
    font-weight: $referenceFontWeight;
  }
  p {
    text-align: left;
  }
  .de {
    color: $systemGray;
    // font-style: italic;
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
  .annotation {
    margin-bottom: 0;
    font-family: $annotationFont;
    color: $annotationColor;
  }
  .added {
    color: green;
  }
  .term {
    color: blue;
    font-family: $referenceFont;
    font-weight: $referenceFontWeight;
  }
</style>
