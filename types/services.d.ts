import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $httpService: HttpService
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $httpService: HttpService
  }

  interface Context {
    $httpService: HttpService
  }
}

interface HttpService {
  auth: LoginService
  posts: PostService
}

interface LoginService {
  login<T = any>(username: string, password: string): Promise<T>
}

interface PostService {
  getAll<T = any>({ page, size }: { page: number; size: number }): Promise<T>
}
