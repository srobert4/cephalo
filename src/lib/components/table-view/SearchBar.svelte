<script>
  import { query } from "./../stores.js";
</script>

<form class="search-bar">
  <input
    class="search-bar-input"
    type="search"
    id="input-search"
    on:input={(e) => ($query = e.target.value)}
    placeholder="Type to search..."
  />
</form>

<style>
  .search-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    column-gap: 0.5rem;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .search-bar-input {
    border-radius: 0.3rem;
    height: 100%;
    width: 100%;
    padding: 2px 0;
    margin: 0;
    min-width: 0px;
    text-indent: 10px;
    border-color: grey;
    position: relative;
    flex-grow: 1;
  }
</style>
