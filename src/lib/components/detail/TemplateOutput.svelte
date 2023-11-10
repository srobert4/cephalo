<script>
  import { updateTemplate } from "../analyzeSentence.svelte";

  export let templates = [];
  export let terms = [];
  export let translation_hyp = "";
  export let idx_of_filled_template = 0;

  $: selectedTemplate = idx_of_filled_template;
</script>

<div class="output-wrapper">
  <select
    bind:value={selectedTemplate}
    on:change={(e) => updateTemplate(templates[selectedTemplate].template)}
  >
    {#each templates as template, i}
      <option value={i}>
        {@html template.template}
      </option>
    {/each}
  </select>
  <p class="de">{@html templates[selectedTemplate].translation}</p>
  {#each terms as term}
    <div class="term-wrapper">
      <span>{@html term.type} = </span>
      <div class="term-translation-wrapper">
        <span>{term.term}</span>
        <span class="de">{term.translation}</span>
      </div>
      {#if !term.translation_in_filled}
        <span style="color:red">!!</span>
      {/if}
    </div>
  {/each}
  <p>{translation_hyp}</p>
</div>

<style lang="scss">
  @import "../../../variables.scss";
  .output-wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
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
  }
  .term-translation-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
