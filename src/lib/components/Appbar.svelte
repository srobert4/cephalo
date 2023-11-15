<script>
  import Ngrok from "./Ngrok.svelte";
  import { data, control_mode, instruction_set } from "./stores.js";
  import Icon from "./Icon.svelte";
  import { resetInstructions } from "./analyzeSentence.svelte";

  export let sidebarOpen;
  let lastInstructionSetActive = "infection";
  let lastConditionActive = "static";
  let mode;
  $: $control_mode = mode == "static";
  let showCopiedMessage = false;
</script>

<header id="appbar">
  <div id="appbar-inner-wrapper">
    <div id="appbar-title">
      <h2>Cephalo</h2>
    </div>
    <div id="appbar-menu-buttons">
      <select
        bind:value={$instruction_set}
        on:click={(e) => (lastInstructionSetActive = $instruction_set)}
        on:change={(e) =>
          resetInstructions(lastInstructionSetActive, lastConditionActive)}
      >
        <option>infection</option>
        <option>fainting</option>
        <option>alcohol</option>
      </select>
      <select
        bind:value={mode}
        on:click={(e) => (lastConditionActive = mode)}
        on:change={(e) =>
          resetInstructions(lastInstructionSetActive, lastConditionActive)}
      >
        <option>static</option>
        <option>interactive</option>
      </select>
      <Ngrok />
      <button
        id="export-button"
        on:click={(e) => {
          navigator.clipboard.writeText(
            JSON.stringify(
              $data.map((d) => {
                return {
                  ...d,
                  nnmt: {
                    ...d.nnmt,
                    tableResults: [],
                  },
                  template: {
                    ...d.template,
                    tableResults: [],
                  },
                };
              })
            )
          );
          showCopiedMessage = true;
          setTimeout(() => (showCopiedMessage = false), 2000);
        }}
      >
        <Icon name={"export"} width={"1.5rem"} height={"1.5rem"} />
      </button>
      {#if showCopiedMessage}
        <div id="copy-message">Copied to clipboard!</div>
      {/if}
      <!-- <button id="menu-button" on:click={() => (sidebarOpen = !sidebarOpen)}
        >menu</button
      > -->
    </div>
  </div>
</header>

<style>
  #appbar {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    z-index: 100;
    width: 100%;
  }

  #appbar-inner-wrapper {
    display: flex;
    height: 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #appbar-title {
    padding-left: 10rem;
  }

  #appbar-menu-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    column-gap: 1rem;
    padding-right: 10rem;
    align-items: center;
  }

  #export-button {
    padding: 0;
    background: none;
  }
  #export-button:hover {
    border-color: transparent;
  }
  button:focus,
  button:focus-visible {
    outline: none;
  }

  #copy-message {
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    background-color: white;
    z-index: 3;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    font-weight: 500;
  }
</style>
