<script>
  import { fade } from "svelte/transition";
  import Ngrok from "./Ngrok.svelte";
  import Instructions from "./Instructions.svelte";
  export let openInstructions;
</script>

<nav class:openInstructions>
  <button id="exit-button" on:click={() => (openInstructions = false)}>x</button
  >
  <Instructions />
  <Ngrok />
</nav>

{#if openInstructions}
  <div
    id="overlay"
    on:click={() => (openInstructions = false)}
    transition:fade={{ duration: 300 }}
  />
{/if}

<style>
  nav {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    right: -100%;
    transition: right 0.3s ease-in-out;
    width: 20rem;
    background-color: white;
    height: 100%;
    z-index: 102;
    padding: 3rem;
    border-left: 1px solid grey;
  }

  nav.openInstructions {
    right: 0;
  }

  #exit-button {
    position: absolute;
    top: 32px;
    right: 32px;
  }

  #overlay {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.5;
    background-color: black;
    z-index: 101;
  }
</style>
