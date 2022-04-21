<template>
  <div>
    <h4 class="mb-5" v-html="$t('recoverview.lastStep')"></h4>
    <p class="mb-5">{{ $t('recoverview.validateEmail') }}</p>
    <h4 v-if="encodedEmail" class="text-center text-lowercase text-muted mb-4">
      {{ encodedEmail }}
    </h4>
    <ValidationObserver tag="form" v-slot="{ invalid }">
      <TextInput
        class="mb-4"
        :name="$t('recoverview.form.email')"
        :placeholder="$t('recoverview.form.enterEmail')"
        rules="required|email"
        size="sm"
        addVeeClasses
        v-model="email"
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
// Components
import TextInput from '../ux/input/TextInput.vue'

export default Vue.extend({
  props: {
    encodedEmail: {
      type: String,
      default: '',
    },
  },
  components: {
    TextInput,
  },
  data: () => ({
    email: '',
  }),
  methods: {
    next() {
      this.$emit('setEmail', this.email)
    },
    prev() {
      this.$emit('prev')
    },
  },
})
</script>

<style scoped></style>
