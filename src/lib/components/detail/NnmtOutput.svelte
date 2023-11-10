<script>
  export let words;

  let clicked = -1;
</script>

<div class="output-wrapper">
  {#each words as word, i}
    <button
      class={"word-button" + (clicked == i ? " selected" : "")}
      on:click={(e) => {
        clicked == i ? (clicked = -1) : (clicked = i);
      }}
    >
      <span class="translated-word">{@html word.word}</span>
      {#if clicked == i}
        <span class="backtranslation">{word.backtranslation}</span>
      {/if}
    </button>
  {/each}
</div>

<style lang="scss">
  @import "../../../variables.scss";

  .output-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .word-button {
    display: flex;
    flex-direction: column;
    background: none;
    border: 1px solid transparent;
    row-gap: 0.2rem;
    padding: 0.5rem;
  }
  .word-button:hover {
    font-weight: bold;
  }
  button {
    border-color: transparent;
    outline: none;
  }
  .selected {
    border: 1px solid $systemGray;
    border-radius: 0.2rem;
  }
  .translated-word {
    color: black;
  }
  .backtranslation {
    font-style: italic;
  }
</style>
