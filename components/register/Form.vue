<template>
  <div>
    <h2 class="mb-4" v-html="$t(stepTitle)"></h2>
    <template v-if="step === 1">
      <ValidationObserver v-slot="{}">
        <form>
          <TextInput
            class="mb-3"
            :name="$t('registerview.form.name')"
            :placeholder="$t('registerview.form.name')"
            rules="required"
            size="sm"
            addVeeClasses
            v-model="register.name"
          />
          <TextInput
            class="mb-3"
            :name="$t('registerview.form.lastname')"
            :placeholder="$t('registerview.form.lastname')"
            rules="required"
            size="sm"
            addVeeClasses
            v-model="register.lastname"
          />
          <div class="row">
            <div class="col-lg-6">
              <TextInput
                class="mb-3"
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
                class="mb-3"
                :name="$t('registerview.form.phone')"
                :placeholder="$t('registerview.form.phone')"
                rules="required"
                size="sm"
                addVeeClasses
                v-model="register.phone"
              />
            </div>
          </div>
          <TextInput
            class="mb-3"
            :name="$t('registerview.form.password')"
            :placeholder="$t('registerview.form.password')"
            rules="required"
            size="sm"
            addVeeClasses
            v-model="register.password"
          />
          <TextInput
            class="mb-3"
            :name="$t('registerview.form.country')"
            :placeholder="$t('registerview.form.country')"
            rules="required"
            size="sm"
            addVeeClasses
            v-model="register.country"
            disabled
          />
          <ValidationProvider
            rules="required"
            :name="$t('registerview.form.city')"
            v-slot="{ classes, errors }"
            class="input-group has-validation mb-3"
            tag="div"
          >
            <select class="form-select form-select-sm" :class="classes">
              <option value="">{{ $t('registerview.form.city') }}</option>
              <option value="Arauca">Arauca</option>
              <option value="Armenia">Armenia</option>
              <option value="Barranquilla">Barranquilla</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Bucaramanga">Bucaramanga</option>
              <option value="Cali">Cali</option>
              <option value="Cartagena">Cartagena</option>
              <option value="Cúcuta">Cúcuta</option>
              <option value="Florencia">Florencia</option>
              <option value="Ibagué">Ibagué</option>
              <option value="Leticia">Leticia</option>
              <option value="Manizales">Manizales</option>
              <option value="Medellín">Medellín</option>
              <option value="Mitú">Mitú</option>
              <option value="Mocoa">Mocoa</option>
              <option value="Montería">Montería</option>
              <option value="Neiva">Neiva</option>
              <option value="Pasto">Pasto</option>
              <option value="Pereira">Pereira</option>
              <option value="Popayán">Popayán</option>
              <option value="Puerto Carreño">Puerto Carreño</option>
              <option value="Puerto Inírida">Puerto Inírida</option>
              <option value="Quibdó">Quibdó</option>
              <option value="Riohacha">Riohacha</option>
              <option value="San Andrés">San Andrés</option>
              <option value="San José del Guaviare">
                San José del Guaviare
              </option>
              <option value="Santa Marta">Santa Marta</option>
              <option value="Sincelejo">Sincelejo</option>
              <option value="Tunja">Tunja</option>
              <option value="Valledupar">Valledupar</option>
              <option value="Villavicencio">Villavicencio</option>
              <option value="Yopal">Yopal</option>
            </select>
            <div v-if="errors && errors[0]" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
          <div class="d-flex justify-content-between">
            <NuxtLink to="/auth" class="btn btn-primary">
              {{ $t('registerview.form.back') }}
            </NuxtLink>
            <button type="button" class="btn btn-primary" @click="next">
              {{ $t('registerview.form.continue') }}
            </button>
          </div>
        </form>
      </ValidationObserver>
    </template>
    <template v-if="step === 2">
      <p>{{ $t('registerview.enterCode') }}</p>
      <ValidationObserver tag="form" v-slot="{ invalid }">
        <form>
          <ValidationProvider
            rules="required|email"
            :name="$t('registerview.form.email')"
            v-slot="{ classes, errors }"
            tag="div"
            class="input-group has-validation mb-3"
          >
            <input
              type="email"
              class="form-control form-control-sm"
              :class="classes"
              :placeholder="$t('registerview.form.email')"
              v-model="register.confirmEmail"
            />
            <div v-if="errors && errors[0]" class="invalid-feedback">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary" @click="prev">
              {{ $t('registerview.form.back') }}
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="next"
              :disabled="invalid"
            >
              {{ $t('registerview.form.continue') }}
            </button>
          </div>
        </form>
      </ValidationObserver>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextInput from '../ux/input/TextInput.vue'

export default Vue.extend({
  components: { TextInput },
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    register: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      country: 'Colombia',
      confirmEmail: ''
    },
  }),
  computed: {
    stepTitle(): string {
      if (this.step === 1) {
        return 'registerview.confirmData'
      }
      if (this.step === 2) {
        return 'registerview.newClient'
      }
      return 'registerview.confirmData'
    },
  },
  methods: {
    next() {
      console.log(this.register)
      // this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
  },
})
</script>

<style scoped></style>
