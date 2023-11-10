<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let show = false;
  $: visibilityStyle = "visibility: " + (show ? "visible;" : "hidden;");
</script>

<div
  id="divider"
  on:mouseenter={(e) => (show = true)}
  on:mouseleave={(e) => (show = false)}
>
  <div class="line" style={visibilityStyle} />
  <button
    style="{visibilityStyle}/"
    on:click|stopPropagation={(e) => dispatch("click", e)}
    ><span id="plus">+</span></button
  >
  <div class="line" style="{visibilityStyle}/" />
</div>

<style>
  #divider {
    display: flex;
    flex-direction: row;
    column-gap: 0.2rem;
    align-items: center;
    height: 1.5rem;
  }
  .line {
    flex-grow: 2;
    height: 0;
    border-bottom: solid 1px grey;
  }
  button {
    background-color: transparent;
    border: none;
    padding: 0.1rem;
  }
  #plus {
    color: grey;
    font-weight: 300;
    opacity: 0.5;
  }
</style>
