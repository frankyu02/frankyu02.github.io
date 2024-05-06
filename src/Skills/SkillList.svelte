<script lang="ts">
  import type { LanguageDto } from "../Interfaces/LanguageDTO";
  import type { ToolDto } from "../Interfaces/ToolDTO";

  export let label: string;
  export let skills: LanguageDto[] | ToolDto[] | undefined = undefined;
  let space = String.fromCharCode(160);
</script>

<main>
  <p class="label">{label}</p>
  <div class="list">
    {#if skills == null}
      <div class="skillSkeleton">
        <div class="skeleton skeleton-text" />
      </div>
      <span>{space}•{space}</span>
      <div class="skillSkeleton">
        <div class="skeleton skeleton-text" />
      </div>
      <span>{space}•{space}</span>
      <div class="skillSkeleton">
        <div class="skeleton skeleton-text" />
      </div>
      <span>{space}•{space}</span>
      <div class="skillSkeleton">
        <div class="skeleton skeleton-text" />
      </div>
      <span>{space}•{space}</span>
      <div class="skillSkeleton">
        <div class="skeleton skeleton-text" />
      </div>
    {:else}
      {#each skills as skill, i}
        <p class="skill">{skill.name}</p>
        {#if i != skills.length - 1}
          <span>{space}•{space}</span>
        {/if}
      {/each}
    {/if}
  </div>
</main>

<style>
  p {
    margin: 0;
  }
  main {
    display: flex;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 50px;
  }
  .label {
    width: 200px;
  }

  .skill {
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
  .skillSkeleton {
    width: 100px;
    height: 15px;
  }
</style>
