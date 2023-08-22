<script>
  import { ngrok_endpoint, ngrok_connected } from "./data.js";

  let cur_tunnel = "";

  async function connectToNgrok() {
    let success = true;
    console.log("hi");
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
      $ngrok_connected = new Date();
    } else {
      $ngrok_endpoint = "";
      $ngrok_connected = null;
    }
  }
</script>

<div id="ngrok-div">
  <h4>Ngrok Connection</h4>
  {#if $ngrok_connected}
    <p>
      Connected to <a
        target="_blank"
        rel="noopener noreferrer"
        href={$ngrok_endpoint}>{$ngrok_endpoint}</a
      >
    </p>
    <p>Last tested: {$ngrok_connected.toLocaleString()}</p>
  {:else}
    <p>Not connected to ngrok tunnel</p>
  {/if}
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
    flex-direction: column;
    align-items: flex-start;
  }

  p,
  h4 {
    text-align: left;
  }
</style>
