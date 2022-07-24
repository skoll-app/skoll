<template>
  <div class="p-1">
    <div class="form-check" :class="{ 'form-switch': isSwitch }">
      <input
        class="form-check-input"
        type="checkbox"
        :value="inputValue"
        v-model="model"
        :checked="checked"
      />
      <label class="form-check-label">{{ $t(label) }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    value: {
      type: Array,
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
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
