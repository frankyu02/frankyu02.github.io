<script>
  import { GetExperience } from "../Client/ExperienceClient";
  import ExperienceList from "./ExperienceList.svelte";
  import ExperienceLoading from "./ExperienceLoading.svelte";

  const experiencePromise = GetExperience();
</script>

<main>
  <h2>Experiences</h2>
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
  main :global(h2) {
    margin-bottom: 0;
    color: lightblue;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
</style>
