<script lang="ts">
  import { getLanguages } from "../Client/LanguageClient";
  import { GetTools } from "../Client/ToolClient";
  import { pages } from "../Interfaces/PageApi";
  import SkillList from "./SkillList.svelte";
  const LanguagePromise = getLanguages();
  const toolPromise = GetTools();
  export let updatePage: (page: pages, filter: string | undefined) => void;
</script>

<main>
  <h2>Skills</h2>
  {#await LanguagePromise}
    <SkillList label={"Languages"} />
  {:then Languages}
    <SkillList label={"Languages"} skills={Languages} {updatePage} />
  {:catch error}
    <SkillList label={"Error"} />
  {/await}
  {#await toolPromise}
    <SkillList label={"Tools and Frameworks"} />
  {:then tools}
    <SkillList
      label={"Tools and Frameworks"}
      skills={tools}
      {updatePage}
      listType={pages.tool}
    />
  {:catch}
    <SkillList label={"Error"} />
  {/await}
</main>

<style>
  main {
    display: block;
  }
  main :global(h2) {
    margin-bottom: 0;
    color: lightblue;
  }
</style>
