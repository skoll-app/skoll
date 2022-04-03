<template>
  <login />
</template>

<script lang="ts">
import Vue from 'vue'
import login from '~/components/login/login.vue'

export default Vue.extend({
  components: { login },
  name: 'IndexPage',
})
</script>
