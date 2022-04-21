<template>
  <div>
    <h4 class="mb-5" v-html="$t('recoverview.recoverpassword')"></h4>
    <p v-html="$t('recoverview.enterPhoneNumber')"></p>
    <ValidationObserver tag="form" v-slot="{ invalid }">
      <TextInput
        class="mb-4"
        :name="$t('recoverview.form.phoneNumber')"
        :placeholder="$t('recoverview.form.phoneNumber')"
        rules="required|digits:10"
        size="sm"
        addVeeClasses
        v-model="phone"
      />
      <div class="d-flex justify-content-between p-1">
        <NuxtLink to="/auth" class="btn btn-primary">
          {{ $t('recoverview.form.back') }}
        </NuxtLink>
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
    phone: '',
  }),
  methods: {
    next() {
      this.$emit('next', this.phone)
    },
  },
})
</script>

<style scoped></style>
