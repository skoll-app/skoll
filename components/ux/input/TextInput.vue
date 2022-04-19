<template>
  <ValidationProvider
    tag="div"
    :rules="rules"
    :name="name"
    :vid="vid"
    v-slot="{ classes, errors }"
  >
    <input
      :type="type"
      class="form-control"
      :class="inputClasses(classes)"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="onInput"
    />
    <div v-if="errors && errors[0]" class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'
// enums
import Size from '@/enum/size'

export default Vue.extend({
  name: 'TextInput',
  props: {
    value: {
      type: String,
      default: '',
    },
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
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    addVeeClasses: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    currentValue: '',
  }),
  computed: {
    sizeClass(): string {
      let sizeClass = ''
      if (this.size === Size.SMALL) {
        sizeClass = 'form-control-sm'
      } else if (this.size === Size.LARGE) {
        sizeClass = 'form-control-lg'
      }
      return sizeClass
    },
  },
  methods: {
    onInput(event: any) {
      this.$emit('input', event.target?.value);
    },
    inputClasses(veeClasses: Object): string | Object {
      if (this.addVeeClasses) return { ...veeClasses, [this.sizeClass]: true }
      return { [this.sizeClass]: true }
    },
  },
})
</script>
<style lang="scss" scoped>
.invalid-feedback {
  font-size: 12px;
}
</style>
