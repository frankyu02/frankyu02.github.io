<script lang="ts">
  import { GetExperience } from "../Client/ExperienceClient";
  import { pages } from "../Interfaces/PageApi";
  import ExperienceList from "./ExperienceList.svelte";
  import ExperienceLoading from "./ExperienceLoading.svelte";

  const experiencePromise = GetExperience();
  export let updatePage: (page: pages, filter: string | undefined) => void;
</script>

<main>
  <button
    type="button"
    class="h2Button"
    on:click={() => {
      updatePage(pages.experience, undefined);
    }}
    >Experiences
  </button>

  <div class="experienceListWrapper">
    {#await experiencePromise}
      <ExperienceLoading />
    {:then experiences}
      {#each experiences as experience, i (experience.id)}
        <ExperienceList {experience} index={i} />
      {/each}
    {/await}
  </div>
</main>

<style>
  main {
    display: block;
  }
</style>
