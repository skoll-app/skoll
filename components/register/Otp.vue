<template>
  <div>
    <h4 class="mb-2" v-html="$t('registerview.newClient')"></h4>
    <p>{{ $t('registerview.enterCode') }}</p>
    <ValidationObserver tag="form" v-slot="{ invalid }">
      <TextInput
        class="mb-2"
        :name="$t('registerview.form.otpCode')"
        :placeholder="$t('registerview.form.otpCode')"
        rules="required|digits:5"
        size="sm"
        addVeeClasses
        v-model="otp"
      />
      <div class="d-flex justify-content-between p-1">
        <button type="button" class="btn btn-primary" @click="prev">
          {{ $t('registerview.form.back') }}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="validateOtp"
          :disabled="invalid"
        >
          {{ $t('registerview.form.continue') }}
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Interfaces
import Toast from '~/interfaces/toast'
// Components
import TextInput from '../ux/input/TextInput.vue'
import Select from '../ux/select/Select.vue'

export default Vue.extend({
  props: {
    sessionId: {
      type: String,
      default: '',
    },
    otp: {
      type: String,
      default: '',
    },
  },
  components: {
    TextInput,
    Select,
  },
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
    async validateOtp() {
      try {
        this.showLoading()
        await this.$axios.post('/security/validate/otp', {
          sessionId: this.sessionId,
          otp: this.otp,
        })
        this.hideLoading()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'Error',
          message: error.response?.data?.message || 'Error en el registro',
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
