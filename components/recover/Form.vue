<template>
  <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
    <Phone @next="generateOTP" />
    <div>segundo</div>
  </VueSlickCarousel>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Toast from '~/interfaces/toast'
// Components
import Phone from './Phone.vue'

export default Vue.extend({
  components: { Phone },
  data: () => ({
    slickOptions: {
      arrows: false,
      edgeFriction: 0.35,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: false,
    },
    sessionId: '',
  }),
  methods: {
    next() {
      // @ts-ignore
      this.$refs.carousel.next()
    },
    prev() {
      // @ts-ignore
      this.$refs.carousel.prev()
    },
    async generateOTP(event: any) {
      try {
        this.showLoading()
        const res = await this.$axios.post('/security/generate/otp', {
          check: event,
        })
        this.sessionId = res.data.data.sessionId
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'Error',
          message: error.response.data.message,
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToastWithProps']),
  },
})
</script>

<style scoped></style>
