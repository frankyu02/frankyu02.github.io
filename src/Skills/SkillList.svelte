<script lang="ts">
  import type { LanguageDto } from "../Interfaces/LanguageDTO";
  import { pages } from "../Interfaces/PageApi";
  import type { ToolDto } from "../Interfaces/ToolDTO";

  export let label: string;
  export let skills: LanguageDto[] | ToolDto[] | undefined = undefined;
  export let listType: pages = pages.language;
  export let updatePage:
    | ((page: pages, filter: string | undefined) => void)
    | undefined = undefined;
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
        <button
          class="skill"
          on:click={() => updatePage && updatePage(listType, skill.name)}
          >{skill.name}</button
        >
        {#if i != skills.length - 1}
          <span>{space}•{space}</span>
        {/if}
      {/each}
    {/if}
  </div>
</main>

<style>
  main {
    display: flex;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 0px;
  }
  .label {
    min-width: 200px;
  }

  .skill {
    text-decoration: underline;
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  .skillSkeleton {
    width: 100px;
    height: 15px;
  }
</style>
