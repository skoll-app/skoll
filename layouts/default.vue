<template>
  <div>
    <MainHeader />
    <div class="pages-content">
      <Loading />
      <Toast />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainHeader from '~/components/header/MainHeader.vue'
import Loading from '~/components/ux/loading/Loading.vue'
import Toast from '~/components/ux/toast/Toast.vue'

export default Vue.extend({
  components: { Loading, Toast, MainHeader },
})
</script>

<style scoped></style>
