<template>
  <div class="row g-0 vh-100">
    <div class="col-md-6">
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="i in 5" :key="i">
          {{ i }}
        </div>
      </VueSlickCarousel>
    </div>
    <div class="col-md-6 bg-image">
      <div class="d-flex flex-column justify-content-center h-100">
        <div class="mx-auto">
          <h4 class="text-end pb-4" v-html="$t('registerview.share')"></h4>
          <img class="img-fluid" src="assets/img/cook.png" alt="cooking" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      slickOptions: {
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
})
</script>

<style scoped lang="scss">
.bg-image {
  background: url('~static/assets/img/bg-register.png') no-repeat var(--bs-blue);
  background-size: cover;

  img {
    max-height: 500px;
  }
}
</style>
