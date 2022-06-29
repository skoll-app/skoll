import Vue from 'vue'

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
  localize,
} from 'vee-validate'
import {
  required,
  email,
  digits,
  alpha_spaces,
  max,
  numeric,
  confirmed
} from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import es from 'vee-validate/dist/locale/es.json'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('required', required)
extend('email', email)
extend('digits', digits)
extend('alpha_spaces', alpha_spaces)
extend('max', max)
extend('numeric', numeric)
extend('confirmed', confirmed)

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
  configure({
    defaultMessage: (field, values) => {
      // override the field name.
      // values._field_ = i18n.t(`fields.${field}`)
      return app.i18n.t(`validation.${values._rule_}`, values)
    },
  })
  extend('password', (value) => {
    let pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    if (pattern.test(value)) {
      return true
    }
    return app.i18n.t('passwordValidation')
  })
}
