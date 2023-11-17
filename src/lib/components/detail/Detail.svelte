<script>
  import { onMount, onDestroy } from "svelte";
  import Score from "./Score.svelte";
  import NnmtOutput from "./NnmtOutput.svelte";
  import TemplateOutput from "./TemplateOutput.svelte";
  import Legend from "./Legend.svelte";
  import {
    updateMethod,
    updateSentence,
    cancelReload,
  } from "../analyzeSentence.svelte";

  import {
    selectedSource,
    detailShowingData,
    loading_results,
  } from "../stores.js";

  $: console.log($detailShowingData.last_method_selected);

  // $: console.log(selectedMethod);
  let selectedMethod = 0;
  let refreshMethod = function () {
    selectedMethod =
      $selectedSource === -1
        ? 0
        : $detailShowingData.last_method_selected === "nnmt"
        ? 0
        : 1;
  };
  $: $selectedSource, refreshMethod();
  let methods = ["nnmt", "template"];
</script>

<div id="detail-view-wrapper">
  {#if $selectedSource !== -1 && $loading_results}
    <div>Loading...</div>
    <button on:click={cancelReload}>Cancel reload</button>
  {:else if Object.keys($detailShowingData).length !== 0}
    <div>
      <p class="annotation">Your input:</p>
      <p style="margin-top: 0">{$detailShowingData.source}</p>
    </div>
    <div id="method-selector">
      <label class="annotation"
        >Translating input with the
        <select
          bind:value={selectedMethod}
          on:change={(e) => {
            updateMethod($selectedSource, methods[e.target.value]);
          }}
        >
          {#each methods as method, i}
            <option value={i}>
              {method === "nnmt" ? "flexible" : method}
            </option>
          {/each}
        </select>
        approach.
      </label>
    </div>
    <!-- <div class="input-area">
      {$detailShowingData.source}
    </div> -->
    {#if $detailShowingData.last_method_selected === "nnmt"}
      <!-- <div id="scores-row">
        {#each $detailShowingData[$detailShowingData.last_method_selected].scores as scoreData}
          <Score {...scoreData} />
        {/each}
      </div> -->
      <NnmtOutput {...$detailShowingData["nnmt"]} />
    {:else if $detailShowingData.last_method_selected === "template"}
      <TemplateOutput {...$detailShowingData["template"]} />
    {/if}
  {:else}
    <p>Select a sentence to view translation analysis.</p>
    <Legend />
  {/if}
</div>

<style lang="scss">
  @import "../../../variables.scss";
  #detail-view-wrapper {
    display: flex;
    flex-direction: column;
    /* row-gap: 1rem; */
    /* flex: 1; */
    padding: 1rem 2rem;
    /* border: 1px solid blue; */
    /* width: 100%; */
    max-height: 60%;
    overflow-y: scroll;
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
  }
  p,
  label {
    text-align: left;
  }
  #method-selector {
    display: flex;
    flex-direction: row;
  }
  .input-area {
    text-align: left;
  }
  #scores-row {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
  }

  .annotation {
    margin-bottom: 0;
    font-family: $annotationFont;
    color: $annotationColor;
  }
</style>
