<template>
  <div class="card border-0 card-thinking">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img
          class="profile-img me-2"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAglJREFUSEu9VdeqAkEMzdpQsWPvDf//Q/wDCyoqWLGB3ZUzMMPu7I4jl3tv3nSyOclJTmJ0u12T/tCMfwOIRqNUr9cpEAiIek6nE/X7fXo+n8oaG40GpVIp8X673WgymdB+v2f/2SrI5/NUKBTI4/GwR9M0ablc0nQ6dQWQ/V+vF81mM/YNNwdFzWaTksmkcLjf7zQej0VG/EGuGMlst1sajUa2ZBwAwWCQABIKhYTj8XikwWAgqPJ6vcwnFosJn/P5TMPhkC6Xy2cAvGYyGSqVSoRAMJSOslE+DG+5XI4Mw2C/H48Hq3K32zmoVE4RGo7m8SBoHsoHaK1WI5/P5wouIygB3KjCZPj9fgqHwyLO4XCgXq+nnLKPOkAFlUpFZCtHuV6vbIxl3q1+WqGVy2XKZrOCKv4xtIGerFarj3tAC+A2MRjJzWbDGqszLQACtNttisfjtljoB+jRmRagWCyykeTq5gExuovFgubz+c8pcttP1mjy3nFDUlbgxj1GEmZVMP6DglULUQkAtWJ6ODU8WwBAaNADDA0HVVzlXwkNDbUG+dVVAWowNZFIxKZWKw3wabVahB5xU90OB0XVapXS6bQQlmpdJxIJ204CVev1mh0bpZIRGMrlW1THr6xyNBrHCUDcRAXf3AG5gUik0+nYlp98FwSAvJ5V1Mgg8kKUL5tWybpVoHt/A57WfXCltY1sAAAAAElFTkSuQmCC"
          alt="profile"
        />
        <TextInput
          size="sm"
          class="w-100"
          :placeholder="$t('feed.whatsToday')"
        />
      </div>
      <hr class="my-2" />
      <div>
        <div class="thinking-btn">
          <PicIcon class="me-2" />
          <p class="text-primary m-0">{{ $t('feed.photoVideo') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import TextInput from '~/components/ux/input/TextInput.vue'
import BeerIcon from '~/static/assets/icons/beer.svg'
import PicIcon from '~/static/assets/icons/pic.svg'

export default Vue.extend({
  components: {
    TextInput,
    BeerIcon,
    PicIcon,
  },
})
</script>

<style scoped lang="scss">
.card-thinking {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.thinking-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--bs-gray-300);
  }
}
</style>
