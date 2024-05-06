<script>
  import { GetFeaturedProjects } from "../Client/ProjectClient";
  import ExperienceLoading from "../Experiences/ExperienceLoading.svelte";
  import ProjectList from "./ProjectList.svelte";

  const featuredProjectsPromise = GetFeaturedProjects();
</script>

<main>
  <h2>Projects</h2>
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
