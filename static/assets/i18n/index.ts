import es from './es'
import en from './en'

const messages = { es, en }

const i18n = {
  strategy: 'no_prefix',
  locales: ['en', 'es'],
  defaultLocale: 'es',
  vueI18n: {
    fallbackLocale: 'es',
    messages: messages,
  },
}
export default i18n
