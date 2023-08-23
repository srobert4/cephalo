<script>
  import { activeTableTab } from "./../stores.js";
  import TableItem from "./TableItem.svelte";

  export let items = [];
</script>

<div class="sentence-list">
  <div id="sentence-list-count-label">
    <span>{items.length} {$activeTableTab}</span>
  </div>
  {#each items as text}
    <TableItem data={text} />
  {/each}
</div>

<style>
  .sentence-list {
    overflow-y: scroll;
  }

  #sentence-list-count-label {
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 2;
    flex-direction: column;
    align-items: flex-end;
    padding: 5px 5px 5px 5px;
    gap: 5px;
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.97);
  }
</style>
