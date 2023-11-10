<script>
  import {
    ngrok_endpoint,
    ngrok_last_tested,
    ngrok_connected,
    source,
    sentences,
    loading_results,
  } from "./stores.js";

  import { analyzeSentence } from "./analyzeSentence.svelte";

  let cur_tunnel = ""; // user input

  async function connectToNgrok() {
    // test connection to ngrok tunnel
    let success = true;
    const response = await fetch(cur_tunnel, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
        success = false;
      });
    if (success) {
      $ngrok_endpoint = cur_tunnel;
      $ngrok_connected = true;
      $loading_results = true;
      let res = $source.map((s) => {
        return analyzeSentence(s);
      });
      Promise.all(res).then((d) => {
        console.log(d);
        $sentences = d;
        $loading_results = false;
      });
    } else {
      $ngrok_endpoint = "";
      $ngrok_connected = false;
    }
    $ngrok_last_tested = new Date();
  }
  let showDetail = false;
</script>

<div id="ngrok-div">
  <!-- <h4>Ngrok Connection</h4> -->
  {#if $ngrok_connected}
    <span style={"color: green"}>✓</span>
  {:else}
    <span style={"color: red"}>x</span>
  {/if}

  <!-- preventDefault on form to avoid page reload -->
  <form
    on:submit|preventDefault={() => {
      connectToNgrok();
    }}
  >
    <input type="url" placeholder="ngrok tunnel" bind:value={cur_tunnel} />
    <input
      type="submit"
      value={$ngrok_connected && $ngrok_endpoint === cur_tunnel
        ? "test"
        : "connect"}
    />
  </form>
</div>

<style>
  #ngrok-div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    column-gap: 0.5rem;
  }

  #detail-hover {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  p {
    text-align: left;
  }
</style>
