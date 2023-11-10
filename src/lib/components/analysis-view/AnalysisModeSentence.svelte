<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import {
    updateBaselineTranslations,
    updateSentenceText,
  } from "../analyzeSentence.svelte";
  import { control_mode } from "../stores";

  export let sentenceData = {
    source: "",
    translation_hyp: "",
    translation_type: "baseline",
  };

  export let selected = false;
  export let showTranslations;

  const barHeight = tweened(80, {
    duration: 400,
    easing: cubicOut,
  });
  $: {
    if (selected) {
      barHeight.set(100);
    } else {
      barHeight.set(80);
    }
  }

  function init_focused(element) {
    element.focus();
  }

  $: console.log(sentenceData);
</script>

<div
  class={"sentence-analysis-view"}
  on:mouseenter={(e) => {
    if (!selected) {
      barHeight.set(100);
    }
  }}
  on:mouseleave={(e) => {
    if (!selected) {
      barHeight.set(80);
    }
  }}
>
  <div
    class={"color-bar " + sentenceData.translation_type}
    style:--height={$barHeight + "%"}
  />
  <div
    class={"sentence-wrapper " + sentenceData.translation_type}
    class:selected
  >
    {#if sentenceData.source === ""}
      <p
        class="empty-p"
        contenteditable="true"
        on:blur={(e) => {
          $control_mode ? updateBaselineTranslations(e) : updateSentenceText(e);
        }}
        use:init_focused
      >
        {sentenceData.source}
      </p>
    {:else}
      <p
        contenteditable="true"
        on:blur={(e) => {
          $control_mode ? updateBaselineTranslations(e) : updateSentenceText(e);
        }}
      >
        {sentenceData.source}
      </p>
      {#if showTranslations}
        <p class="de">
          {sentenceData.translation_hyp}
        </p>
      {/if}
    {/if}
  </div>
</div>

<style lang="scss">
  @import "./../../../variables.scss";

  .sentence-analysis-view {
    display: flex;
    flex-direction: row;
    // column-gap: 15px;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  .sentence-wrapper {
    flex-grow: 2;
  }

  p {
    margin: 0.5rem;
    padding: 0.2rem 0.5rem;
    text-align: left;
  }

  .empty-p {
    // width: 100%;
    min-height: 1rem;
  }

  .de {
    color: $systemGray;
    font-style: italic;
  }

  .sentence-wrapper.none.selected {
    background-color: $systemGray5t;
  }

  /* .sentence-analysis-view.template:hover,  */
  .sentence-wrapper.template.selected {
    background-color: $templateColorLight;
  }

  /* .sentence-analysis-view.nnmt:hover,  */
  .sentence-wrapper.nnmt.selected {
    background-color: $nnmtColorLight;
  }

  /* .sentence-analysis-view.baseline:hover,  */
  // .sentence-wrapper.baseline.selected {
  //   background-color: rgba(255, 0, 0, 0.1);
  // }

  .color-bar {
    min-width: 5px;
    height: var(--height);
    align-self: center;
  }

  .color-bar.none {
    background-color: $systemGray5;
  }

  .color-bar.template {
    background-color: $templateColor;
  }

  .color-bar.nnmt {
    background-color: $nnmtColor;
  }

  // .color-bar.baseline {
  //   background-color: red;
  // }
</style>
