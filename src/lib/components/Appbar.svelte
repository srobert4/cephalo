<script>
  export let openInstructions;
</script>

<header id="appbar">
  <div id="appbar-inner-wrapper">
    <div id="appbar-title">
      <h2>Cephalo</h2>
    </div>
    <div id="appbar-menu-buttons">
      <button id="export-button">export</button>
      <button
        id="menu-button"
        on:click={() => (openInstructions = !openInstructions)}>menu</button
      >
    </div>
  </div>
</header>

<style>
  #appbar {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    border-bottom: 1px solid grey;
    z-index: 100;
    width: 100%;
  }

  #appbar-inner-wrapper {
    display: flex;
    height: 3rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #appbar-title {
    padding-left: 10rem;
  }

  #appbar-menu-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    column-gap: 1rem;
    padding-right: 10rem;
  }
</style>
