<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.editProfile')"></h4>
      <ValidationObserver v-slot="{}">
        <div class="row">
          <div class="col-12 col-md-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.name')"
              :placeholder="$t('registerview.form.name')"
              rules="required|alpha_spaces"
              addVeeClasses
              v-model="register.name"
            />
          </div>
          <div class="col-12 col-md-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.lastname')"
              :placeholder="$t('registerview.form.lastname')"
              rules="required|alpha_spaces"
              addVeeClasses
              v-model="register.lastname"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.email')"
              :placeholder="$t('registerview.form.email')"
              rules="required|email"
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
              addVeeClasses
              v-model="register.phone"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.password')"
              :placeholder="$t('registerview.form.password')"
              type="password"
              rules="required|password"
              addVeeClasses
              inputGroup
              isPasswordType
              v-model="register.password"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.country')"
              :placeholder="$t('registerview.form.country')"
              rules="required"
              addVeeClasses
              v-model="register.country"
            />
          </div>
          <div class="col-lg-6">
            <Select
              :name="$t('registerview.form.city')"
              :options="selectOptions"
              rules="required"
              class="mb-2"
              addVeeClasses
              v-model="register.city"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.age')"
              :placeholder="$t('registerview.form.age')"
              rules="required|max:2|numeric"
              addVeeClasses
              v-model="register.age"
            />
          </div>
          <div class="col-md-4">
            <Select
              :name="$t('registerview.form.gender')"
              :options="genderOptions"
              rules="required"
              class="mb-2"
              v-model="register.gender"
              addVeeClasses
            />
          </div>
          <div class="col-md-4">
            <Select
              :name="$t('registerview.form.interest')"
              :options="interestOptions"
              rules="required"
              class="mb-2"
              v-model="register.interest"
              addVeeClasses
            />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <Select
              :name="$t('registerview.form.documentType')"
              :options="documentTypeOptions"
              rules="required"
              class="mb-2"
              addVeeClasses
              v-model="register.documentType"
            />
          </div>
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.document')"
              :placeholder="$t('registerview.form.document')"
              rules="required|numeric"
              addVeeClasses
              v-model="register.document"
            />
          </div>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// Components
import TextInput from '~/components/ux/input/TextInput.vue'
import Select from '~/components/ux/select/Select.vue'
// Interfaces
import SelectOption from '~/interfaces/select-option'

export default Vue.extend({
  components: { TextInput, Select },
  layout: 'config',
  data: () => ({
    register: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      country: 'Colombia',
      city: {} as SelectOption,
      age: null,
      gender: {} as SelectOption,
      interest: {} as SelectOption,
      documentType: {} as SelectOption,
      document: ''
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
    documentTypeOptions: [
      {
        label: 'registerview.form.documentTypeList.CC',
        value: 'CC',
      },
      {
        label: 'registerview.form.documentTypeList.CE',
        value: 'CE',
      },
      {
        label: 'registerview.form.documentTypeList.NIT',
        value: 'NIT',
      },
      {
        label: 'registerview.form.documentTypeList.PAP',
        value: 'PAP',
      },
      {
        label: 'registerview.form.documentTypeList.NIP',
        value: 'NIP',
      },
    ] as SelectOption[],
  }),
})
</script>

<style scoped></style>
