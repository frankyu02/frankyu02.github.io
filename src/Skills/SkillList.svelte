<script lang="ts">
  import type { LanguageDto } from "../Interfaces/LanguageDTO";

    export let label: string;
    export let skills: LanguageDto[] | undefined = undefined;
    let space = String.fromCharCode(160);

</script>

<main>
    <p class="label">{label}</p>
    <div class="list">
    {#if skills == null}
        <div class="skeleton skeleton-text" />
        <span>{space}•{space}</span>
        <div class="skeleton skeleton-text" />
        <span>{space}•{space}</span>
        <div class="skeleton skeleton-text" />
        <span>{space}•{space}</span>
        <div class="skeleton skeleton-text" />
        <span>{space}•{space}</span>
        <div class="skeleton skeleton-text" />
    {:else}
    {#each skills as skill, i}
        <p>{skill.name}</p>
        {#if i != skills.length - 1}
        <span>{space}•{space}</span>
        {/if}
    {/each}
    {/if}
    </div>

</main>

<style>
    p{
        margin: 0;
    }
    main{
        display: flex;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 50px;
    }
    .label{
        width: 200px;
        outline: 1px solid blue
    }
    .skeleton-text{
        width: 100px;
        height: 15px;
    }
    .skeleton{
        opacity: .7;
        animation: skeleton-loading 1s linear infinite alternate;
    }
    @keyframes skeleton-loading{
        0%{
            background-color: hsl(200, 20%, 70%);
        }
        100%{
            background-color: hsl(200, 20%, 95%);
        }
    }
</style>