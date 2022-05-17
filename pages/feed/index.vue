<template>
  <div class="no-centered">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <ListStoryCard />
          <ThinkingCard class="mt-3" />
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListStoryCard from '~/components/card/story/List.vue'
import ThinkingCard from '~/components/card/thinking/ThinkingCard.vue'

export default Vue.extend({
  layout: 'blue',
  middleware: ['auth'],
  components: { ListStoryCard, ThinkingCard },
})
</script>

<style scoped lang="scss"></style>
