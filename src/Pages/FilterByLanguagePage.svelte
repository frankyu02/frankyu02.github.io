<script lang="ts">
  import { GetExperiencesByLanguage } from "../Client/ExperienceClient";
  import { GetProjectsByLanguage } from "../Client/ProjectClient";
  import ExperienceList from "../Experiences/ExperienceList.svelte";
  import { pages } from "../Interfaces/PageApi";
  import GenericLoading from "../Loading/GenericLoading.svelte";
  import PageHeader from "../PageHeader/PageHeader.svelte";
  import ProjectList from "../Projects/ProjectList.svelte";

  export let language: string;
  export let updatePage: (page: pages, filter: string | undefined) => void;

  const experiencePromise = GetExperiencesByLanguage(language);
  const projectPromise = GetProjectsByLanguage(language);
</script>

<main>
  {#if language == ""}
    {updatePage(pages.home, undefined)}
  {/if}
  <PageHeader
    headerText={`Projects and Experiences using ${language}`}
    {updatePage}
  />
  {#await projectPromise}
    <GenericLoading />
  {:then projects}
    {#await experiencePromise}
      <GenericLoading />
    {:then experiences}
      {#if projects.length === 0 && experiences.length === 0}
        <p>No Data could be found. How strange</p>
      {/if}
      {#if projects.length > 0}
        <h2>Projects</h2>
        {#each projects as project, i (project.id)}
          <ProjectList {project} index={i} />
        {/each}
      {/if}
      {#if experiences.length > 0}
        <h2>Experiences</h2>
        {#each experiences as experience, i (experience.id)}
          <ExperienceList {experience} index={i} />
        {/each}
      {/if}
    {/await}
  {/await}
</main>

<style>
  main :global(h2) {
    margin-bottom: 0;
    color: lightblue;
  }
</style>
