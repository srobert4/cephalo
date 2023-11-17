<script>
  import { selectedSource, detailShowingData } from "../stores";
  import Icon from "./../Icon.svelte";
  export let data;
  import { useTemplate } from "../analyzeSentence.svelte";
  // $: console.log(data)
  let showref = false;
  let srcButton;
</script>

<div class="list-row">
  <div class="text-col">
    <button
      class="sentence-wrapper"
      on:click={() => (showref = !showref)}
      bind:this={srcButton}
    >
      {@html data.display_src}
    </button>
    {#if showref}
      <div class="sentence-wrapper sentence-ref">
        {@html data.ref}
      </div>
    {/if}
  </div>
  <div style="display: flex; flex-direction: row;">
    {#if $selectedSource !== -1 && data?.type === "template"}
      <button
        class="use-template-button icon-button"
        on:click={() => {
          useTemplate($selectedSource, {
            template: data.src,
            translation: data.ref,
          });
        }}
      >
        use
      </button>
    {/if}
    <button
      class="add-sentence-button icon-button"
      on:click={() => {
        // $textToInsert = " " + tableDat.src;
        navigator.clipboard.writeText(srcButton.innerText);
      }}
    >
      <div
        style="display: flex; flex-direction: column; justify-content: center; height: 100%"
      >
        <Icon name="copy" />
      </div>
    </button>
  </div>
</div>

<style lang="scss">
  @import "../../../variables.scss";
  .list-row {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    justify-content: space-between;
    border-bottom: 0.5px solid grey;
    width: 100%;
    line-height: 1.1;
  }

  .text-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 0.5rem;
    padding: 1rem 0rem;
  }

  .sentence-ref {
    color: #9e9e9e;
  }

  .sentence-wrapper {
    text-align: left;
    font-family: $referenceFont;
    font-weight: $referenceFontWeight;
  }

  button.sentence-wrapper {
    padding: 0;
    background: transparent;
    font-weight: normal;
    border-radius: 0;
    border: none;
  }

  button.sentence-wrapper:focus {
    outline: none;
  }

  .add-sentence-button {
    padding-top: 1rem;
    display: flex;
  }

  .icon-button {
    background: none;
    border: none;
  }

  .icon-button:focus {
    outline: none;
  }
</style>
