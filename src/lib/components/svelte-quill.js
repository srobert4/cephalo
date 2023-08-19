// adapted from https://github.com/kevmodrome/svelte-quill/tree/master
import Quill from "quill";

export function quill(node, options) {
  const quill = new Quill(node, {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "code-block"],
      ],
    },
    placeholder: "Type something...",
    theme: "snow", // or 'bubble'
    ...options,
  });
  const container = node.getElementsByClassName("ql-editor")[0];

  quill.on("text-change", function (delta, oldDelta, source) {
    node.dispatchEvent(
      new CustomEvent("text-change", {
        detail: {
          source: source,
          text: {
            html: container.innerHTML,
            text: quill.getText(),
          },
        },
      })
    );
  });

  quill.on("selection-change", function (range, oldRange, source) {
    node.dispatchEvent(
      new CustomEvent("selection-change", {
        detail: {
          range: range,
          oldRange: oldRange,
          source: source,
        },
      })
    );
  });
}
