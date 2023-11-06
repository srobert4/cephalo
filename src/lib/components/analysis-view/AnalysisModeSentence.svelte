<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  export let sentenceData = {
    source: "",
    translation_type: "baseline",
  };

  export let selected = false;
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

  $: console.log(sentenceData);
</script>

<div
  class={"sentence-analysis-view " + sentenceData.translation_type}
  class:selected
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
  <div class={"sentence-wrapper"}>
    <p>{sentenceData.source}</p>
  </div>
</div>

<style>
  .sentence-analysis-view {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }

  .sentence-wrapper {
    max-width: 90%;
  }

  /* .sentence-analysis-view.template:hover,  */
  .sentence-analysis-view.template.selected {
    background-color: rgba(0, 128, 0, 0.1);
  }

  /* .sentence-analysis-view.nn-mt:hover,  */
  .sentence-analysis-view.nn-mt.selected {
    background-color: rgba(255, 166, 0, 0.1);
  }

  /* .sentence-analysis-view.baseline:hover,  */
  .sentence-analysis-view.baseline.selected {
    background-color: rgba(255, 0, 0, 0.1);
  }

  .color-bar {
    width: 5px;
    height: var(--height);
    align-self: center;
  }

  .color-bar.template {
    background-color: green;
  }

  .color-bar.nn-mt {
    background-color: orange;
  }

  .color-bar.baseline {
    background-color: red;
  }

  p {
    text-align: left;
  }
</style>
