<script>
  import Score from "./Score.svelte";
</script>

<div id="detail-view-wrapper">
  <div contenteditable="true">This is where the input sentence will go</div>
  <Score />
  <div>Output</div>
</div>

<style>
  #detail-view-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
