<template>
  <div>
    <h4 class="mb-2" v-html="$t('commerceview.managerStep.title')"></h4>
    <p>{{ $t('commerceview.managerStep.description') }}</p>
    <ValidationObserver v-slot="{ invalid }" tag="form">
      <div class="row">
        <div class="col-12 col-md-6">
          <TextInput
            class="mb-2"
            :name="$t('form.name')"
            :placeholder="$t('form.name')"
            rules="required|alpha_spaces"
            size="sm"
            addVeeClasses
            v-model="manager.name"
          />
        </div>
        <div class="col-12 col-md-6">
          <TextInput
            class="mb-2"
            :name="$t('form.name')"
            :placeholder="$t('form.lastname')"
            rules="required|alpha_spaces"
            size="sm"
            addVeeClasses
            v-model="manager.lastname"
          />
        </div>
        <div class="col-12 col-md-6">
          <TextInput
            class="mb-2"
            :name="$t('form.email')"
            :placeholder="$t('form.email')"
            rules="required|email"
            size="sm"
            addVeeClasses
            v-model="manager.email"
          />
        </div>
        <div class="col-12 col-md-6">
          <TextInput
            class="mb-2"
            :name="$t('form.phone')"
            :placeholder="$t('form.phone')"
            rules="required|digits:10"
            size="sm"
            addVeeClasses
            v-model="manager.phone"
          />
        </div>
        <div class="col-12 col-md-6">
          <TextInput
            class="mb-2"
            :name="$t('form.phone')"
            :placeholder="$t('form.phone')"
            rules="required"
            disabled
            size="sm"
            v-model="manager.country"
          />
        </div>
        <div class="col-12 col-md-6">
          <Select
            :name="$t('form.city')"
            :options="departments"
            class="mb-2"
            size="sm"
            v-model="manager.city"
            addVeeClasses
            :withI18n="false"
            rules="required"
          />
        </div>
        <div class="col-12 col-md-6">
          <TextInput
            class="mb-2"
            :name="$t('form.password')"
            :placeholder="$t('form.password')"
            rules="required|password"
            size="sm"
            addVeeClasses
            inputGroup
            isPasswordType
            v-model="manager.password"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <CheckboxInput
            :name="$t('commerceview.managerStep.iAm')"
            class="mb-3"
            inputValue="profile"
            label="commerceview.managerStep.iAm"
            :rules="{ required: { allowFalse: false } }"
            addVeeClasses
            v-model="manager.iAm"
          />
        </div>
      </div>
      <div class="d-flex justify-content-between p-1">
        <NuxtLink to="/auth" class="btn btn-primary">
          {{ $t('form.back') }}
        </NuxtLink>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="invalid"
          @click="next"
        >
          {{ $t('form.continue') }}
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextInput from '~/components/ux/input/TextInput.vue'
import Select from '~/components/ux/select/Select.vue'
import CheckboxInput from '~/components/ux/checkbox/CheckboxInput.vue'
import SelectOption from '~/interfaces/select-option'

export default Vue.extend({
  components: {
    TextInput,
    Select,
    CheckboxInput,
  },
  data: () => ({
    manager: {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      city: {} as SelectOption,
      country: 'Colombia',
      iAm: false,
    },
    departments: [] as SelectOption[],
  }),
  beforeMount() {
    this.parseDepartments()
  },
  methods: {
    async parseDepartments() {
      try {
        const response = await this.$httpService.utils.departments()
        const departments = response.data.data.colombia.departments
        this.departments = departments.map((item: any) => {
          return { label: item.name, value: item.id }
        })
      } catch (error) {
        this.departments = [
          { label: 'Bogotá', value: '10000' }
        ]
      }
    },
    next() {
      console.log(this.manager)
    },
  },
})
</script>

<style scoped></style>
