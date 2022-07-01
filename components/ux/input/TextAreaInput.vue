<template>
  <ValidationProvider
    tag="div"
    class="p-1"
    :rules="rules"
    :name="name"
    :vid="vid"
    v-slot="{ classes, errors }"
  >
    <textarea
      :class="classes"
      class="form-control"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="onInput"
    ></textarea>
    <div v-if="errors && errors[0]" class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    rules: {
      type: [String, Object],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    vid: {
      type: String,
      default: undefined,
    },
    addVeeClasses: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 3,
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(event: any) {
      this.$emit('input', event.target?.value)
    },
  },
})
</script>

<style scoped lang="scss">
.invalid-feedback {
  font-size: 12px;
}
</style>
