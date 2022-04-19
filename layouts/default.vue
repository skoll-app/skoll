<template>
  <div>
    <Loading />
    <Toast />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loading from '~/components/ux/loading/Loading.vue'
import Toast from '~/components/ux/toast/Toast.vue'

export default Vue.extend({
  components: { Loading, Toast },
})
</script>

<style scoped></style>
