<script>
  import {
    ngrok_endpoint,
    ngrok_last_tested,
    ngrok_connected,
  } from "./stores.js";
  import Icon from "./Icon.svelte";

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
      // $loading_results = true;
      // let res = $data.map((d) => {
      //   return analyzeSentence(d.source);
      // });
      // Promise.all(res).then((d) => {
      //   console.log(d);
      //   $data = d;
      //   $loading_results = false;
      // });
      // res = $source.map((s) => {
      //   return getBaselineTranslation(s);
      // });
      // Promise.all(res).then((d) => {
      //   console.log(d);
      //   $baselineTranslations = d;
      // });
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
    <Icon name="check" color="green" height="1.2rem" width="1.2rem" />
  {:else}
    <Icon name="x" color="red" height="1.2rem" width="1.2rem" />
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
