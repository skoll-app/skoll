<template>
  <div class="login-layout d-flex align-items-center justify-content-center">
    <Loading v-if="show" />
    <div class="w-100">
      <Nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Loading from '~/components/ux/loading/Loading.vue'

export default Vue.extend({
  components: {
    Loading,
  },
  computed: {
    show(): boolean {
      return this.$store.state.loading.showing
    },
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
