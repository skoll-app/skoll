import Vue from 'vue'

import { ValidationProvider, ValidationObserver, extend, configure } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
  ...required,
})

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    // dirty: ['is-dirty', 'is-dirty']
  }
})
