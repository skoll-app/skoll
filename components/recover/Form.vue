<template>
  <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
    <Phone @next="generateOTP" />
    <Otp
      title="recoverview.recoverpassword"
      @prev="prev"
      @setOtp="validateOTPAndUser"
    />
    <Email :encodedEmail="encodedEmail" @setEmail="setEmail" />
  </VueSlickCarousel>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Toast from '~/interfaces/toast'
import Email from './Email.vue'
import Otp from './Otp.vue'
// Components
import Phone from './Phone.vue'

export default Vue.extend({
  components: { Phone, Otp, Email },
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
    phone: '',
    encodedEmail: '',
    email: '',
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
      this.phone = event
      try {
        this.showLoading()
        const res = await this.$axios.post('/security/generate/otp', {
          check: event,
        })
        this.sessionId = res.data.data
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
    async validateOTP(otp: any) {
      try {
        this.showLoading()
        await this.$axios.post('/security/validate/otp', {
          sessionId: this.sessionId,
          otp,
        })
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
    async userExist() {
      try {
        this.showLoading()
        const res = await this.$axios.post('/security/exist/user', {
          username: this.phone,
        })
        this.encodedEmail = res.data.data.info.email
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
    validateOTPAndUser(otp: string) {
      this.validateOTP(otp)
      this.userExist()
    },
    setEmail(email: string) {
      this.email = email
      this.validateEmail()
    },
    async validateEmail() {
      try {
        const res = await this.$axios.post('/security/validate/email', {
          email: this.email,
          sessionId: this.sessionId,
        })
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'Error',
          message: error.response.message,
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
