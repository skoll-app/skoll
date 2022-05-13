<template>
  <div class="no-centered">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <ListStoryCard />
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListStoryCard from '~/components/card/story/List.vue'

export default Vue.extend({
  layout: 'blue',
  components: { ListStoryCard },
})
</script>

<style scoped lang="scss"></style>
