<script>
  export let value;
  export let options = [];
</script>

<div class="range">
  <h4>Use database:</h4>
  <div class="input-row">
    {#each options as option}
      <label>
        <input
          type="radio"
          name="utilizationLevel"
          value={option}
          bind:group={value}
        />
        {option}
      </label>
    {/each}
  </div>
</div>

<style lang="scss">
  .range {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  h4 {
    text-align: left;
  }
  .input-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
