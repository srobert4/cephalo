<script>
  import SearchBar from "./SearchBar.svelte";
  import TableList from "./TableList.svelte";
  import Icon from "../Icon.svelte";

  import { activeFilters, neighborFilterEnabled } from "./../stores.js";
  let allFilters = ["sentences", "terms", "templates", "nearest neighbors"];
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
        <Icon name="filter" width="1.6rem" height="1.6rem" />
      </button>
      {#if filtersPopupOpen}
        <div id="filters-popup">
          {#each allFilters as filterName}
            <label
              class={filterName === "nearest neighbors"
                ? $neighborFilterEnabled
                  ? ""
                  : "inactive-label"
                : ""}
              ><input
                type="checkbox"
                checked={$activeFilters.includes(filterName)}
                on:change={(e) => {
                  if (e.target.checked) {
                    $activeFilters = [...$activeFilters, filterName];
                  } else {
                    $activeFilters = [...$activeFilters].filter((x) => {
                      return x !== filterName;
                    });
                  }
                }}
              />{filterName}</label
            >
          {/each}
          <!-- <label
            ><input type="checkbox" bind:checked={$termFilter} />terms</label
          >
          <label
            ><input type="checkbox" bind:checked={$templateFilter} />templates</label
          >
          <label class={$neighborFilterActive ? '' : 'inactive-label'}
            ><input type="checkbox" bind:checked={$neighborFilter} disabled={!$neighborFilterActive} />nearest neighbors</label
          > -->
        </div>
      {/if}
    </div>
  </div>
  <div id="tag-row">
    {#each $activeFilters as active}
      <div class="tag">
        {active}
        <button
          class="remove-tag"
          on:click={(e) => {
            $activeFilters = [...$activeFilters].filter((x) => {
              return x !== active;
            });
          }}
        >
          <Icon name={"x"} />
        </button>
      </div>
    {/each}
    <!-- {#if $termFilter}
      <div class="tag">
        terms
        <button
          class="remove-tag"
          on:click={(e) => {
            $termFilter = false;
          }}>x</button
        >
      </div>
    {/if} -->
    {#if $activeFilters.length > 0}
      <button
        id="clear-filters"
        on:click={(e) => {
          $activeFilters = [];
        }}>clear all</button
      >
    {/if}
  </div>
  <TableList />
</div>

<style lang="scss">
  @import "../../../variables.scss";
  .table-div {
    min-height: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    /* border: 1px solid red; */
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
    padding: 0;
    background: none;
  }
  .inactive-label {
    font-weight: normal;
    color: #a8a8a8;
  }
  input {
    margin-right: 0.5rem;
  }

  #filters-popup {
    position: absolute;
    top: 2.5rem;
    right: 0;
    min-width: 200px;

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
    // box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    font-weight: 500;
    background-color: $systemGray5;
    padding: 0.2rem 0.6rem;
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
  }

  #clear-filters {
    font-weight: normal;
    text-decoration: underline;
  }

  .remove-tag,
  #clear-filters {
    padding: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    border-color: transparent;
    outline: none;
  }
</style>
