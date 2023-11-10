<script>
  import Ngrok from "./Ngrok.svelte";
  import { sentences, control_mode, baselineTranslations } from "./stores.js";

  export let sidebarOpen;
  let mode;
  $: $control_mode = mode == "control";
</script>

<header id="appbar">
  <div id="appbar-inner-wrapper">
    <div id="appbar-title">
      <h2>Cephalo</h2>
    </div>
    <div id="appbar-menu-buttons">
      <select bind:value={mode}>
        <option>control</option>
        <option>treatment</option>
      </select>
      <Ngrok />
      <button
        id="export-button"
        on:click={(e) =>
          navigator.clipboard.writeText(
            JSON.stringify(
              $control_mode
                ? $baselineTranslations
                : $sentences.map((s) => {
                    return {
                      ...s,
                      tableResults: [],
                    };
                  })
            )
          )}>export</button
      >
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
</style>
