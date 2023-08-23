<script>
  import { textToInsert } from "./../stores.js";
  import iconPlusSquare from "./../../../assets/icon-plus-square.svg?raw";

  export let data;

  let showref = false;
</script>

<div class="list-row">
  <div class="text-col">
    <button class="sentence-wrapper" on:click={() => (showref = !showref)}>
      {@html data.display_src}
    </button>
    {#if showref}
      <div class="sentence-wrapper sentence-ref">
        {@html data.ref}
      </div>
    {/if}
  </div>
  <button
    class="add-sentence-button icon-button"
    on:click={() => {
      $textToInsert = " " + data.src;
    }}>{@html iconPlusSquare}</button
  >
</div>

<style>
  .list-row {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    justify-content: flex-start;
    border-bottom: 0.5px solid grey;
    width: 100%;
    line-height: 1.1;
  }

  .text-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 0.5rem;
    padding: 1rem 0rem;
  }

  .sentence-ref {
    color: #9e9e9e;
  }

  .sentence-wrapper {
    text-align: left;
  }

  button.sentence-wrapper {
    padding: 0;
    background: transparent;
    font-weight: normal;
    border-radius: 0;
    border: none;
  }

  button.sentence-wrapper:focus {
    outline: none;
  }

  .add-sentence-button {
    padding-top: 1rem;
    display: flex;
  }

  .icon-button {
    background: none;
    border: none;
  }

  .icon-button:focus {
    outline: none;
  }
</style>
