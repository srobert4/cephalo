<script>
  import { onMount } from "svelte";
  import Editor from "./lib/components/Editor.svelte";
  import Table from "./lib/components/Table.svelte";
  import AnalysisMode from "./lib/components/sentence-analysis/AnalysisMode.svelte";
  import Appbar from "./lib/components/Appbar.svelte";
  import Sidebar from "./lib/components/Sidebar.svelte";
  let content = {
    text: "",
    html: "",
  };
  let analysisMode = false;
  let openInstructions = false;
  let mode = "control";
</script>

<Appbar bind:openInstructions bind:mode />
<Sidebar bind:openInstructions />
<main>
  <!-- <div class="column"> -->
  <div class="editor-area">
    {#if analysisMode}
      <AnalysisMode />
    {:else}
      <Editor bind:content />
    {/if}
    {#if mode === "interactive"}
      <button
        id="scores-label"
        on:click={(e) => {
          analysisMode = !analysisMode;
        }}
      >
        {analysisMode ? "edit mode" : "analysis mode"}
      </button>
    {/if}
  </div>
  <!-- </div> -->
  {#if mode !== "control"}
    <!-- <div class="column"> -->
    <!-- <div class="table-area"> -->
    <Table />
    <!-- </div> -->
    <!-- </div> -->
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 2rem;
    margin: 2rem;
    height: 80vh;
  }

  .editor-area {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 75%;
    max-width: 50%;
    margin: 1rem;
  }

  #scores-label {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.97);
    width: fit-content;
  }
</style>
