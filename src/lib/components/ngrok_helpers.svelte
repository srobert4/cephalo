<script context="module">
  import { ngrok_endpoint, ngrok_connected } from "./data.js";
  import { get } from "svelte/store";

  export async function connectToNgrok() {
    let success = true;
    console.log("hi");
    const response = await fetch(get(ngrok_endpoint), {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => (success = false));
    ngrok_connected.set(success);
  }
</script>
