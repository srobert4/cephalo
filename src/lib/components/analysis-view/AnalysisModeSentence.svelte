<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { updateSelectedSentence } from "../analyzeSentence.svelte";
  import { control_mode, defaultSentenceData } from "../stores";

  export let sentenceData = defaultSentenceData;

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

  $: model = $control_mode ? "baseline" : sentenceData.last_method_selected;

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
  <div class={"color-bar " + model} style:--height={$barHeight + "%"} />
  <div class={"sentence-wrapper " + model} class:selected>
    {#if sentenceData.source === ""}
      <p
        class="empty-p"
        contenteditable="true"
        on:blur={updateSelectedSentence}
        use:init_focused
      >
        {sentenceData.source}
      </p>
    {:else}
      <p contenteditable="true" on:blur={updateSelectedSentence}>
        {sentenceData.source}
      </p>
      {#if showTranslations}
        <p class="de">
          {sentenceData[model].translation_hyp}
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
    width: fit-content;
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
  .sentence-wrapper.baseline.selected {
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

  .color-bar.baseline {
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
