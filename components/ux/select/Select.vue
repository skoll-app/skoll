<template>
  <ValidationProvider
    :rules="rules"
    :name="name"
    v-slot="{ classes, errors }"
    tag="div"
  >
    <select
      class="form-select"
      :class="inputClasses(classes)"
      :disabled="disabled"
      @change="change"
      v-model="select"
    >
      <option value="">
        {{ name }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :selected="option.selected"
      >
        {{ option.label }}
      </option>
    </select>
    <div v-if="errors && errors[0]" class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// Enums
import Size from '~/enum/size'
// Interfaces
import SelectOption from '~/interfaces/select-option'

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
    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
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
    select: ''
  }),
  computed: {
    sizeClass(): string {
      let sizeClass = ''
      if (this.size === Size.SMALL) {
        sizeClass = 'form-select-sm'
      } else if (this.size === Size.LARGE) {
        sizeClass = 'form-select-lg'
      }
      return sizeClass
    },
  },
  methods: {
    inputClasses(veeClasses: Object): string | Object {
      if (this.addVeeClasses) return { ...veeClasses, [this.sizeClass]: true }
      return { [this.sizeClass]: true }
    },
    change(e: any) {
      const selectedCode = e.target.value
      const option = this.options.find((option) => {
        return selectedCode === option.value
      })
      this.$emit('input', option)
    },
  },
})
</script>

<style lang="scss" scoped>
.invalid-feedback {
  font-size: 12px;
}
</style>
