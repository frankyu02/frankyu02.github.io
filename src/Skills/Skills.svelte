<script>
  import { getLanguages } from "../Client/LanguageClient";
  import { GetTools } from "../Client/ToolClient";
  import SkillList from "./SkillList.svelte";
  const LanguagePromise = getLanguages();
  const toolPromise = GetTools();
</script>
<main>
    <h2>
        Skills
    </h2>
    {#await LanguagePromise}
        <SkillList label={"Languages"} />
    {:then Languages} 
        <SkillList label={"Languages"} skills={Languages} />
    {:catch error}
        <SkillList label={"Error"} />
    {/await}
    {#await toolPromise}
        <SkillList label={"Tools and Frameworks"} />
    {:then tools} 
        <SkillList label={"Tools and Frameworks"} skills={tools} />
    {:catch}
        <SkillList label={"Error"} />
    {/await}
</main>

<style>
    main{
        display: block;
    }
    main :global(h2){
        margin-bottom: 0;
        color: lightblue;
    }
</style>