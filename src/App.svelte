<script>
  import Editor from "./lib/components/Editor.svelte";
  import Table from "./lib/components/table-view/Table.svelte";
  import AnalysisMode from "./lib/components/analysis-view/AnalysisMode.svelte";
  import Appbar from "./lib/components/Appbar.svelte";
  import Sidebar from "./lib/components/Sidebar.svelte";
  import Detail from "./lib/components/detail/Detail.svelte";

  // Holds content of text editor component
  let content = {
    text: "",
    html: "",
  };
  let analysisMode = false; // whether to show editor or analysis mode
  let sidebarOpen = false; // menu sidebar flag

  // treatment condition
  //    control = editor only
  //    table = editor + table
  //    interactive = editor + table + analysis mode
  let mode = "control";
</script>

<Appbar bind:sidebarOpen bind:mode />
<Sidebar bind:sidebarOpen />
<main>
  <div class="editor-area">
    {#if analysisMode}
      <AnalysisMode />
    {:else}
      <Editor bind:content />
    {/if}
    <!-- {#if mode === "interactive"} -->
    <!-- only allow switching back and forth between editor and analysis mode in interactive condiiton -->
    <button
      id="edit-analysis-mode-button"
      on:click={(e) => {
        analysisMode = !analysisMode;
      }}
    >
      {analysisMode ? "edit mode" : "analysis mode"}
    </button>
    <!-- {/if} -->
  </div>
  <!-- {#if mode !== "control"} -->
  <!-- Show table in any condition except control -->
  <div id="right-column">
    <Table />
    <Detail />
  </div>
  <!-- {/if} -->
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
    min-width: 40vw;
    margin: 1rem;
  }

  #edit-analysis-mode-button {
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

  #right-column {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 50vw;
    border: 1px solid green;
  }
</style>
