<template>
  <div>
    <h4 class="mb-2" v-html="$t('registerview.confirmData')"></h4>
    <ValidationObserver v-slot="{ invalid }">
      <form>
        <TextInput
          class="mb-2"
          :name="$t('registerview.form.name')"
          :placeholder="$t('registerview.form.name')"
          rules="required|alpha_spaces"
          size="sm"
          addVeeClasses
          v-model="register.name"
        />
        <TextInput
          class="mb-2"
          :name="$t('registerview.form.lastname')"
          :placeholder="$t('registerview.form.lastname')"
          rules="required|alpha_spaces"
          size="sm"
          addVeeClasses
          v-model="register.lastname"
        />
        <div class="row">
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.email')"
              :placeholder="$t('registerview.form.email')"
              rules="required|email"
              size="sm"
              addVeeClasses
              v-model="register.email"
            />
          </div>
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.phone')"
              :placeholder="$t('registerview.form.phone')"
              rules="required|digits:10"
              size="sm"
              addVeeClasses
              v-model="register.phone"
            />
          </div>
        </div>
        <TextInput
          class="mb-2"
          :name="$t('registerview.form.password')"
          :placeholder="$t('registerview.form.password')"
          :type="passwordInputType"
          rules="required|password"
          size="sm"
          addVeeClasses
          v-model="register.password"
          inputGroup
          @btnClick="btnAction"
          :btnText="$t(showPasswordText)"
        />
        <div class="row">
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.country')"
              :placeholder="$t('registerview.form.country')"
              rules="required"
              size="sm"
              addVeeClasses
              v-model="register.country"
              disabled
            />
          </div>
          <div class="col-lg-6">
            <Select
              :name="$t('registerview.form.city')"
              :options="selectOptions"
              rules="required"
              class="mb-2"
              size="sm"
              v-model="register.city"
              addVeeClasses
            />
          </div>
        </div>
        <div class="d-flex justify-content-between p-1">
          <NuxtLink to="/auth" class="btn btn-primary">
            {{ $t('registerview.form.back') }}
          </NuxtLink>
          <button
            type="button"
            class="btn btn-primary"
            @click="preRegister"
            :disabled="invalid"
          >
            {{ $t('registerview.form.continue') }}
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Interfaces
import SelectOption from '~/interfaces/select-option'
import Toast from '~/interfaces/toast'
// Components
import TextInput from '../ux/input/TextInput.vue'
import Select from '../ux/select/Select.vue'

export default Vue.extend({
  components: { TextInput, Select },
  data: () => ({
    register: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      country: 'Colombia',
      city: {} as SelectOption,
    },
    selectOptions: [
      { label: 'Arauca', value: 'Arauca' },
      { label: 'Armenia', value: 'Armenia' },
      { label: 'Barranquilla', value: 'Barranquilla' },
      { label: 'Bogotá', value: 'Bogotá' },
      { label: 'Bucaramanga', value: 'Bucaramanga' },
      { label: 'Cali', value: 'Cali' },
      { label: 'Cartagena', value: 'Cartagena' },
      { label: 'Cúcuta', value: 'Cúcuta' },
      { label: 'Florencia', value: 'Florencia' },
      { label: 'Ibagué', value: 'Ibagué' },
      { label: 'Leticia', value: 'Leticia' },
      { label: 'Manizales', value: 'Manizales' },
      { label: 'Medellín', value: 'Medellín' },
      { label: 'Mitú', value: 'Mitú' },
      { label: 'Mocoa', value: 'Mocoa' },
      { label: 'Montería', value: 'Montería' },
      { label: 'Neiva', value: 'Neiva' },
      { label: 'Pasto', value: 'Pasto' },
      { label: 'Pereira', value: 'Pereira' },
      { label: 'Popayán', value: 'Popayán' },
      { label: 'Puerto Carreño', value: 'Puerto Carreño' },
      { label: 'Puerto Inírida', value: 'Puerto Inírida' },
      { label: 'Quibdó', value: 'Quibdó' },
      { label: 'Riohacha', value: 'Riohacha' },
      { label: 'San Andrés', value: 'San Andrés' },
      { label: 'San José del Guaviare', value: 'San José del Guaviare' },
      { label: 'Santa Marta', value: 'Santa Marta' },
      { label: 'Sincelejo', value: 'Sincelejo' },
      { label: 'Tunja', value: 'Tunja' },
      { label: 'Valledupar', value: 'Valledupar' },
      { label: 'Villavicencio', value: 'Villavicencio' },
      { label: 'Yopal', value: 'Yopal' },
    ] as SelectOption[],
    showPassword: false,
    sessionId: '',
  }),

  computed: {
    passwordInputType(): string {
      return this.showPassword ? 'text' : 'password'
    },
    showPasswordText(): string {
      return this.showPassword
        ? 'registerview.hidePassword'
        : 'registerview.showPassword'
    },
  },
  methods: {
    next() {
      this.$emit('next')
    },
    btnAction() {
      this.showPassword = !this.showPassword
    },
    emitUserData() {
      this.$emit('setUser', { ...this.register, sessionId: this.sessionId })
    },
    async preRegister() {
      try {
        this.showLoading()
        const res = await this.$axios.post('/client/hello', {
          cellPhone: this.register.phone,
          cellPhonePrefix: '57',
          city: this.register.city.value,
          email: this.register.email,
          firstname: this.register.lastname,
          lastName: this.register.lastname,
        })
        this.sessionId = res.data.data.sessionId
        this.hideLoading()
        this.emitUserData()
        this.next()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'Error',
          message: error.response.data.message,
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToastWithProps']),
  },
})
</script>

<style scoped></style>
