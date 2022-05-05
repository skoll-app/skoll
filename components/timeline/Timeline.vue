<template>
  <div class="container">
    <div class="w-100 d-flex position-relative timeline-container">
      <template v-for="(item, i) in timelineItems">
        <Item
          :key="i"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from './Item.vue'

import SearchIcon from '~/static/assets/icons/search.svg'

export default Vue.extend({
  components: { Item, SearchIcon },
  data: () => ({
    timelineItems: [
      {
        icon: SearchIcon,
        title: 'home.sections.timeline.first.title',
        description: 'home.sections.timeline.first.description',
      },
      {
        icon: SearchIcon,
        title: 'home.sections.timeline.second.title',
        description: 'home.sections.timeline.second.description',
      },
      {
        icon: SearchIcon,
        title: 'home.sections.timeline.third.title',
        description: 'home.sections.timeline.third.description',
      },
    ],
  }),
})
</script>

<style lang="scss">
.timeline-container {
  &:after {
    content: ' ';
    border-bottom: 2px solid var(--bs-gray-300);
    display: inline-block;
    position: absolute;
    width: 70%;
    z-index: -1;
    top: 45px;
    left: 15%;
  }

  .timeline-item {
    flex: 1;
  }

  .timeline-icon {
    height: 90px;
    width: 90px;
  }
}
</style>
