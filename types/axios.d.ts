import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
    $api: NuxtAxiosInstance
    $apiAuth: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance
    $api: NuxtAxiosInstance
    $apiAuth: NuxtAxiosInstance
  }

  interface Context {
    $axios: NuxtAxiosInstance
    $api: NuxtAxiosInstance
    $apiAuth: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $axios: NuxtAxiosInstance
    $api: NuxtAxiosInstance
    $apiAuth: NuxtAxiosInstance
  }
}
