import i18n from './static/i18n'

const baseHref = '/skoll/'
const isDevelop = false

export default {
  target: 'static',
  router: {
    base: baseHref,
    middleware: ['stats'],
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'skoll',
    htmlAttrs: {
      lang: 'es',
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
        href: baseHref + 'favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/assets/css/styles.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/vue-slick-carousel.js',
    { src: '~/plugins/bootstrap.bundle.min', mode: 'client' },
    '~/plugins/api.js',
    '~/plugins/filters.js',
    '~plugins/vue-js-modal.js',
    // { src: '~/plugins/vue-cropper', ssr: false }
  ],

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
    'cookie-universal-nuxt',
    '@nuxtjs/dotenv',
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['user'],
      },
    ],
  ],
  i18n: i18n,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate'],
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  router: {
    linkActiveClass: 'active',
  },

  loading: {
    color: 'white',
    height: '3px',
  },
}
