<script>
  export let templates = [
    {
      template: "Avoid strenuous activities for at least <TIME>.",
      translation:
        "Vermeiden Sie anstrengende Aktivitäten für mindestens <TIME>.",
    },
    {
      template: "Do not lift anything over <N1> pounds for <N2> weeks.",
      translation: "Heben Sie <N2> Wochen lang nichts über <N1> Pfund.",
    },
  ];
  export let terms = [
    {
      type: "<TIME>",
      term: "2 weeks",
      translation: "2 Wochen",
    },
  ];
  export let filled =
    "Vermeiden Sie anstrengende Aktivitäten für mindestens 2 Wochen.";

  let selectedTemplate = 0;
</script>

<div class="output-wrapper">
  <select bind:value={selectedTemplate}>
    {#each templates as template, i}
      <option value={i}>
        {template.template}
      </option>
    {/each}
  </select>
  <p class="de">{templates[selectedTemplate].translation}</p>
  {#each terms as term}
    <div class="term-wrapper">
      <span>{term.type} = </span>
      <div class="term-translation-wrapper">
        <span>{term.term}</span>
        <span class="de">{term.translation}</span>
      </div>
    </div>
  {/each}
  <p>{filled}</p>
</div>

<style>
  .output-wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
  p {
    text-align: left;
  }
  .de {
    color: #a8a8a8;
    font-style: italic;
  }
  .term-wrapper {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
  }
  .term-translation-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
