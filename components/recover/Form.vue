<template>
  <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
    <Phone @next="generateOTP" />
    <Otp
      title="recoverview.recoverpassword"
      @prev="prev"
      @setOtp="validateOTPAndUser"
    />
    <Email :encodedEmail="encodedEmail" @prev="prev" @setEmail="setEmail" />
    <Password @setPassword="setPassword" @prev="prev" />
  </VueSlickCarousel>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Toast from '~/interfaces/toast'
import Email from './Email.vue'
import Otp from './Otp.vue'
import Password from './Password.vue'
// Components
import Phone from './Phone.vue'

export default Vue.extend({
  components: { Phone, Otp, Email, Password },
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
    password: '',
    error: false,
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
    async generateOTP(event: string) {
      this.phone = event
      try {
        this.showLoading()
        const res = await this.$httpService.auth.generateOTP({ check: event })
        this.sessionId = res.data.data
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
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
        await this.$api.post(
          '/skoll-security-server-api/security/validate/otp',
          {
            sessionId: this.sessionId,
            otp,
          }
        )
        this.hideLoading()
        this.userExist()
      } catch (error: any) {
        this.error = true
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
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
        const res = await this.$api.post(
          '/skoll-security-server-api/security/exist/user',
          {
            username: this.phone,
          }
        )
        this.encodedEmail = res.data.data.info.email
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response.data.message,
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    validateOTPAndUser(otp: string) {
      this.validateOTP(otp)
    },
    setEmail(email: string) {
      this.email = email
      this.validateEmail()
    },
    async validateEmail() {
      try {
        this.showLoading()
        await this.$api.post(
          '/skoll-security-server-api/security/validate/email',
          {
            email: this.email,
            sessionId: this.sessionId,
          }
        )
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response.data.message,
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    setPassword(pwd: string) {
      this.password = pwd
      this.recoverPassword()
    },
    async recoverPassword() {
      try {
        this.showLoading()
        await this.$api.put(
          '/skoll-security-server-api/security/recovery/password',
          {
            password: this.password,
            sessionId: this.sessionId,
          }
        )
        this.hideLoading()
        const toast: Toast = {
          title: 'success',
          message: 'Contraseña cambiada, por favor inicia sesión',
          type: 'success',
          timer: 10000,
        }
        this.showToastWithProps(toast)
        this.$router.push('/auth')
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
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
