<template>
  <div>
    <Login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '~/components/login/login.vue'

export default Vue.extend({
  layout: 'login',
  components: { Login },
  name: 'IndexPage',
  middleware: ['auth']
})
</script>

<style scoped></style>
