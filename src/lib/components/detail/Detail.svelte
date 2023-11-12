<script>
  import { onMount, onDestroy } from "svelte";
  import Score from "./Score.svelte";
  import NnmtOutput from "./NnmtOutput.svelte";
  import TemplateOutput from "./TemplateOutput.svelte";
  import Legend from './Legend.svelte';
  import {
    updateMethod,
    updateSelectedSentence,
  } from "../analyzeSentence.svelte";

  import {
    selectedSource,
    detailShowingData,
    loading_results,
  } from "../stores.js";

  let selectedMethod;
  let methods = ["nnmt", "template"];
</script>

<div id="detail-view-wrapper">
  {#if $selectedSource !== -1 && $loading_results}
    <div>Loading...</div>
  {:else if Object.keys($detailShowingData).length !== 0}
    <div id="method-selector">
      <label
        >Using:
        <select
          bind:value={selectedMethod}
          on:change={(e) => updateMethod(methods[selectedMethod])}
        >
          {#each methods as method, i}
            <option
              value={i}
              selected={$detailShowingData.last_method_selected === method}
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
      on:blur={(e) => updateSelectedSentence(e)}
    >
      {$detailShowingData.source}
    </div>
    <div id="scores-row">
      {#each $detailShowingData[$detailShowingData.last_method_selected].scores as scoreData}
        <Score {...scoreData} />
      {/each}
    </div>
    {#if $detailShowingData.last_method_selected === "nnmt"}
      <NnmtOutput {...$detailShowingData["nnmt"]} />
    {:else if $detailShowingData.last_method_selected === "template"}
      <TemplateOutput {...$detailShowingData["template"]} />
    {/if}
  {:else}
    <p>Select a sentence to view translation analysis.</p>
    <Legend/>
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
    max-height: 60%;
    overflow: scroll;
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
