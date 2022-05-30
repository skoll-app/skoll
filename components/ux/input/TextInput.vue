<template>
  <ValidationProvider
    tag="div"
    class="p-1"
    :rules="rules"
    :name="name"
    :vid="vid"
    v-slot="{ classes, errors }"
    :class="{ 'input-group': inputGroup, [inputGroupSize]: true }"
  >
    <input
      :type="actualType"
      class="form-control"
      :class="inputClasses(classes)"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="onInput"
    />
    <button
      v-if="inputGroup"
      class="btn btn-primary"
      type="button"
      @click="isPasswordType ? showPassword() : $emit('btnClick')"
    >
      <span v-if="btnText">{{ btnText }}</span>
      <component
        class="icon text-white"
        v-if="icon && !isPasswordType"
        :is="icon"
      />
      <template v-if="isPasswordType">
        <component class="icon text-white" :is="iconLock" />
      </template>
    </button>
    <div v-if="errors && errors[0]" class="invalid-feedback">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'
// enums
import Size from '@/enum/size'
// Icons
import LockIcon from '@/static/assets/icons/lock.svg'
import UnlockIcon from '@/static/assets/icons/unlock.svg'

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
    inputGroup: {
      type: Boolean,
      default: false,
    },
    btnText: {
      type: String,
      default: '',
    },
    icon: { type: Object, default: () => {} },
    isPasswordType: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LockIcon,
    UnlockIcon,
  },
  data: () => ({
    currentValue: '',
    showPasswordFlag: false,
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
    inputGroupSize(): string {
      let sizeClass = ''
      if (this.size === Size.SMALL) {
        sizeClass = 'input-group-sm'
      } else if (this.size === Size.LARGE) {
        sizeClass = 'input-group-lg'
      }
      return sizeClass
    },
    passwordInputType(): string {
      return this.showPasswordFlag ? 'text' : 'password'
    },
    iconLock(): any {
      return this.showPasswordFlag ? UnlockIcon : LockIcon
    },
    actualType(): string {
      return this.isPasswordType
        ? this.showPasswordFlag
          ? 'text'
          : 'password'
        : this.type
    },
  },
  methods: {
    onInput(event: any) {
      this.$emit('input', event.target?.value)
    },
    inputClasses(veeClasses: Object): string | Object {
      if (this.addVeeClasses) return { ...veeClasses, [this.sizeClass]: true }
      return { [this.sizeClass]: true }
    },
    showPassword() {
      this.showPasswordFlag = !this.showPasswordFlag
    },
  },
})
</script>
<style lang="scss" scoped>
.invalid-feedback {
  font-size: 12px;
}
</style>
