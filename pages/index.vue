<template>
  <div class="no-centered">
    <Timeline />
    <hr />
    <List />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import List from '~/components/card/categories/List.vue'
import Timeline from '~/components/timeline/Timeline.vue'

export default Vue.extend({
  components: { Timeline, List },
})
</script>
