import Vue from 'vue'

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  localize,
} from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import es from 'vee-validate/dist/locale/es.json'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', required)
extend('email', email)

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

export default ({ app }) => {
  localize(app.$cookies.get('i18n_redirected'))
}
