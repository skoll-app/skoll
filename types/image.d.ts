import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare module 'vue/types/vue' {
  interface Vue {
    $addErrorImg: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $addErrorImg: NuxtAxiosInstance
  }

  interface Context {
    $addErrorImg: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $addErrorImg: NuxtAxiosInstance
  }
}

