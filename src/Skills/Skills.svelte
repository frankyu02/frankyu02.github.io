<script>
  import { getLanguages } from "../Client/LanguageClient";
  import SkillList from "./SkillList.svelte";
  const LanguagePromise = getLanguages()
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
    <SkillList label={"Tools and Frameworks"} />
</main>

<style>
    main{
        display: block;
        outline: 1px solid red;
    }
    main :global(h2){
        margin-bottom: 0;
        color: lightblue;
    }
</style>