<script>
  import Score from "./Score.svelte";
  import NnmtOutput from "./NnmtOutput.svelte";
  import TemplateOutput from "./TemplateOutput.svelte";
</script>

<div id="detail-view-wrapper">
  <div class="input-area" contenteditable="true">
    This is where the input sentence will go
  </div>
  <Score />
  <NnmtOutput />
  <TemplateOutput />
</div>

<style>
  #detail-view-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    flex: 1;
    border: 1px solid blue;
    width: 100%;
  }
  .input-area {
    text-align: left;
    min-height: 2rem;
  }
</style>
