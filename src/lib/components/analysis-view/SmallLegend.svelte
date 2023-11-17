<div id="legend">
  <div class="row">
    <div class="square" id="template" />
    <div class="label">Template</div>
  </div>
  <div class="row">
    <div class="square" id="nnmt" />
    <div class="label">Flexible</div>
  </div>
</div>

<style lang="scss">
  @import "../../../variables.scss";

  #legend {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 5px 5px 5px;
    gap: 5px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.97);
    width: 100%;
    justify-content: flex-start;
    column-gap: 1rem;
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
    align-items: center;
  }
  .label {
    //   width: 5rem;
    text-align: left;
    font-family: $annotationFont;
    color: $annotationColor;
  }
  .square {
    height: 0.8rem;
    width: 0.4rem;
  }
  #nnmt {
    background-color: $nnmtColor;
  }
  #template {
    background-color: $templateColor;
  }
</style>
