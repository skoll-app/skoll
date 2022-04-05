import i18n from './static/assets/i18n'

const baseURL = '/skoll/'
const isDevelop = process.env.NODE_ENV === 'development'

export default {
  target: 'static',
  router: {
    base: isDevelop ? '' : baseURL,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skoll',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: (isDevelop ? '/' : baseURL) + 'favicon.ico',
      },
    ],
    script: [
      {
        src: (isDevelop ? '/' : baseURL) + 'assets/js/bootstrap.bundle.min.js',
        type: 'text/javascript',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/static/assets/css/bootstrap.min.css' },
    { src: '~/static/assets/css/style.css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    '@nuxtjs/i18n',
  ],
  i18n: i18n,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
