<template>
  <div class="text-center timeline-item d-flex flex-column px-5">
    <div
      class="border border-1 border-warning rounded-circle timeline-icon d-flex justify-content-center align-items-center align-self-center bg-white"
    >
      <component :is="icon"></component>
    </div>
    <h5 class="mt-3" v-html="$t(title)"></h5>
    <p>
      <small>
        {{ $t(description) }}
      </small>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: { type: [String, Object], default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
  },
})
</script>

<style scoped></style>
