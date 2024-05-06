<script lang="ts">
  import type { pages } from "../Interfaces/PageApi";
  import Education from "../Education/Education.svelte";
  import Experiences from "../Experiences/Experiences.svelte";

  import Header from "../Header/header.svelte";
  import Projects from "../Projects/Projects.svelte";
  import Skills from "../Skills/Skills.svelte";
  export let updatePage: (page: pages, filter: string | undefined) => void;
</script>

<main>
  <Header />
  <Skills {updatePage} />
  <Experiences {updatePage} />
  <Projects {updatePage} />
  <Education />
</main>
