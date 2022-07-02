<template>
  <div>
    <Header />
    <div>
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
  created() {
    if (process.client) {
      document.body.style.backgroundColor = '#F0F2F5'
    }
  },
  beforeDestroy () {
    if (process.client) {
      document.body.style.backgroundColor = 'var(--bs-white)'
    }
  },
})
</script>

<style scoped></style>
