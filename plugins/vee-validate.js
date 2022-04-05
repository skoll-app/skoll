import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  localize
} from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import es from 'vee-validate/dist/locale/es.json'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', required)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
})

localize({
  en,
  es,
})

// localize('es')
