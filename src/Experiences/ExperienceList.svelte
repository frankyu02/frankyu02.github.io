<script lang="ts">
  import type { ExperienceDto } from "../Interfaces/ExperienceDTO";

  export let experience: ExperienceDto;
  export let index: number;
  let space = String.fromCharCode(160);
  const formatStartFinishDate = (
    start: Date,
    end: Date | undefined
  ): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Aprl",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const startYear = start.getFullYear() % 100;
    const startMonth = months[start.getMonth()];
    const endYear = end ? end.getFullYear() % 100 : null;
    const endMonth = end ? months[end.getMonth()] : null;
    return `${startMonth} '${startYear} ${end ? `— ${endMonth} '${endYear}` : ""}`;
  };
</script>

<main>
  <div class={`experienceWrapper ${index === 0 && "first-child"}`}>
    <div class="experienceHeader">
      <p class="company">
        <strong>{experience.company}</strong>
        |
        {experience.position}
      </p>
      <p class="location">
        {experience.location}
        |
        {formatStartFinishDate(
          new Date(experience.start),
          experience.finish ? new Date(experience.finish) : undefined
        )}
      </p>
    </div>
    <div class="experienceSkillsList">
      {#each experience.languages as experienceLanguage, i (experienceLanguage.id)}
        <p class="experienceSkillItem">
          {experienceLanguage.name}
          {#if i != experience.languages.length - 1}
            <span>{space}•{space}</span>
          {/if}
        </p>
      {/each}
      {#if experience.languages.length > 0 && experience.tools.length > 0}
        <p class="experienceSkillItem">{space}•{space}</p>
      {/if}
      {#each experience.tools as experienceTool, i (experienceTool.id)}
        <p class="experienceSkillItem">
          {experienceTool.name}
          {#if i != experience.tools.length - 1}
            <span>{space}•{space}</span>
          {/if}
        </p>
      {/each}
    </div>
    <div class="experienceSummary">
      <ul>
        {#each experience.summary as summary (summary.id)}
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
  .experienceHeader {
    display: flex;
  }
  .first-child :global(p) {
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
</style>
