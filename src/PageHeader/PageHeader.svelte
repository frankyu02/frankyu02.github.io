<script lang="ts">
  import { pages } from "../Interfaces/PageApi";

  export let headerText: string;
  export let updatePage: (page: pages, filter: string | undefined) => void;
</script>

<main>
  <button
    type="button"
    on:click={() => {
      updatePage(pages.home, undefined);
    }}>x</button
  >
  <h1>{headerText}</h1>
</main>

<style>
  h1 {
    text-align: center;
    border-bottom: 1px solid;
  }
  button {
    font-size: 1.5rem;
    color: lightblue;
  }
</style>
