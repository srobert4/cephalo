<script>
  import TabBar from "./TabBar.svelte";
  import SearchBar from "./SearchBar.svelte";
  import TableList from "./TableList.svelte";

  import terms from "./../../../data/terms.json";
  import { sentenceFilter, termFilter } from "./../stores.js";

  let filtersPopupOpen = false;
</script>

<div class="table-div">
  <div class="top-bar">
    <!-- <TabBar
      tabs={(suggestions.length > 0 ? ["suggestions"] : []).concat([
        "sentences",
        "terms",
      ])}
    /> -->
    <SearchBar />
    <div id="filters">
      <button
        id="open-filters-button"
        on:click={(e) => {
          filtersPopupOpen = !filtersPopupOpen;
        }}
      >
        filters
      </button>
      {#if filtersPopupOpen}
        <div id="filters-popup">
          <label
            ><input
              type="checkbox"
              bind:checked={$sentenceFilter}
            />sentences</label
          >
          <label
            ><input type="checkbox" bind:checked={$termFilter} />terms</label
          >
        </div>
      {/if}
    </div>
  </div>
  <div id="tag-row">
    {#if $sentenceFilter}
      <div class="tag">
        sentences
        <button
          class="remove-tag"
          on:click={(e) => {
            $sentenceFilter = false;
          }}>x</button
        >
      </div>
    {/if}
    {#if $termFilter}
      <div class="tag">
        terms
        <button
          class="remove-tag"
          on:click={(e) => {
            $termFilter = false;
          }}>x</button
        >
      </div>
    {/if}
    {#if $sentenceFilter || $termFilter}
      <button
        id="clear-filters"
        on:click={(e) => {
          $sentenceFilter = false;
          $termFilter = false;
        }}>clear all</button
      >
    {/if}
  </div>
  <TableList />
</div>

<style>
  .table-div {
    min-height: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 2;
    border: 1px solid red;
    width: 100%;
    row-gap: 0.6rem;
  }

  .top-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;
  }

  #filters {
    position: relative;
  }

  #open-filters-button {
    padding: 0.6rem;
  }

  input {
    margin-right: 0.5rem;
  }

  #filters-popup {
    position: absolute;
    top: 2.5rem;
    right: 0;
    min-width: 150px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    z-index: 3;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    font-weight: 500;
  }

  #tag-row {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    justify-content: flex-start;
    align-items: center;
  }

  .tag {
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    font-weight: 500;
    background-color: lightgrey;
    padding: 0.2rem 0.6rem;
  }

  #clear-filters {
    font-weight: normal;
    text-decoration: underline;
  }

  .remove-tag,
  #clear-filters {
    padding: 0;
    background-color: transparent;
  }

  button {
    border-color: transparent;
    outline: none;
  }
</style>
