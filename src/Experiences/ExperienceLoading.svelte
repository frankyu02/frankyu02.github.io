<script lang="ts">
  export let numBoxes = 3;
  let space = String.fromCharCode(160);
</script>

<main>
  <div class="experienceListLoadingWrapper">
    {#each new Array(numBoxes) as skeleton}
      <div class="experienceSkeletonWrapper">
        <div class="skeletonExperienceHeader">
          <div class="experienceSkeletonHeaderCompany">
            <div class="skeleton skeleton-text" />
          </div>
          <div class="experienceSkeletonHeaderDate">
            <div class="skeleton skeleton-text" />
          </div>
        </div>
        <div class="skeletonExperienceSkill">
          {#each new Array(3) as skeletonSkill, i}
            <div class="skeletonSkill">
              <div class="skeleton skeleton-text" />
            </div>
            {#if i < 2}
              <span>{space}•{space}</span>
            {/if}
          {/each}
        </div>
        <div class="skeletonExperienceSummary">
          {#each new Array(3) as skeletonSkill, i}
            <div class="skeletonSummary">
              <span>•{space}</span>
              <div class="skeletonSummaryContent">
                <div class="skeleton skeleton-text" />
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  .experienceSkeletonWrapper {
    margin-top: 10px;
  }
  .skeletonExperienceHeader {
    display: flex;
  }
  .experienceSkeletonHeaderCompany {
    height: 1rem;
    width: 30%;
  }
  .experienceSkeletonHeaderDate {
    width: 20%;
    margin-left: 30%;
    height: 1rem;
  }
  .skeletonExperienceSkill {
    margin-top: 5px;
    align-items: center;
    display: flex;
    width: 30%;
    height: 0.75rem;
  }
  .skeletonSkill {
    width: 20%;
    height: 100%;
  }
  .skeletonSummary {
    display: flex;
    align-items: center;
    height: 1rem;
    margin-top: 5px;
    margin-left: 5%;
  }
  .skeletonSummaryContent {
    width: 90%;
    height: 100%;
  }
</style>
