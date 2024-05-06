<script lang="ts">
  import { GetFeaturedProjects } from "../Client/ProjectClient";
  import ExperienceLoading from "../Experiences/ExperienceLoading.svelte";
  import { pages } from "../Interfaces/PageApi";
  import ProjectList from "./ProjectList.svelte";
  export let updatePage: (page: pages, filter: string | undefined) => void;
  const featuredProjectsPromise = GetFeaturedProjects();
</script>

<main>
  <button
    type="button"
    class="h2Button"
    on:click={() => {
      updatePage(pages.projects, undefined);
    }}
    >Projects
  </button>
  {#await featuredProjectsPromise}
    <ExperienceLoading />
  {:then projects}
    {#each projects as project, i (project.id)}
      <ProjectList {project} index={i} />
    {/each}
  {:catch}
    <p>error</p>
  {/await}
</main>

<style>
  main {
    display: block;
  }
  main :global(h2) {
    margin-bottom: 0;
    color: lightblue;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
</style>
