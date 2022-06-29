<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.networkLinking.title')"></h4>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'config',
})
</script>

<style scoped></style>
