<template>
  <div>
    <Header />
    <div class="pages-content">
      <Loading />
      <Toast />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/header/Header.vue'
import Loading from '~/components/ux/loading/Loading.vue'
import Toast from '~/components/ux/toast/Toast.vue'

export default Vue.extend({
  components: { Loading, Toast, Header },
})
</script>

<style scoped></style>
