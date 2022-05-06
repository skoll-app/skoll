<template>
  <div class="no-centered">
    <Timeline />
    <hr />
    <List />
    <RegisterSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import List from '~/components/card/categories/List.vue'
import RegisterSection from '~/components/sections/register/Register.vue'
import Timeline from '~/components/timeline/Timeline.vue'

export default Vue.extend({
  components: { Timeline, List, RegisterSection },
})
</script>
