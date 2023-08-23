<script>
  export let x;
  export let y;

  export let selected = -1;
  export let suggestions = [
    "suggestion one",
    "suggestion two",
    "suggestion three",
  ];

  function onKeyDown(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 38: // up
        if (selected >= 0) {
          selected--;
        }
        e.preventDefault();
        break;
      case 40: // down
        if (selected < suggestions.length - 1) {
          selected++;
        }
        e.preventDefault();
        break;
    }
  }
</script>

<div id="dropdown" style={"left: " + x + "px; top: " + y + "px;"}>
  {#each suggestions as suggestion, i}
    <p class={i === selected ? "selected" : ""}>{suggestion}</p>
    <hr />
  {/each}
</div>

<svelte:window on:keydown={onKeyDown} />

<style>
  #dropdown {
    background-color: #f2f2f2;
    position: absolute;
    z-index: 1;
    /* width: 10vw; */
    /* height: 10vh; */
  }

  #dropdown p {
    padding: 0.5rem;
    margin: 0;
  }

  .selected {
    background-color: #dadada;
  }

  #dropdown hr {
    margin: 0;
  }
</style>
