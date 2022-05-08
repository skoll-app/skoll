<template>
  <div class="no-centered">
    <Timeline />
    <List />
    <ShareSection />
    <RestaurantsSection />
    <RegisterSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import List from '~/components/card/categories/List.vue'
import Timeline from '~/components/timeline/Timeline.vue'

import RegisterSection from '~/components/sections/register/Register.vue'
import ShareSection from '~/components/sections/share/Share.vue'
import RestaurantsSection from '~/components/sections/restaurants/Restaurants.vue'

export default Vue.extend({
  components: {
    Timeline,
    List,
    RegisterSection,
    ShareSection,
    RestaurantsSection,
  },
})
</script>
, Restaurants
