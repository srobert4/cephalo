<script>
  export let output = [
    { word: "Dies", utilized: true, backtranslation: "This" },
    { word: "ist", utilized: true, backtranslation: "is" },
    { word: "eine", utilized: false, backtranslation: "an" },
    { word: "Ausgabe", utilized: false, backtranslation: "output" },
  ];

  let clicked = -1;
</script>

<div class="output-wrapper">
  {#each output as word, i}
    <button
      class={"word-button" + (clicked == i ? " selected" : "")}
      on:click={(e) => {
        clicked == i ? (clicked = -1) : (clicked = i);
      }}
    >
      <span
        class="translated-word"
        style={word.utilized ? "color: black" : "color: #A8A8A8"}
        >{word.word}</span
      >
      {#if clicked == i}
        <span class="backtranslation">{word.backtranslation}</span>
      {/if}
    </button>
  {/each}
</div>

<style>
  .output-wrapper {
    display: flex;
    flex-direction: row;
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
    border: 1px solid grey;
    border-radius: 0.2rem;
  }
  .translated-word {
    color: black;
  }
  .backtranslation {
    font-style: italic;
  }
</style>
