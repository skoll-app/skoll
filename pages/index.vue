<template>
  <div>
    <Login />
    footer
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from '~/components/login/login.vue'

export default Vue.extend({
  components: { Login },
  name: 'IndexPage',
})
</script>
