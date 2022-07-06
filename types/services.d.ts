import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $httpService: HttpService
  }
}

interface HttpService {
  auth: LoginService
}

interface LoginService {
  login<T = any>(username: string, password: string): Promise<T>
}
