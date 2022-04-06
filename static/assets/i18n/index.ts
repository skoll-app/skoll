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
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',  // recommended
    detectBrowserLanguage: false
  }
}
export default i18n
