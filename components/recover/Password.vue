<template>
  <div>
    <h4 class="mb-5" v-html="$t('recoverview.changePassword')"></h4>
    <p>{{ $t('recoverview.form.enterPassword') }}</p>
    <ValidationObserver tag="form" v-slot="{ invalid }">
      <TextInput
        class="mb-5"
        :name="$t('recoverview.form.password')"
        :placeholder="$t('recoverview.form.password')"
        :type="passwordInputType"
        rules="required|password"
        size="sm"
        addVeeClasses
        v-model="password"
        inputGroup
        @btnClick="btnAction"
        :btnText="$t(showPasswordText)"
      />
      <div class="d-flex justify-content-between p-1">
        <button type="button" class="btn btn-primary" @click="prev">
          {{ $t('recoverview.form.back') }}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="invalid"
          @click="next"
        >
          {{ $t('recoverview.form.continue') }}
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextInput from '../ux/input/TextInput.vue'

export default Vue.extend({
  components: { TextInput },
  data: () => ({
    password: '',
    showPassword: false,
  }),
  computed: {
    passwordInputType(): string {
      return this.showPassword ? 'text' : 'password'
    },
    showPasswordText(): string {
      return this.showPassword
        ? 'registerview.hidePassword'
        : 'registerview.showPassword'
    },
  },
  methods: {
    btnAction() {
      this.showPassword = !this.showPassword
    },
    next() {
      this.$emit('setPassword', this.password)
    },
    prev() {
      this.$emit('prev')
    },
  },
})
</script>

<style scoped></style>
