<script>
  import Score from "./Score.svelte";
  import NnmtOutput from "./NnmtOutput.svelte";
  import TemplateOutput from "./TemplateOutput.svelte";

  import {
    source,
    selectedSource,
    sentences
  } from "../stores.js";
</script>

<div id="detail-view-wrapper">
    {#if $selectedSource >= 0}
  <div class="input-area" contenteditable="true">
    {$sentences[$selectedSource].source}
  </div>
  <Score />
  {#if $sentences[$selectedSource].translation_type === 'nn-mt'}
  <NnmtOutput />
  {:else if $sentences[$selectedSource].translation_type === 'template'}
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
</style>
