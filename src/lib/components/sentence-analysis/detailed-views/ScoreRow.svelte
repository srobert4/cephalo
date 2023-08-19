<script>
  export let maxScore = 5;
  export let score = 3;
  export let size = 10;
  export let metric = "";

  $: scoreClass = score < 3 ? "low" : score < 4 ? "medium" : "high";
</script>

<div class="score-row">
  <span>{metric}</span>
  {#each [...Array(maxScore).keys()] as i}
    <div
      class={"score-mark " + (i < score ? scoreClass : "")}
      style:--size={size + "px"}
    />
  {/each}
</div>

<style>
  .score-row {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    column-gap: 0.5rem;
  }

  .score-mark {
    width: var(--size);
    height: var(--size);
    background-color: lightgray;
    border-radius: 100%;
  }

  .score-mark.low {
    background-color: red;
  }

  .score-mark.medium {
    background-color: orange;
  }

  .score-mark.high {
    background-color: green;
  }
</style>
