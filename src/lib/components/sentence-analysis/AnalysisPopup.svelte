<script>
  import { createEventDispatcher } from "svelte";
  import iconEdit from "../../../assets/icon-edit.svg?raw";
  const dispatch = createEventDispatcher();

  export let x;
  export let y;

  export let suggestionWithChanges =
    'This is a<span style="color:green">n</span>  <span style="color:red; text-decoration: line-through">suggestion</span><span style="color:green">idea</span> that you can edit.';
  export let suggestion = "This is an idea that you can edit.";

  let editing = false;
</script>

<div id="analysis-box" style={"left: " + x + "px; top: " + y + "px;"}>
  <p id="title">Low index utilization</p>
  {#if !editing}
    <p id="changes-view">
      <span id="text-with-changes"
        >{@html suggestionWithChanges}<button
          id="edit-button"
          class="icon-button"
          on:click={(e) => (editing = true)}>{@html iconEdit}</button
        ></span
      >
    </p>
  {:else}
    <div id="text-area" contenteditable="true" bind:innerText={suggestion} />
  {/if}

  <div class="button-row">
    <button
      id="accept-button"
      on:click={(e) => dispatch("rephraseClicked", suggestion)}>Rephrase</button
    >
    <button id="dismiss-button" on:click={(e) => dispatch("dismissClicked")}
      >Dismiss</button
    >
  </div>
</div>

<style>
  #analysis-box {
    background-color: #f2f2f2;
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    background-color: rgba(255, 255, 255, 0.97);
    width: 20vw;
  }

  #title {
    color: #828282;
    font-weight: light;
    text-align: left;
    margin-bottom: 5px;
  }

  #text-area {
    padding: 10px 0px;
    text-align: left;
  }

  #changes-view {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    flex-wrap: wrap;
    line-height: 1.5;
  }

  #edit-button {
    display: inline-block;
    padding: 0;
    padding-left: 5px;
  }

  #text-with-changes {
    text-align: left;
  }

  .button-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 5px;
  }

  #accept-button {
    color: white;
    border: none;
    background-color: #53a2be;
  }

  #accept-button:focus {
    outline: none;
  }

  #dismiss-button {
    color: #828282;
    background: none;
    border: none;
    font-weight: normal;
  }

  #dismiss-button:hover {
    outline: none;
    text-decoration: underline;
  }
  #dismiss-button:focus {
    outline: none;
    text-decoration: underline;
  }

  .icon-button {
    background: none;
    border: none;
  }

  .icon-button:focus {
    outline: none;
  }
</style>
