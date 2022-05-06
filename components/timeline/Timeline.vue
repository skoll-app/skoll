<template>
  <section class="container pages-content__section text-center">
    <h2>{{ $t('home.sections.timeline.title') }}</h2>
    <p class="lead mb-5">
      {{ $t('home.sections.timeline.subtitle') }}
    </p>
    <div
      class="w-100 d-flex flex-md-row flex-column position-relative timeline-container"
    >
      <template v-for="(item, i) in timelineItems">
        <Item
          :key="i"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
        />
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Item from './Item.vue'

import SearchIcon from '~/static/assets/icons/search.svg'
import PeopleIcon from '~/static/assets/icons/people.svg'
import ClockIcon from '~/static/assets/icons/clock.svg'

export default Vue.extend({
  components: { Item, SearchIcon, PeopleIcon, ClockIcon },
  data: () => ({
    timelineItems: [
      {
        icon: SearchIcon,
        title: 'home.sections.timeline.first.title',
        description: 'home.sections.timeline.first.description',
      },
      {
        icon: PeopleIcon,
        title: 'home.sections.timeline.second.title',
        description: 'home.sections.timeline.second.description',
      },
      {
        icon: ClockIcon,
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

    @media (max-width: 767px) {
      content: none;
    }
  }

  .timeline-item {
    flex: 1;
  }

  .timeline-icon {
    height: 90px;
    width: 90px;

    &:hover {
      background-color: var(--bs-warning) !important;
      color: var(--bs-white);
    }
  }
}
</style>
