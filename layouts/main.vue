<template>
  <div>
    <MainHeader />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainHeader from '~/components/header/MainHeader.vue'

export default Vue.extend({
  components: { MainHeader },
})
</script>

<style scoped></style>
