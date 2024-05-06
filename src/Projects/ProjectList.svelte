<script lang="ts">
  import type { ProjectDto } from "../Interfaces/ProjectDto";

  export let project: ProjectDto;
  export let index: number;
  let space = String.fromCharCode(160);
</script>

<main>
  <div class={`experienceWrapper ${index === 0 && "first-child"}`}>
    <div class="experienceHeader">
      <p class="company">
        <strong>{project.name}</strong>
      </p>
      <a class="location" href={project.projectUrl ?? ""} target="_blank">
        {project.projectUrl ?? ""}
      </a>
    </div>
    <div class="experienceSkillsList">
      {#each project.languages as experienceLanguage, i (experienceLanguage.id)}
        <p class="experienceSkillItem">
          {experienceLanguage.name}
          {#if i != project.languages.length - 1}
            <span>{space}•{space}</span>
          {/if}
        </p>
      {/each}
      {#if project.languages.length > 0 && project.tools.length > 0}
        <p class="experienceSkillItem">{space}•{space}</p>
      {/if}
      {#each project.tools as experienceTool, i (experienceTool.id)}
        <p class="experienceSkillItem">
          {experienceTool.name}
          {#if i != project.tools.length - 1}
            <span>{space}•{space}</span>
          {/if}
        </p>
      {/each}
    </div>
    <div class="experienceSummary">
      <ul>
        {#each project.summary as summary (summary.id)}
          <li>
            {summary.body}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
  p {
    margin-bottom: 0;
  }
  ul {
    margin-bottom: 0;
  }
  .experienceHeader {
    display: flex;
  }
  .first-child :global(p) {
    margin: 0;
  }
  .first-child :global(a) {
    margin: 0;
  }
  .company {
    width: 60%;
  }
  .experienceSkillsList {
    display: flex;
  }
  .experienceSkillItem {
    margin: 0;
    font-size: 0.75rem;
  }
  a {
    margin-top: 1em;
  }
</style>
