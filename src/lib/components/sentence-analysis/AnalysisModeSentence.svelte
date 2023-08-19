<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  export let sentenceData;

  let hovering = false;
  const barHeight = tweened(80, {
    duration: 400,
    easing: cubicOut,
  });
</script>

<div
  class={"sentence-analysis-view " + sentenceData.translation_type}
  on:mouseenter={(e) => barHeight.set(100)}
  on:mouseleave={(e) => barHeight.set(80)}
>
  <div
    class={"color-bar " + sentenceData.translation_type}
    class:hovering
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

  .sentence-analysis-view.template:hover {
    background-color: rgba(0, 128, 0, 0.1);
  }

  .sentence-analysis-view.nn-mt:hover {
    background-color: rgba(255, 166, 0, 0.1);
  }

  .sentence-analysis-view.baseline:hover {
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
