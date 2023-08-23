<script>
  export let text = "Mr. Doe";
  export let type = "name";
  export let types = ["name", "sym", "cond", "med"];
  let hover = false;
  let clicked = false;
</script>

<div
  class="chip"
  class:clicked
  on:click={(e) => {
    clicked = true;
    hover = false;
  }}
  on:keydown={(e) => {
    clicked = true;
    hover = false;
  }}
  on:mouseenter={(e) => {
    if (!clicked) hover = true;
  }}
  on:mouseleave={(e) => {
    if (!clicked) hover = false;
  }}
>
  <p>
    <span id="text">{text}</span>
    {#if hover}
      <span class="type-text">{type.toUpperCase()}</span>
    {:else if clicked}
      <select bind:value={type} class="type-text">
        {#each types as type}
          <option value={type}>
            {type.toUpperCase()}
          </option>
        {/each}
      </select>
      <button
        on:click|stopPropagation={(e) => {
          clicked = false;
        }}>x</button
      >
    {/if}
  </p>
</div>

<style>
  .chip {
    display: inline-block;
    padding: 0 0.5rem;
    border-radius: 0.3rem;
  }

  .chip:hover,
  .chip.clicked {
    background-color: lightgray;
  }

  p {
    margin: 0;
  }

  #text {
    text-decoration: underline;
    text-decoration-style: dashed;
    text-decoration-color: lightgray;
  }

  .type-text {
    padding-left: 0.5rem;
    font-size: 0.7rem;
    color: grey;
  }

  select {
    background-color: transparent;
    border: none;
  }

  button {
    border: none;
    background: transparent;
  }
</style>
