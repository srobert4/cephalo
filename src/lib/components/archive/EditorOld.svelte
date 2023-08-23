<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import { quill } from "../svelte-quill.js";
  import { source, selected, textToInsert } from "../stores.js";

  // Can bring back if we want to have autocomplete suggestions or inline suggestions
  // or other keyboard bindings.
  // let keyboardOverrides = {
  // 	enter: {
  // 		key: 13,
  // 		handler: function (range, context) {
  // 			if (showingDropdown) {
  // 				if (dropdownSelectedIndex >= 0) acceptDropdownSuggestion(range);
  // 				return false;
  // 			}
  // 			return true;
  // 		}
  // 	},
  // 	escape: {
  // 		key: 'escape',
  // 		handler: function (range, context) {
  // 			if (showingDropdown) {
  // 				showingDropdown = false;
  // 				dropdownSelectedIndex = -1;
  // 				return false;
  // 			}
  // 			if (showingSuggestion) {
  // 				rejectSuggestion();
  // 				return false;
  // 			}
  // 			return true;
  // 		}
  // 	},
  // 	down: {
  // 		key: 'down',
  // 		handler: function (range, context) {
  // 			if (showingSuggestion) {
  // 				displayDropdown(range);
  // 				return false;
  // 			}
  // 			return true;
  // 		}
  // 	},
  // 	right: {
  // 		key: 'right',
  // 		handler: function (range, context) {
  // 			if (showingSuggestion) {
  // 				if (dropdownSelectedIndex === -1) acceptSuggestion();
  // 				return false;
  // 			}
  // 			return true;
  // 		}
  // 	},
  // 	up: {
  // 		key: 'up',
  // 		handler: function (range, context) {
  // 			return !showingSuggestion;
  // 		}
  // 	},
  // 	left: {
  // 		key: 'left',
  // 		handler: function (range, context) {
  // 			return !showingSuggestion;
  // 		}
  // 	}
  // };

  let options = {
    modules: {
      toolbar: false,
      // keyboard: {
      // 	bindings: keyboardOverrides
      // }
    },
    scrollingContainer: "#scrolling-container",
    theme: "snow",
    placeholder: "Write something from outside...",
  };

  export let content = { html: "", text: "" };
  // export let selected = '';
  // export let textToInsert = ''; //[];
  // export let suggestion = '';
  // export let scores = {};
  // export let data = {};
  // let showingSuggestion = false;
  // let showingDropdown = false;
  // export let showingAnalysisPopup = false;
  // export let dropdownOptions = ['suggestion one', 'suggestion two', 'suggestion three'];
  // let dropdownSelectedIndex = -1;
  // let dropdownX = 0;
  // let dropdownY = 0;
  // let dropdownStyle = '';
  // let analysisX = 0;
  // let analysisY = 0;
  // let sentenceMarkerX = 10;

  let quillElement;
  let editorInstance;
  onMount(() => {
    editorInstance = quillElement.__quill;
    editorInstance.insertText(0, $source);
  });

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

  // OLD CONTENT FOR SHOWING SUGGESTIONS IN EDIT MODE
  // function rejectSuggestion(range = null) {
  // 	if (!range) range = editorInstance.getSelection((focus = true));
  // 	editorInstance.deleteText(range.index, suggestion.length);
  // 	showingSuggestion = false;
  // 	dispatch('suggestionRejected');
  // }

  // function acceptSuggestion() {
  // 	if (showingDropdown) showingDropdown = false;
  // 	let range = editorInstance.getSelection((focus = true));
  // 	editorInstance.formatText(range.index, suggestion.length, 'color', 'black');
  // 	editorInstance.setSelection(range.index + suggestion.length, 0);
  // 	showingSuggestion = false;
  // 	dispatch('suggestionAccepted');
  // }

  // function acceptDropdownSuggestion(range) {
  // 	// remove suggestion
  // 	editorInstance.formatText(range.index, suggestion.length, 'color', 'black');
  // 	editorInstance.deleteText(range.index, suggestion.length);
  // 	showingSuggestion = false;
  // 	dispatch('suggestionRejected');
  // 	// add dropdown option
  // 	editorInstance.insertText(range.index, dropdownOptions[dropdownSelectedIndex]);
  // 	showingDropdown = false;
  // 	dropdownSelectedIndex = -1;
  // }

  // $: displaySuggestion = function () {
  // 	if (editorInstance && suggestion?.length > 0) {
  // 		let range = editorInstance.getSelection((focus = true));
  // 		if (range.length === 0) {
  // 			editorInstance.insertText(range.index, suggestion);
  // 			editorInstance.formatText(range.index, suggestion.length, 'color', 'grey');
  // 			editorInstance.setSelection(range.index, range.length);
  // 			showingSuggestion = true;
  // 		}
  // 	}
  // };

  // $: suggestion, displaySuggestion();

  // $: insertText = function () {
  // 	console.log('here');
  // 	if (editorInstance && textToInsert?.length > 0) {
  // 		let range = editorInstance.getSelection((focus = true));
  // 		if (range.length > 0) {
  // 			editorInstance.setSelection(range.index + range.length);
  // 			range = editorInstance.getSelection((focus = true));
  // 		}
  // 		editorInstance.insertText(range.index, textToInsert);
  // 		dispatch('text-inserted');
  // 	}
  // };

  // $: displayDropdown = function (range) {
  // 	let bounds = editorInstance.getBounds(range.index, range.length);
  // 	console.log(bounds);
  // 	dropdownX = bounds.right;
  // 	dropdownY = bounds.bottom + 5;
  // 	showingDropdown = true;
  // };

  // $: displayAnalysisPopup = function () {
  // 	let range = editorInstance.getSelection((focus = true));
  // 	let bounds = editorInstance.getBounds(range.index, range.length);
  // 	console.log(bounds);
  // 	analysisX = bounds.right;
  // 	analysisY = bounds.bottom + 5;
  // 	showingAnalysisPopup = true;
  // };

  // $: {
  // 	if (showingAnalysisPopup) displayAnalysisPopup();
  // }
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
      // if (e.detail.source == 'user' && showingSuggestion) rejectSuggestion();
      content = e.detail.text;
      source.set(e.detail.text.text);
    }}
    on:selection-change={(e) => {
      // if (e.detail.source == 'user' && showingDropdown) showingDropdown = false;
      // if (e.detail.source == 'user' && showingSuggestion) rejectSuggestion(e.detail.oldRange);
      if (e.detail.range == null || e.detail.range.length === 0) {
        selected.set("");
      } else {
        selected.set(
          editorInstance.getText(e.detail.range.index, e.detail.range.length)
        );
      }
    }}
  />
  <!-- {#if showingDropdown}
		<Dropdown x={dropdownX} y={dropdownY} bind:selected={dropdownSelectedIndex} />
	{/if}
	{#if showingAnalysisPopup}
		<AnalysisPopup
			x={analysisX}
			y={analysisY}
			on:dismissClicked={(e) => (showingAnalysisPopup = false)}
			on:rephraseClicked={(e) => console.log(e)}
		/>
	{/if} -->
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
