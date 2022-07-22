<template>
  <div>
    <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
      <Confirm @next="next" @setUser="setUser" />
      <Otp title="registerview.newClient" @prev="prev" @setOtp="validateOtp" />
      <KnowBetter @prev="prev" @setUser="setUserAndGenerateOtp" />
      <Otp
        title="registerview.almostFinish"
        @prev="prev"
        @setOtp="validateAndRegister"
      />
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Interfaces
import Toast from '~/interfaces/toast'
import User from '~/interfaces/user'
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
      swipe: false,
    },
    user: {} as any,
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
    setUser(event: any) {
      this.user = { ...this.user, ...event }
    },
    async validateOtp(otp: string) {
      try {
        this.showLoading()
        await this.$httpService.auth.validateOTP({
          sessionId: this.user.sessionId,
          otp,
        })
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response?.data?.message || 'Error en el registro',
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    async generateOTP() {
      try {
        this.showLoading()
        await this.$httpService.auth.generateOTP({
          sessionId: this.user.sessionId,
          check: 'verifyUser',
        })
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response?.data?.message || 'Error en el registro',
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    async registerUser() {
      try {
        this.showLoading()
        const user: Partial<User> = {
          age: this.user.age,
          gender: this.user.gender.value,
          interesGender: this.user.interest.value,
        }
        await this.$httpService.user.signup(
          user,
          this.user.password,
          this.user.sessionId
        )
        this.hideLoading()
        const toast: Toast = {
          title: 'success',
          message: 'Registrado',
          type: 'success',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response?.data?.message || 'Error en el registro',
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    validateAndRegister(event: any) {
      this.validateOtp(event)
      this.registerUser()
    },
    setUserAndGenerateOtp(event: any) {
      this.setUser(event)
      this.generateOTP()
    },
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToastWithProps']),
  },
})
</script>

<style scoped></style>
