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

  // let curTermText = data.term;
</script>

<div class="term-wrapper">
  <select on:change={updateType}>
    {#each types as type}
      <option selected={type === data.type}>{type}</option>
    {/each}
  </select>
  <span>=</span>
  <div class="term-translation-wrapper">
    <input on:blur={getTranslation} bind:value={data.term} />
    <span
      class={data.translation === "Not in database" ? "annotation" : "de"}
      style="margin-top: 0.25rem;">{data.translation}</span
    >
  </div>
  <button
    on:click={(e) => {
      dispatch("remove", e);
    }}><Icon name="x" /></button
  >
</div>

<style lang="scss">
  @import "../../../variables.scss";
  select,
  input {
    height: 1.5rem;
    font-size: 1rem;
  }
  input {
    padding-left: 0.5rem;
  }
  .empty-term {
    display: block;
    min-width: 1rem;
    border: 1px solid black;
  }
  .term {
    font-family: $referenceFont;
    font-weight: $referenceFontWeight;
  }
  .annotation {
    font-family: $annotationFont;
    color: $annotationColor;
  }
  .de {
    color: blue;
    // font-style: italic;
    font-family: $referenceFont;
    font-weight: $referenceFontWeight;
  }
  .term-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    align-items: flex-start;
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
