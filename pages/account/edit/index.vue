<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.editProfile')"></h4>
      <div class="d-flex align-items-center flex-column mb-3">
        <img
          height="150"
          width="150"
          :src="user.logo"
          :alt="user.logo"
          class="mb-2"
        />
        <div class="d-flex">
          <button type="button" class="btn btn-outline-secondary me-2">
            {{ $t('configview.changeProfileImg') }}
          </button>
          <button type="button" class="btn btn-danger">
            <TrashIcon class="icon text-white" />
          </button>
        </div>
      </div>
      <ValidationObserver v-slot="{}">
        <div class="row">
          <div class="col-12 col-md-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.name')"
              :placeholder="$t('registerview.form.name')"
              rules="required|alpha_spaces"
              addVeeClasses
              v-model="user.firstName"
            />
          </div>
          <div class="col-12 col-md-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.lastname')"
              :placeholder="$t('registerview.form.lastname')"
              rules="required|alpha_spaces"
              addVeeClasses
              v-model="user.lastName"
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
              v-model="user.email"
            />
          </div>
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.phone')"
              :placeholder="$t('registerview.form.phone')"
              rules="required|digits:10"
              addVeeClasses
              v-model="user.cellPhone"
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
              disabled
              v-model="country"
            />
          </div>
          <div class="col-lg-6">
            <Select
              :name="$t('registerview.form.city')"
              :options="selectOptions"
              rules="required"
              class="mb-2"
              addVeeClasses
              v-model="user.cityName"
              :withI18n="false"
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
              v-model="user.age"
            />
          </div>
          <div class="col-md-4">
            <Select
              :name="$t('registerview.form.gender')"
              :options="genderOptions"
              rules="required"
              class="mb-2"
              v-model="user.gender"
              addVeeClasses
            />
          </div>
          <div class="col-md-4">
            <Select
              :name="$t('registerview.form.interest')"
              :options="interestOptions"
              rules="required"
              class="mb-2"
              v-model="user.interesGender"
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
              v-model="user.identification.type"
            />
          </div>
          <div class="col-lg-6">
            <TextInput
              class="mb-2"
              :name="$t('registerview.form.document')"
              :placeholder="$t('registerview.form.document')"
              rules="required|numeric"
              addVeeClasses
              v-model="user.identification.number"
            />
          </div>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Components
import TextInput from '~/components/ux/input/TextInput.vue'
import Select from '~/components/ux/select/Select.vue'
// Interfaces
import SelectOption from '~/interfaces/select-option'
// Icons
import TrashIcon from '~/static/assets/icons/trash.svg'

export default Vue.extend({
  components: { TextInput, Select, TrashIcon },
  layout: 'config',
  data: () => ({
    country: 'Colombia',
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
    user: {},
  }),
  async asyncData(context) {
    let userData = null
    try {
      userData = await context.$apiAuth.get('/client/')
      return { user: userData.data.data }
    } catch (error) {
      return {}
    }
  },
  beforeMount() {
    this.setUser(this.user)
  },
  methods: {
    ...mapActions('user', ['setUser']),
  },
})
</script>

<style scoped></style>
