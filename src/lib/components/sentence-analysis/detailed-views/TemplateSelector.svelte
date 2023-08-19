<script>
  export let selected = ["Dear .NAME"];
  export let alternatives = [
    "hello there",
    "my name is",
    "samantha",
    "robertson",
  ];
  let search = false;
  let searchQuery = "";
  let selectedAlt = "";

  $: alternativesToShow = searchQuery
    ? alternatives.filter((t) => t.search(searchQuery) >= 0)
    : alternatives;
</script>

<div id="template-selector">
  <div
    id="template-area"
    on:click={(e) => {
      search = false;
    }}
    class:search
  >
    <div id="selected-templates">
      {#each selected as template, i}
        <div class="selected-template">
          <p>{template}</p>
          <button
            on:click|stopPropagation={() => {
              selected.splice(i, 1);
              alternatives.unshift(template);
              selected = selected;
              alternatives = alternatives;
            }}>x</button
          >
        </div>
      {/each}
    </div>
    <div
      id="search-area"
      contenteditable="true"
      bind:innerText={searchQuery}
      on:focusin={(e) => (search = true)}
      on:click|stopPropagation
      on:keydown|stopPropagation
    />
    <button
      id="clear-templates-button"
      on:click|stopPropagation={(e) => {
        alternatives = selected.concat(alternatives);
        selected = [];
      }}>clear</button
    >
  </div>
  {#if search}
    <div id="search-div">
      <select
        bind:value={selectedAlt}
        on:click|stopPropagation
        on:change={() => {
          search = false;
          selected.push(alternatives[selectedAlt]);
          alternatives.splice(selectedAlt, 1);
          selected = selected;
          alternatives = alternatives;
        }}
      >
        {#each alternativesToShow as altTemplate, i}
          <option value={i}>{altTemplate}</option>
        {/each}
      </select>
    </div>
  {/if}
</div>

<style>
  #template-selector {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  #template-area {
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: top;
    column-gap: 1rem;
    /* height: 60px; */
    border: 1px;
    border-style: solid;
    border-color: black;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  #template-area.search {
    margin-bottom: 0.5rem;
  }

  #selected-templates {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* max-height: 1.5rem; */
    column-gap: 0.25rem;
    row-gap: 0.25rem;
  }

  #search-div {
    margin-bottom: 1rem;
  }

  .selected-template {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    column-gap: 2px;
    background: lightgray;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
  }

  p {
    margin: 0.5rem;
  }

  select {
    width: 100%;
  }

  button {
    padding: 0;
    padding-left: 5px;
    background: none;
    border: none;
    color: grey;
  }

  #clear-templates-button {
    position: absolute;
    bottom: 5px;
    right: 5px;
    text-decoration: underline;
  }

  #clear-templates-button:focus {
    outline: none;
  }

  #search-area {
    flex-grow: 1;
    text-align: left;
  }

  #search-area:focus {
    outline: none;
  }
</style>
