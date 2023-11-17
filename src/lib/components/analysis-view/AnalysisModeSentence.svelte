<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { updateSentence } from "../analyzeSentence.svelte";
  import { control_mode, defaultSentenceData } from "../stores";
  import { createEventDispatcher } from "svelte";
  import Icon from "../Icon.svelte";

  const dispatch = createEventDispatcher();

  export let sentenceData = defaultSentenceData;

  export let selected = false;
  export let showTranslations;
  export let id;

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
  class={"sentence-analysis-view " + model}
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
    <div id="sentence-stack">
      {#if sentenceData.source === ""}
        <p
          class="empty-p"
          contenteditable="true"
          on:blur={(e) => {
            updateSentence(e, id);
          }}
          use:init_focused
        >
          {sentenceData.source}
        </p>
      {:else}
        <p
          contenteditable="true"
          on:blur={(e) => {
            updateSentence(e, id);
          }}
        >
          {sentenceData.source}
        </p>
        {#if model === "nnmt"}
          {#if sentenceData["nnmt"].utilization < 3}
            <p class="feedback">
              <Icon
                name="warning"
                color="orange"
                height="0.9rem"
                width="0.9rem"
              /> Translation is not using the database very much.
            </p>
          {:else if sentenceData["nnmt"].utilization > 3 && sentenceData["nnmt"].relevance < 3}
            <p class="feedback">
              <Icon name="warning" color="red" height="0.9rem" width="0.9rem" />
              Translation is using sentences that are not very relevant to your input.
            </p>
          {/if}
        {:else}
          <!-- <p class="annotation">Translated using:</p> -->
          <p class="template-text">
            {@html sentenceData["template"]["templates"][
              sentenceData["template"]["idx_of_filled_template"]
            ].template}
          </p>
        {/if}
        {#if showTranslations}
          <p class="de">
            {sentenceData[model].translation_hyp}
          </p>
        {/if}
      {/if}
    </div>
    <button
      class="x-button"
      on:click|stopPropagation={(e) => dispatch("x-pressed", e)}
    >
      <Icon name={"x"} height={"1.2rem"} width={"1.2rem"} color={"grey"} />
    </button>
  </div>
</div>

<style lang="scss">
  @import "./../../../variables.scss";

  .sentence-analysis-view {
    display: flex;
    flex-direction: row;
    // column-gap: 15px;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .sentence-wrapper {
    flex-grow: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #sentence-stack {
    display: flex;
    flex-direction: column;
  }

  p {
    margin: 0.5rem;
    padding: 0.2rem 0.5rem;
    text-align: left;
    width: fit-content;
  }

  .empty-p {
    width: 80%;
    min-height: 1rem;
  }

  .feedback-wrapper {
    display: flex;
    flex-direction: row;
  }

  .template-text {
    font-family: $referenceFont;
    font-weight: $referenceFontWeight;
    margin-top: 0;
  }
  .annotation {
    margin-bottom: 0;
    font-family: $annotationFont;
    color: $annotationColor;
  }

  .feedback {
    margin-top: 0;
    font-family: $annotationFont;
    color: $annotationColor;
    font-size: 0.9rem;
  }

  .de {
    color: $systemGray;
    font-style: italic;
  }

  .x-button {
    // position: absolute;
    // right: 0;
    // top: 1rem;
    background: none;
    padding: 0;
    padding-right: 0.25rem;
  }

  .x-button:hover {
    border-color: transparent;
  }
  button:focus,
  button:focus-visible {
    outline: none;
  }

  .sentence-wrapper.none.selected {
    // .sentence-analysis-view.none.selected
    background-color: $systemGray5t;
  }
  .sentence-wrapper.baseline.selected {
    background-color: $systemGray5t;
  }

  /* .sentence-analysis-view.template:hover,  */
  .sentence-wrapper.template.selected {
    // .sentence-analysis-view.template.selected {
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
