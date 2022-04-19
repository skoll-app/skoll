<template>
  <div class="row g-0 vh-100">
    <div
      class="position-relative col-12 col-lg-6 h-100 d-flex flex-column justify-content-center"
    >
      <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
        <div class="px-5">
          <Form :step="1" @next="showNext" />
        </div>
        <div class="px-5">
          <Form :step="2" @next="showNext" @prev="showPrev" />
        </div>
      </VueSlickCarousel>
      <div class="position-absolute bottom-0 w-100 text-center mb-4">
        {{ $t('registerview.hasAccount') }}
        <NuxtLink class="text-warning" to="/auth">
          {{ $t('registerview.loginHere') }}</NuxtLink
        >
      </div>
    </div>
    <div class="col-lg-6 bg-image d-none d-lg-block">
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
import Form from '~/components/register/Form.vue'

export default Vue.extend({
  components: { Form },
  data() {
    return {
      name: '',
      slickOptions: {
        arrows: false,
        // dots: true,
        // dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
      },
    }
  },
  methods: {
    showNext() {
      // @ts-ignore
      this.$refs.carousel?.next()
    },
    showPrev() {
      // @ts-ignore
      this.$refs.carousel?.prev()
    },
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
