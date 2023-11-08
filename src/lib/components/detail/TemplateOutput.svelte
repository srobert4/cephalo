<script>
  import { templateOverride } from "../stores.js";

  export let templates = [];
  export let terms = [];
  export let filled = "";
  let selectedTemplate = 0;
</script>

<div class="output-wrapper">
  <select
    bind:value={selectedTemplate}
    on:change={(e) => ($templateOverride = templates[selectedTemplate])}
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
  <p>{filled}</p>
</div>

<style>
  .output-wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  p {
    text-align: left;
  }
  .de {
    color: #a8a8a8;
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
