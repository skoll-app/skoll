<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      :value="inputValue"
      v-model="model"
      :checked="checked"
    />
    <label class="form-check-label">{{ $t(label) }}</label>
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
