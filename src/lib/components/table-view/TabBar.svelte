<script>
  import { activeTableTab } from "./../stores.js";

  export let tabs = ["sentences", "terms"];
</script>

<div class="tab-bar">
  {#each tabs as tab}
    <button
      class="tab"
      class:selected-tab={$activeTableTab === tab}
      on:click={(e) => ($activeTableTab = tab)}>{tab}</button
    >
  {/each}
</div>

<style>
  .tab-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
  }

  .tab {
    background: none;
    border: none;
    border-bottom: 2px solid white;
    border-radius: 0;
    margin: 0;
    color: #ccc;
    margin-right: 0.5rem;
  }

  .tab:focus {
    outline: none;
  }

  .selected-tab {
    border-bottom: 2px solid #53a2be;
    color: #333;
  }
</style>
