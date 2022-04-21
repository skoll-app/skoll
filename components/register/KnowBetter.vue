<template>
  <div>
    <h4 class="mb-5" v-html="$t('registerview.letUsKnowYou')"></h4>
    <ValidationObserver tag="form" v-slot="{ invalid }">
      <TextInput
        class="mb-2"
        :name="$t('registerview.form.age')"
        :placeholder="$t('registerview.form.age')"
        rules="required|max:2|numeric"
        size="sm"
        addVeeClasses
        v-model="register.age"
      />
      <Select
        :name="$t('registerview.form.gender')"
        :options="genderOptions"
        rules="required"
        class="mb-2"
        size="sm"
        v-model="register.gender"
        addVeeClasses
      />
      <Select
        :name="$t('registerview.form.interest')"
        :options="interestOptions"
        rules="required"
        class="mb-2"
        size="sm"
        v-model="register.interest"
        addVeeClasses
      />
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-primary" @click="prev">
          {{ $t('registerview.form.back') }}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="registerUser"
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
import SelectOption from '~/interfaces/select-option'
// Components
import TextInput from '../ux/input/TextInput.vue'
import Select from '../ux/select/Select.vue'

export default Vue.extend({
  components: {
    TextInput,
    Select,
  },
  data: () => ({
    register: {
      age: null,
      gender: {} as SelectOption,
      interest: {} as SelectOption,
    },
    genderOptions: [
      { label: 'registerview.form.genderOptions.male', value: 'male' },
      { label: 'registerview.form.genderOptions.female', value: 'female' },
      { label: 'registerview.form.genderOptions.other', value: 'other' },
    ] as SelectOption[],
    interestOptions: [
      { label: 'registerview.form.interestOptions.men', value: 'men' },
      { label: 'registerview.form.interestOptions.women', value: 'women' },
      { label: 'registerview.form.interestOptions.both', value: 'both' },
    ] as SelectOption[],
  }),
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
    registerUser() {
      this.$emit('setUser', this.register)
    },
  },
})
</script>

<style scoped></style>
