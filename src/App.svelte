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

  // function splitSentences() {
  //   if ($ngrok_endpoint.length === 0) {
  //     $sentences = content.text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  //     console.log($sentences)
  //   } else {
  //     let url = new URL("tokenize/" + content.text, $ngrok_endpoint);
  //     console.log(url);
  //     fetch(url, {
  //       method: "get",
  //       headers: new Headers({
  //         "ngrok-skip-browser-warning": "69420",
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((d) => {
  //         console.log(d);
  //         $sentences = d.sentences;
  //       });
  //   }
  // }
</script>

<Appbar bind:openInstructions bind:mode />
<Sidebar bind:openInstructions />
<main>
  <div class="body-container">
    <div class="column">
      <div class="editor-area">
        {#if analysisMode}
          <AnalysisMode />
        {:else}
          <Editor bind:content />
        {/if}
        {#if mode === "interactive"}
          <div
            id="scores-label"
            on:click={(e) => {
              analysisMode = !analysisMode;
            }}
          >
            {analysisMode ? "edit mode" : "analysis mode"}
          </div>
        {/if}
      </div>
    </div>
    {#if mode !== "control"}
      <div class="column">
        <div class="table-area">
          <Table />
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
  .body-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 2rem;
    width: 100vw;
    height: 80vh;
  }

  .editor-area {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 75%;
    margin: 1rem;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 100%;
    justify-content: center;
  }

  #controls {
    display: flex;
    flex-direction: column;
    height: 30%;
    width: 40vw;
  }

  .button-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 1rem;
  }

  p {
    text-align: left;
  }

  .table-area {
    /* width: 100%; */
    height: 90%;
    /* background-color: rgba(0,0,0,0.1); */
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

  #scores-label p {
    margin: 0;
    text-align: right;
  }
</style>
