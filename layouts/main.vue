<template>
  <div>
    <MainHeader />
    <Sidebar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainHeader from '~/components/header/MainHeader.vue'
import Sidebar from '~/components/ux/sidebar/Sidebar.vue'

export default Vue.extend({
  components: { MainHeader, Sidebar },
})
</script>

<style scoped></style>
