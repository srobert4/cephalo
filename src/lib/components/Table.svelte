<script>
  import { createEventDispatcher } from "svelte";
  import { text } from "svelte/internal";
  import iconPlusSquare from "../../assets/icon-plus-square.svg?raw";
  import iconClose from "../../assets/icon-close-circle.svg?raw";
  import terms from "./terms.json";
  import sentences from "./synthetic_tm_data_formatted.json";
  import {
    activeTableTab,
    textToInsert,
    selected,
    detailShowingData,
    query,
    tableSentences,
  } from "./data.js";

  const dispatch = createEventDispatcher();

  let allSentences = $tableSentences;
  let allTerms = terms;

  let suggestions = [...$detailShowingData.alternatives];
  let searchBar;

  $: {
    if ($query.length === 0 && $selected.length > 0) $query = $selected;
  }

  $: filterText = function (allText, $query) {
    if (searchBar && searchBar.value != $query) {
      searchBar.value = $query;
    }
    return allText.reduce((acc, text) => {
      let match_start = text.src.toLowerCase().search($query.toLowerCase());
      if ($activeTableTab === "sentences" || match_start >= 0) {
        acc.push({
          ...text,
          display_src:
            match_start >= 0
              ? text.src.substring(0, match_start) +
                '<span style="font-weight: 800">' +
                text.src.substring(match_start, match_start + $query.length) +
                "</span>" +
                text.src.substring(match_start + $query.length)
              : text.src,
        });
      }
      return acc;
    }, []);
  };

  $: textShowing = filterText(
    $activeTableTab === "sentences"
      ? $tableSentences
      : $activeTableTab === "terms"
      ? allTerms
      : suggestions,
    $query
  );

  $: toggleShowTranslation = function (text) {
    if ($activeTableTab === "sentences") {
      allSentences = allSentences.map((s) => {
        if (s.src === text.src) {
          return {
            ...s,
            show_ref: !s.show_ref,
          };
        }
        return s;
      });
    } else if ($activeTableTab === "terms") {
      allTerms = allTerms.map((s) => {
        if (s.src === text.src) {
          return {
            ...s,
            show_ref: !s.show_ref,
          };
        }
        return s;
      });
    } else {
      suggestions = suggestions.map((s) => {
        if (s.src === text.src) {
          return {
            ...s,
            show_ref: !s.show_ref,
          };
        }
        return s;
      });
    }
  };
</script>

<div class="sentence-block">
  <div class="top-bar">
    <div class="tab-bar">
      {#if suggestions.length > 0}
        <button
          class="tab"
          class:selected-tab={$activeTableTab === "suggestions"}
          on:click={(e) => ($activeTableTab = "suggestions")}
          >Suggestions</button
        >
      {/if}
      <button
        class="tab"
        class:selected-tab={$activeTableTab === "sentences"}
        on:click={(e) => ($activeTableTab = "sentences")}>Sentences</button
      >
      <button
        class="tab"
        class:selected-tab={$activeTableTab === "terms"}
        on:click={(e) => ($activeTableTab = "terms")}>Terms</button
      >
    </div>
    <form class="search-bar">
      <input
        class="search-bar-input"
        type="search"
        id="input-search"
        on:input={(e) => ($query = e.target.value)}
        bind:this={searchBar}
        placeholder="Type to search..."
      />
    </form>
  </div>
  <div class="sentence-list">
    <div id="sentence-list-count-label">
      <span>{textShowing.length} {$activeTableTab}</span>
    </div>
    {#if textShowing !== null}
      {#each textShowing as text}
        <div class="sentence-row show-source">
          <div class="sentence-source">
            <div
              class="sentence-wrapper"
              on:click={() => {
                toggleShowTranslation(text);
              }}
            >
              {@html text.display_src}
            </div>
            <button
              class="add-sentence-button icon-button"
              on:click={() => {
                $textToInsert = " " + text.src;
              }}>{@html iconPlusSquare}</button
            >
          </div>
          {#if text.show_ref}
            <div class="sentence-ref">
              <div class="sentence-wrapper">
                {@html text.ref}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>

<style>
  .sentence-block {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .sentence-list {
    overflow-y: scroll;
  }

  .sentence-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 0.5px solid grey;
    width: 100%;
    line-height: 1.1;
  }

  .sentence-source {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 0px;
  }

  .sentence-ref {
    color: #9e9e9e;
    padding-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .sentence-wrapper {
    text-align: left;
  }

  .add-sentence-button {
    padding: 0px 5px;
  }

  .icon-button {
    background: none;
    border: none;
  }

  .icon-button:focus {
    outline: none;
  }

  .top-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

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

  .search-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    column-gap: 0.5rem;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .search-bar-input {
    border-radius: 0.3rem;
    height: 100%;
    width: 100%;
    padding: 2px 0;
    margin: 0;
    min-width: 0px;
    text-indent: 10px;
    border-color: grey;
    position: relative;
    flex-grow: 1;
  }

  .search-bar-reset {
    padding: 0px 5px;
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
