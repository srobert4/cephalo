<script>
  export let name = "Score";
  export let info = "This is a score"; // todo: add tooltip
  export let score = 3;

  let maxScore = 5;
  let colorClass = "grey";
  $: colorClass = score < 3 ? "red" : score < 4 ? "yellow" : "green";
</script>

<div class="score-wrapper">
  <div class="score-name-wrapper">
    <div class="score-name">{name}</div>
    <div class="info"><span>i</span></div>
  </div>
  <div class="score-circles">
    {#each { length: maxScore } as _, i}
      <div class={"circle " + (i < score ? colorClass : "grey")} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../../../variables.scss";
  .score-wrapper {
    display: flex;
    flex-direction: column;
    width: fit-content;
    row-gap: 0.5rem;
  }
  .score-name-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    align-items: center;
  }
  .score-name {
    font-weight: 500;
  }
  .score-circles {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
  }
  .info {
    background-color: $systemGray3;
    width: 1rem;
    height: 1rem;
    text-align: center;
    border-radius: 2rem;
    color: white;
    font-size: 0.6rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .circle {
    width: 1rem;
    height: 1rem;
    border-radius: 2rem;
  }

  .grey {
    background-color: $systemGray5;
  }
  .red {
    background-color: $systemRed;
  }
  .yellow {
    background-color: $systemYellow;
  }
  .green {
    background-color: $systemGreen;
  }
</style>
