<script>
  export let name = "Score";
  export let info = "This is a score"; // todo: add tooltip
  export let score = 3;

  let maxScore = 5;
  let grey = "#A8A8A8";
  let color = grey;
  $: {
    if (score < 3) {
      color = "#D9002F";
    } else if (score < 4) {
      color = "#F4B437";
    } else {
      color = "#41AF6D";
    }
  }
</script>

<div class="score-wrapper">
  <div class="score-name-wrapper">
    <div class="score-name">{name}</div>
    <div class="info"><span>i</span></div>
  </div>
  <div class="score-circles">
    {#each { length: maxScore } as _, i}
      <div
        class="circle"
        style={"background-color: " + (i < score ? color : grey)}
      />
    {/each}
  </div>
</div>

<style>
  .score-wrapper {
    display: flex;
    flex-direction: column;
    width: fit-content;
    row-gap: 1rem;
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
    background-color: #a8a8a8;
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
</style>
