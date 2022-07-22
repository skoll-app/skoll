<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h4 class="mb-3" v-html="$t('configview.editProfile.title')"></h4>
        <div class="d-flex align-items-center flex-column mb-3">
          <div class="d-flex flex-column align-items-center">
            <img
              height="150"
              width="150"
              :src="user.logo"
              :alt="user.logo"
              class="mb-2 img-profile"
            />
            <p class="mb-0 text-danger">
              <small>{{ $t('configview.editProfile.maxSize') }}</small>
            </p>
            <p>
              <small>{{ $t('configview.editProfile.extensions') }}</small>
            </p>
          </div>
          <div class="d-flex">
            <input
              type="file"
              name=""
              id="input_file"
              accept="image/*"
              ref="file"
              @change="changeFile"
              hidden
            />
            <button
              type="button"
              class="btn btn-outline-secondary me-2"
              @click="openFile"
            >
              {{ $t('configview.editProfile.changeProfileImg') }}
            </button>
            <button type="button" class="btn btn-danger">
              <TrashIcon class="icon text-white" />
            </button>
          </div>
        </div>
        <ValidationObserver v-slot="{ invalid }">
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
                v-model="city"
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
                v-model="gender"
                addVeeClasses
              />
            </div>
            <div class="col-md-4">
              <Select
                :name="$t('registerview.form.interest')"
                :options="interestOptions"
                rules="required"
                class="mb-2"
                v-model="interesGender"
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
                v-model="identification.type"
              />
            </div>
            <div class="col-lg-6">
              <TextInput
                class="mb-2"
                :name="$t('registerview.form.document')"
                :placeholder="$t('registerview.form.document')"
                rules="required|numeric"
                addVeeClasses
                v-model="identification.number"
              />
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-success"
              :disabled="invalid"
              @click="saveUserData"
            >
              {{ $t('form.save') }}
            </button>
          </div>
        </ValidationObserver>
      </div>
    </div>
    <modal name="crop-profile-img" :width="'40%'" :height="'80%'">
      <div
        class="d-flex flex-column justify-content-center align-items-center p-4 rounded-cropper"
      >
        <vue-cropper
          class="vue-cropper"
          ref="cropper"
          :src="imgSrc"
          :aspect-ratio="1"
          preview=".preview"
          drag-mode="crop"
          :min-crop-box-width="100"
          :min-crop-box-height="100"
          :crop-box-resizable="false"
          :view-mode="3"
          :background="false"
        >
        </vue-cropper>

        <button type="button" class="btn btn-primary mt-2" @click="crop">
          Recortar foto
        </button>
      </div>
    </modal>
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
import Toast from '~/interfaces/toast'
import User from '~/interfaces/user'
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
    user: {} as any,
    city: {} as SelectOption,
    gender: {} as SelectOption,
    interesGender: {} as SelectOption,
    identification: {} as any,
    profileImg: '',
    imgSrc: '',
  }),
  async asyncData({ $httpService }) {
    try {
      const userData = await $httpService.auth.userData()
      const user = userData.data.data
      return {
        user,
      }
    } catch (error) {
      return {}
    }
  },
  beforeMount() {
    this.formatFields()
    this.setUser(this.user)
  },
  methods: {
    async saveUserData() {
      let formattedUser: User = {
        ...this.user,
        address: {
          zip_code: 'zip_code',
          id: 'id',
          street_name: 'str',
          street_number: 'str_n',
        },
        gender: this.gender.value,
        identification: {
          type: this.identification.type.value,
          number: this.identification.number,
        },
        interesGender: this.interesGender.value,
        cityName: this.city.value,
        lat: 0,
        lon: 0,
      }
      try {
        this.showLoading()
        await this.$httpService.user.updateData(formattedUser)
        this.hideLoading()
        const toast: Toast = {
          title: 'success',
          message: 'configview.profileUpdated',
          type: 'success',
          timer: 3000,
        }
        this.showToastWithProps(toast)
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.message,
          type: 'danger',
          timer: 3000,
        }
        this.showToastWithProps(toast)
      }
    },
    formatFields() {
      const user = { ...this.user }
      const { cityName, gender, interesGender, identification } = user
      this.city = { label: cityName, value: cityName }
      this.gender = { label: gender, value: gender }
      this.interesGender = {
        label: interesGender,
        value: interesGender,
      }
      this.identification = {
        type: {
          label: identification.type,
          value: identification.type,
        },
        number: identification.number,
      }
    },
    openFile() {
      document.getElementById('input_file')!.click()
    },
    changeFile() {
      // @ts-ignore
      this.profileImg = this.$refs.file.files[0]
      // @ts-ignore
      const imgValue = this.$refs.file.value
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i
      if (!allowedExtensions.exec(imgValue)) {
        const toast: Toast = {
          title: 'error',
          message: 'configview.editProfile.invalidExt',
          type: 'danger',
          timer: 6000,
        }
        this.showToastWithProps(toast)
        this.profileImg = ''
        return false
      } else {
        this.submitFileToCut()
      }
    },
    crop() {
      // @ts-ignore
      this.$refs.cropper
        // @ts-ignore
        .getCroppedCanvas({
          width: 200,
          height: 200,
        })
        .toBlob((blob: any) => {
          const formData = new FormData()
          formData.append('file', blob, 'avatar.png')
          formData.append('description', 'avatar')
          this.submitProfilePic(formData)
        }, 'image/png')
    },
    async submitProfilePic(formData: any) {
      try {
        // @ts-ignore
        this.$modal.hide('crop-profile-img')
        this.showLoading()
        const headers = { 'Content-Type': 'multipart/form-data' }
        await this.$apiAuth.post(
          '/skoll-register-server-api/client/update/logo',
          formData,
          {
            headers,
          }
        )
        this.hideLoading()
        location.reload()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response.data.message,
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    async submitFileToCut() {
      try {
        this.showLoading()
        const formData = new FormData()
        formData.append('file', this.profileImg)
        const response = await this.$httpService.utils.uploadImageToCut(
          formData
        )
        this.imgSrc = response.data.data
        // @ts-ignore
        this.$modal.show('crop-profile-img')
        this.hideLoading()
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response.data.message,
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    ...mapActions('user', ['setUser']),
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToastWithProps']),
  },
})
</script>

<style scoped lang="scss">
.vue-cropper {
  max-height: 80%;
  max-width: 100%;
  width: 300px;
}

.img-profile {
  border-radius: 50%;
}
</style>
