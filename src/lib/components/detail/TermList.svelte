<script>
  import Term from "./Term.svelte";
  let defaultTermData = {
    type: "SYMPTOM",
    term: "",
    translation: "",
    translation_in_filled: true,
  };
  export let terms;
  $: console.log(terms);
</script>

<div id="termlist">
  {#each terms as termData, i}
    <Term
      data={termData}
      on:change={(e) => (terms[i] = e.detail)}
      on:remove={(e) => (terms = terms.toSpliced(i, 1))}
    />
  {/each}
  <button
    id="plus-button"
    on:click={(e) => (terms = [...terms, { ...defaultTermData }])}>+</button
  >
</div>

<style>
  #termlist {
    display: flex;
    flex-direction: column;
    justify-content: left;
    /* width: 50%; */
  }

  #plus-button {
    padding: 0.25rem;
    width: fit-content;
    /* background-color: transparent; */
  }
</style>
