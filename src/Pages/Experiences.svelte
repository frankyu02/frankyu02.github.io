<script lang="ts">
  import { GetExperience } from "../Client/ExperienceClient";
  import ExperienceList from "../Experiences/ExperienceList.svelte";
  import ExperienceLoading from "../Experiences/ExperienceLoading.svelte";
  import type { pages } from "../Interfaces/PageApi";
  import PageHeader from "../PageHeader/PageHeader.svelte";
  export let updatePage: (page: pages, filter: string | undefined) => void;

  let dontShowNextPage = false;
  let page = 1;
  const contentPerPage = 5;
  const nextPage = () => {
    page = page + 1;
  };
  const previousPage = () => {
    page = page - 1;
  };
  const updateDontShow = () => {
    dontShowNextPage = true;
  };
  $: experiencesPromise = GetExperience(page, contentPerPage);
</script>

<main>
  <PageHeader headerText={"Experiences"} {updatePage} />
  {#await experiencesPromise}
    <ExperienceLoading numBoxes={5} />
  {:then experiences}
    {#if experiences.length === 0}
      {updateDontShow()}
      {previousPage()}
    {/if}
    {#each experiences as experience, i (experience.id)}
      <ExperienceList {experience} index={i} />
    {/each}
    <div class="loadButtons">
      {#if page > 1}
        <button
          type="button"
          class="loadLessButton"
          on:click={() => {
            previousPage();
          }}>Previous Page</button
        >
      {/if}
      {#if experiences.length === contentPerPage && dontShowNextPage == false}
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
