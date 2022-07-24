<template>
  <div>
    <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
      <Manager />
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Manager from './Manager.vue'

export default Vue.extend({
  components: { Manager },
  data: () => ({
    slickOptions: {
      arrows: false,
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      swipe: false,
    },
  }),
})
</script>

<style scoped></style>
