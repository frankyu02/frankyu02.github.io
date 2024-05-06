<script lang="ts">
  import { GetProjects } from "../Client/ProjectClient";
  import ExperienceLoading from "../Experiences/ExperienceLoading.svelte";
  import type { pages } from "../Interfaces/PageApi";
  import PageHeader from "../PageHeader/PageHeader.svelte";
  import ProjectList from "../Projects/ProjectList.svelte";
  export let updatePage: (page: pages, filter: string | undefined) => void;
  let page = 0;
  const contentPerPage = 5;
  const nextPage = () => {
    page = page + 1;
  };
  const previousPage = () => {
    page = page - 1;
  };
  $: projectPromise = GetProjects(page * contentPerPage, contentPerPage);
  let dontShowNextPage = false;
  const updateDontShow = () => {
    dontShowNextPage = true;
  };
</script>

<main>
  <PageHeader headerText={"Projects"} {updatePage} />
  {#await projectPromise}
    <ExperienceLoading />
  {:then projects}
    {#if projects.length === 0}
      {updateDontShow()}
      {previousPage()}
    {/if}
    {#each projects as project, i (project.id)}
      <ProjectList {project} index={i} />
    {/each}
    <div class="loadButtons">
      {#if page > 0}
        <button
          type="button"
          class="loadLessButton"
          on:click={() => {
            previousPage();
          }}>Previous Page</button
        >
      {/if}
      {#if projects.length === contentPerPage && !dontShowNextPage}
        <button
          type="button"
          class="loadMoreButton"
          on:click={() => {
            nextPage();
          }}>Next Page</button
        >
      {/if}
    </div>
  {:catch}
    <p>Something went wrong. It's not supposed to but it did...</p>
  {/await}
</main>

<style>
  .loadButtons {
    margin-top: 10px;
    display: flex;
  }
  .loadMoreButton {
    margin-left: auto;
  }
  .loadButtons :global(button) {
    font-size: 1rem;
    color: lightblue;
    text-decoration: underline;
  }
</style>
