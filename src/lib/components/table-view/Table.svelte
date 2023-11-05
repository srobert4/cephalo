<script>
  import TabBar from "./TabBar.svelte";
  import SearchBar from "./SearchBar.svelte";
  import TableList from "./TableList.svelte";

  import terms from "./../../../data/terms.json";
  import {
    activeTableTab,
    detailShowingData,
    query,
    tableSentences,
  } from "./../stores.js";

  // make copies from stores so that we can edit the formatting dynamically based on the query
  $: allSentences = $tableSentences;
  let allTerms = terms;
  $: suggestions = [...$detailShowingData.alternatives];

  $: filterText = function (allText) {
    // For suggestions and terms, do full text filtering and formatting
    // for sentences, just do formatting. Filtering is handled by the $tableSentences store
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

  // Select which list of strings to show in the table
  // based on the active tab, and filter
  $: textShowing = filterText(
    $activeTableTab === "sentences"
      ? allSentences
      : $activeTableTab === "terms"
      ? allTerms
      : suggestions
  );
</script>

<div class="table-div">
  <div class="top-bar">
    <TabBar
      tabs={(suggestions.length > 0 ? ["suggestions"] : []).concat([
        "sentences",
        "terms",
      ])}
    />
    <SearchBar />
  </div>
  <TableList items={textShowing} />
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
  }

  .top-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 8px;
  }
</style>
