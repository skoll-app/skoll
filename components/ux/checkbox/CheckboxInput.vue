<template>
  <ValidationProvider
    tag="div"
    class="p-1"
    :rules="rules"
    :name="name"
    :vid="vid"
    v-slot="{ classes, errors }"
  >
    <div class="form-check" :class="{ 'form-switch': isSwitch }">
      <input
        class="form-check-input"
        :class="classes"
        type="checkbox"
        :value="inputValue"
        v-model="model"
        :checked="checked"
      />
      <label class="form-check-label">{{ $t(label) }}</label>
      <div v-if="errors && errors[0]" class="invalid-feedback">
        {{ errors[0] }}
      </div>
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CheckboxInput',
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
    label: {
      type: String,
    },
    value: {
      type: [String, Object, Array, Boolean],
    },
    inputValue: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    isSwitch: {
      type: Boolean,
      default: false,
    },
    addVeeClasses: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get(): String | Object | Array<any> | Boolean {
        return this.value
      },
      set(value: String | Object | Array<any> | Boolean): void {
        this.$emit('input', value)
      },
    },
  },
})
</script>
