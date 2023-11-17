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
          "The system is not using the database very much. The translation may not be consistent with the translations in the database. <span style='font-weight: bold'>To use the database more, consider rephrasing your input to be closer to sentences in the table above.</span>";
      } else if (utilization === 3) {
        guidance =
          "The system is using the sentences in the database, but they are not very relevant to your input. <span style='font-weight: bold'>To reduce the risk of translation errors, consider rephrasing your input to be closer to sentences in the table above.</span>";
      } else {
        guidance =
          "The system is using the sentences in the database a lot, but they are not very relevant to your input. This sentence has a <span style='color: red'>high</span> risk of translation errors. <span style='font-weight: bold'>Consider rephrasing your input to be closer to sentences in the table above.</span>";
      }
    } else if (relevance === 3) {
      if (utilization < 3) {
        guidance =
          "The closest sentences in the database are somewhat relevant to your input, but the system is not using them very much. The translation may not be consistent with the translations in the database. <span style='font-weight: bold'>To use the database more, consider rephrasing your input to be closer to sentences in the table above.</span>";
      } else if (utilization === 3) {
        guidance =
          "The system is using the sentences in the database, and they are somewhat relevant to your input. <span style='font-weight: bold'>To reduce the risk of translation errors, consider rephrasing your input to be closer to sentences in the table above.</span>";
      } else {
        guidance =
          "The system is using the sentences in the database a lot, and they are somewhat relevant to your input. <span style='font-weight: bold'>To reduce the risk of translation errors, consider rephrasing your input to be closer to sentences in the table above.</span>";
      }
    } else {
      if (utilization < 3) {
        guidance =
          "The closest sentences in the database are very relevant to your input, but the system is not using them very much.  The translation may not be consistent with the translations in the database. <span style='font-weight: bold'>To use the database more, consider rephrasing your input to be closer to sentences in the table above, or use the template approach.</span>";
      } else if (utilization === 3) {
        guidance =
          "The system is using the sentences in the database, and they are very relevant to your input. The translation is likely to be consistent with the translations in the database.";
      } else {
        guidance =
          "The system is using the sentences in the database a lot, and they are very relevant to your input. The translation is likely to be consistent with the translations in the database.";
      }
    }
  }
</script>

<div class="output-wrapper">
  <div>
    <p class="annotation">Translation:</p>
    <p class="de" style="margin-top: 0">
      {@html words
        .map((w) => w.word.replace("color: #A8A8A8", "font-style: italic"))
        .join(" ")}
    </p>
    <p class="legend">
      <i>italics</i>
      = translation for that word is <span style="font-weight: bold">not</span> using
      the database.
    </p>
  </div>
  <div class="guidance-box">
    <p class="annotation">Guidance:</p>
    <p class="guidance" style="margin-top: 0">{@html guidance}</p>
  </div>
  <!-- <Selector
    bind:value={strength}
    options={["Not at all", "Less", "Default", "More"]}
  /> -->
</div>

<!-- <button
  disabled={strength === $detailShowingData["nnmt"].strength}
  on:click={(e) =>
    updateModelStrength($selectedSource, $detailShowingData.source, strength)}
  >apply changes</button
> -->

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
    color: $systemGray;
    // font-style: italic;
  }
  .legend {
    color: $systemGray2;
    margin-top: 0;
  }

  .guidance-box {
    border: solid $systemGray2;
    border-radius: 0.2rem;
    padding: 0.5rem 1rem;
  }

  .annotation {
    margin-bottom: 0.2rem;
  }

  .annotation,
  .legend {
    font-family: $annotationFont;
    color: $annotationColor;
  }

  .guidance {
    font-family: $annotationFont;
    color: #213547;
  }

  .not-utilized {
    font-style: italic;
  }
</style>
