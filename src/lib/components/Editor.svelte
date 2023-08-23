<script>
  import { onMount, onDestroy } from "svelte";
  import { quill } from "./svelte-quill.js";
  import { source, selected, textToInsert } from "./stores.js";

  // Set up Quill editor
  let options = {
    modules: {
      toolbar: false,
    },
    scrollingContainer: "#scrolling-container",
    theme: "snow",
    placeholder: "Write here...",
  };

  export let content = { html: "", text: "" };

  let quillElement;
  let editorInstance;
  onMount(() => {
    editorInstance = quillElement.__quill;
    // Set initial text from $source store value
    editorInstance.insertText(0, $source);
  });

  // Update editor text when $textToInsert store value changes
  const unsubscribeToTextInsert = textToInsert.subscribe((text) => {
    if (editorInstance && text.length > 0) {
      let range = editorInstance.getSelection((focus = true));
      if (range.length > 0) {
        editorInstance.setSelection(range.index + range.length);
        range = editorInstance.getSelection((focus = true));
      }
      editorInstance.insertText(range.index, text);
      textToInsert.set("");
    }
  });
  onDestroy(unsubscribeToTextInsert);
</script>

<svelte:head>
  <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>

<div id="scrolling-container">
  <div
    id="editor"
    bind:this={quillElement}
    use:quill={options}
    on:text-change={(e) => {
      content = e.detail.text;
      source.set(e.detail.text.text);
    }}
    on:selection-change={(e) => {
      if (e.detail.range == null || e.detail.range.length === 0) {
        selected.set("");
      } else {
        selected.set(
          editorInstance.getText(e.detail.range.index, e.detail.range.length)
        );
      }
    }}
  />
</div>

<style>
  #editor {
    height: auto;
    min-height: 100%;
    width: 100%;
  }

  #scrolling-container {
    height: 100%;
    min-height: 100%;
    overflow-y: auto;
    position: relative;
  }
</style>
