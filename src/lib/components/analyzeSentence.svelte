<script context="module">
  export async function analyzeSentence(endpoint, sentence, method = "") {
    let url = new URL("analyze", endpoint);
    url.searchParams.append("sentence", sentence);
    url.searchParams.append("method", method);
    const response = await fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
      .then((response) => response.json())
      .then((d) => {
        console.log(d);
        return d.results;
      });
    return response;
  }
</script>
