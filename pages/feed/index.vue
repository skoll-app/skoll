<template>
  <div class="no-centered">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-2"></div>
        <div class="col-12 col-md-10 col-lg-5">
          <ListStoryCard />
          <ThinkingCard class="mt-3" />
        </div>
        <div class="col-lg-3">Publicidad</div>
        <div class="col-lg-2"></div>
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
