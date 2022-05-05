<template>
  <div>
    <Timeline />
    <hr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Timeline from '~/components/timeline/Timeline.vue'

export default Vue.extend({
  components: { Timeline },})
</script>
