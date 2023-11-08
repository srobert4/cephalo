<script>
  import { onMount, onDestroy } from "svelte";
  import Score from "./Score.svelte";
  import NnmtOutput from "./NnmtOutput.svelte";
  import TemplateOutput from "./TemplateOutput.svelte";

  import {
    source,
    selectedSource,
    detailShowingData,
    methodOverride,
  } from "../stores.js";

  onMount(() => {
    $methodOverride = "";
  });
  onDestroy(() => {
    $methodOverride = "";
  });

  let selectedMethod;
  let methods = ["nnmt", "template"];
</script>

<div id="detail-view-wrapper">
  {#if Object.keys($detailShowingData).length !== 0}
    <div id="method-selector">
      <label
        >Using:
        <select
          bind:value={selectedMethod}
          on:change={(e) => ($methodOverride = methods[selectedMethod])}
        >
          {#each methods as method, i}
            <option
              value={i}
              selected={$detailShowingData.translation_type === method}
            >
              {method}
            </option>
          {/each}
        </select>
      </label>
    </div>
    <div
      class="input-area"
      contenteditable="true"
      on:blur={(e) => {
        $source[$selectedSource] = e.target.innerText;
      }}
    >
      {$detailShowingData.source}
    </div>
    <div id="scores-row">
      {#each $detailShowingData.scores as scoreData}
        <Score {...scoreData} />
      {/each}
    </div>
    {#if $detailShowingData.translation_type === "nn-mt"}
      <NnmtOutput output={$detailShowingData.nnmt_output} />
    {:else if $detailShowingData.translation_type === "template"}
      <TemplateOutput {...$detailShowingData.template_output} />
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
    padding: 1rem;
    /* border: 1px solid blue; */
    /* width: 100%; */
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
  }
  #method-selector {
    display: flex;
    flex-direction: row;
  }
  .input-area {
    text-align: left;
    min-height: 2rem;
  }
  #scores-row {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }
</style>
