<script lang="ts">
  import { pages, type PageApi } from "./Interfaces/PageApi";
  import Experiences from "./Pages/Experiences.svelte";
  import ExperiencePage from "./Pages/Experiences.svelte";
  import FilterByLanguagePage from "./Pages/FilterByLanguagePage.svelte";
  import FilterByToolPage from "./Pages/FilterByToolPage.svelte";
  import ProjectsPage from "./Pages/ProjectsPage.svelte";
  import Resume from "./Resume/Resume.svelte";

  let router: PageApi = {
    page: pages.home,
    filter: undefined,
  };

  export function updatePage(page: pages, filter: string | undefined) {
    router = {
      page,
      filter,
    };
  }
</script>

<main>
  {#if router.page == pages.home}
    <Resume {updatePage} />
  {:else if router.page == pages.experience}
    <ExperiencePage {updatePage} />
  {:else if router.page == pages.language}
    <FilterByLanguagePage language={router.filter || ""} {updatePage} />
  {:else if router.page == pages.projects}
    <ProjectsPage {updatePage} />
  {:else if router.page == pages.tool}
    <FilterByToolPage tool={router.filter || ""} {updatePage} />
  {/if}
</main>

<style>
</style>
