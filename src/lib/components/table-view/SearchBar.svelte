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
    flex: 2;
  }

  .search-bar-input {
    border-radius: 0.3rem;
    height: 100%;
    width: 100%;
    padding: 0.3rem 0;
    margin: 0;
    min-width: 0px;
    text-indent: 10px;
    border-color: grey;
  }
</style>
