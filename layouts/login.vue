<template>
  <div>
    <Header />
    <div
      class="login-layout d-flex align-items-center justify-content-center pages-content"
    >
      <Loading />
      <Toast />
      <div class="w-100">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Loading from '~/components/ux/loading/Loading.vue'
import Toast from '@/components/ux/toast/Toast.vue'
import Header from '~/components/header/Header.vue'

export default Vue.extend({
  components: {
    Loading,
    Toast,
    Header,
  },
})
</script>
<style scoped>
.login-layout {
  width: 100%;
  height: 100vh;
  background: url('~static/assets/img/bg-login.png') no-repeat;
  background-size: cover;
}
</style>
