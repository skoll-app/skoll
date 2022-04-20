<template>
  <div>
    <h4 class="mb-2" v-html="$t(title)"></h4>
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
          @click="next"
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
// Components
import TextInput from '../ux/input/TextInput.vue'
import Select from '../ux/select/Select.vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  components: {
    TextInput,
    Select,
  },
  data: () => ({
    otp: '',
  }),
  methods: {
    next() {
      this.$emit('next')
      this.$emit('setOtp', this.otp)
    },
    prev() {
      this.$emit('prev')
    },
  },
})
</script>

<style scoped></style>
