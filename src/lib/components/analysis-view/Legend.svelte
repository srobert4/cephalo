<script>
  import { data } from "../stores.js";

  $: numTemplates = $data.filter(
    (s) => s.last_method_selected == "template"
  ).length;
  $: numNNMT = $data.filter((s) => s.last_method_selected == "nnmt").length;
</script>

<div id="legend">
  <div class="col">
    <div class="label">Template</div>
    <div class="label">NNMT</div>
  </div>
  <div class="col">
    <div class="row">
      <div
        class="bar"
        id="template-bar"
        style:--width={numTemplates + "rem"}
      />
      {numTemplates}
    </div>
    <div class="row">
      <div class="bar" id="nnmt-bar" style:--width={numNNMT + "rem"} />
      {numNNMT}
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../../variables.scss";

  #legend {
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 5px 5px 5px;
    gap: 5px;
    border-radius: 5px;
    box-shadow: 0 0 2px hsla(0, 0%, 0%, 0.2), 0 0 5px hsla(0, 0%, 0%, 0.1);
    line-height: 1;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.97);
    width: fit-content;
  }
  .col {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  .row {
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
  }
  .label {
    width: 5rem;
    text-align: left;
  }
  .bar {
    height: 1rem;
    width: var(--width);
  }
  #nnmt-bar {
    background-color: $nnmtColor;
  }
  #template-bar {
    background-color: $templateColor;
  }
</style>
