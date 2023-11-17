<script>
  import Selector from "./Selector.svelte";
  import { selectedSource, detailShowingData } from "../stores";
  import { updateModelStrength } from "../analyzeSentence.svelte";

  export let utilization;
  export let relevance;
  export let strength = "Default";
  export let words;
  $: console.log(strength);

  let guidance;
  $: {
    if (relevance < 3) {
      if (utilization < 3) {
        guidance =
          "Relevance and utilization are both <span style='color:red'>low</span>. Translation may not be consistent with the database. <span style='font-weight: bold'>Consider rephrasing to be closer to the neighbors above.</span>";
      } else if (utilization === 3) {
        guidance =
          "Relevance is <span style='color:red'>low</span> and utilization is <span style='color:orange'>moderate</span>. This sentence has a moderate risk of translation errors. <span style='font-weight: bold'>Consider rephrasing to be closer to the neighbors above.</span>";
      } else {
        guidance =
          "Relevance is <span style='color:red'>low</span> but utilization is <span style='color:green'>high</span>. This sentence has a high risk of translation errors. <span style='font-weight: bold'>Consider rephrasing to be closer to the neighbors above or decreasing utilization.</span>";
      }
    } else if (relevance === 3) {
      if (utilization < 3) {
        guidance =
          "Relevance is <span style='color:orange'>moderate</span> and utilization is <span style='color:red'>low</span>. Translation may not be consistent with the database. <span style='font-weight: bold'>Consider rephrasing to be closer to the neighbors above.</span>";
      } else if (utilization === 3) {
        guidance =
          "Relevance and utilization are both <span style='color:orange'>moderate</span>. Translation may not be consistent with the database. <span style='font-weight: bold'>Consider rephrasing to be closer to the neighbors above.</span>";
      } else {
        guidance =
          "Relevance is <span style='color:orange'>moderate</span> and utilization is <span style='color:green'>high</span>. This sentence has a moderate risk of translation errors. <span style='font-weight: bold'>Consider rephrasing to be closer to the neighbors above.</span>";
      }
    } else {
      if (utilization < 3) {
        guidance =
          "Relevance is <span style='color:green'>high</span> but utilization is <span style='color:red'>low</span>.  Translation may not be consistent with the database. <span style='font-weight: bold'>Consider increasing utilization or looking for a template.</span>";
      } else if (utilization === 3) {
        guidance =
          "Relevance is <span style='color:green'>high</span> and utilization is <span style='color:orange'>moderate</span>. Translation may not be consistent with the database. <span style='font-weight: bold'>Consider increasing utilization or looking for a template.</span>";
      } else {
        guidance =
          "Relevance and utilization are both <span style='color:green'>high</span>. Translation likely to be consistent with the database.";
      }
    }
  }
</script>

<div class="output-wrapper">
  <p>{@html guidance}</p>
  <p>
    <span>Translation: </span>
    <span class="de">
      {@html words
        .map((w) => w.word.replace("color: #A8A8A8", "font-weight:bold"))
        .join(" ")}
    </span>
  </p>
  <p class="legend">
    <span style="font-weight: bold; font-style: italic">bold italics</span> =
    translation is <span style="font-weight: bold">not</span> using neighbors.
  </p>
  <Selector
    bind:value={strength}
    options={["Not at all", "Less", "Default", "More"]}
  />
</div>
<button
  disabled={strength === $detailShowingData["nnmt"].strength}
  on:click={(e) =>
    updateModelStrength($selectedSource, $detailShowingData.source, strength)}
  >apply changes</button
>

<style lang="scss">
  @import "../../../variables.scss";

  .output-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  p {
    text-align: left;
  }

  .word-button {
    display: flex;
    flex-direction: column;
    background: none;
    border: 1px solid transparent;
    row-gap: 0.2rem;
    padding: 0.5rem;
  }
  .word-button:hover {
    font-weight: bold;
  }
  button {
    border-color: transparent;
    outline: none;
  }
  .selected {
    border: 1px solid $systemGray;
    border-radius: 0.2rem;
  }
  .de {
    color: $systemGray2;
    font-style: italic;
  }
  .legend {
    color: $systemGray2;
    margin-top: 0;
  }
</style>
