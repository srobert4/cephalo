<script>
  import { createEventDispatcher } from "svelte";
  import terms from "../../../data/terms.json";
  import Icon from "../Icon.svelte";

  export let data;

  const dispatch = createEventDispatcher();

  let types = [
    "body part",
    "clinic",
    "condition",
    "frequency",
    "measurement",
    "medication",
    "number",
    "office",
    "symptom",
    "test",
    "time",
    "treatment",
    "units",
  ].map((s) => s.toUpperCase());

  function getTranslation() {
    data.term = curTermText;
    let termDict = terms.filter((t) => t.src === data.term);
    if (termDict.length === 0) {
      data.translation = "Not in database";
    } else {
      data.translation = termDict[0].ref;
    }
    dispatch("change", data);
  }

  function updateType(e) {
    data.type = e.target.value;
    dispatch("change", data);
  }

  let curTermText;
</script>

<div class="term-wrapper">
  <select on:change={updateType}>
    {#each types as type}
      <option selected={type === data.type}>{type}</option>
    {/each}
  </select>
  <span>=</span>
  <div class="term-translation-wrapper">
    <span
      contenteditable="true"
      on:blur={getTranslation}
      bind:innerText={curTermText}>{data.term}</span
    >
    <span class="de">{data.translation}</span>
  </div>
  <button
    on:click={(e) => {
      dispatch("remove", e);
    }}>-</button
  >
  {#if data.translation === "Not in database"}
    <Icon name={"warning"} color={"red"} />
    <span class="de">term not in database</span>
  {:else if !data.translation_in_filled}
    <Icon name={"warning"} color={"orange"} />
    <span class="de">translation not in output</span>
  {/if}
</div>

<style lang="scss">
  @import "../../../variables.scss";
  select {
    height: 1.5rem;
    font-size: 1rem;
  }

  .de {
    color: $systemGray2;
    font-style: italic;
  }
  .term-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    align-items: center;
    height: 3rem;
  }
  .term-translation-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button {
    background-color: transparent;
    padding: 0;
  }
</style>
