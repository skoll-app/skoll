<template>
  <div>
    <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
      <Confirm @next="next" />
      <Otp @next="next" @prev="prev" />
      <KnowBetter @next="next" @prev="prev" />
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// Components
import Confirm from './Confirm.vue'
import KnowBetter from './KnowBetter.vue'
import Otp from './Otp.vue'

export default Vue.extend({
  components: { Confirm, Otp, KnowBetter },
  data: () => ({
    slickOptions: {
      arrows: false,
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
    },
  }),

  methods: {
    next() {
      // @ts-ignore
      this.$refs.carousel?.next()
    },
    prev() {
      // @ts-ignore
      this.$refs.carousel?.prev()
    },
  },
})
</script>

<style scoped></style>
