import Vue from 'vue'
import User from '../interfaces/user'

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
  auth: AuthService
  posts: PostService
  utils: UtilsService
  user: UserService
}

interface AuthService {
  login<T = any>(username: string, password: string): Promise<T>
  userExists<T = any>({ username }: { username: string }): Promise<T>
  updatePassword<T = any>({
    newPassword,
    password,
  }: {
    newPassword: string
    password: string
  }): Promise<T>
  userData<T = any>(): Promise<T>
}

interface PostService {
  get<T = any>(): Promise<T>
  getAll<T = any>({ page, size }: { page: number; size: number }): Promise<T>
  uploadImage<T = any>(formdata: FormData): Promise<T>
  deleteById<T = any>(id: string): Promise<T>
}

interface UtilsService {
  uploadImageToCut<T = any>(formdata: FormData): Promise<T>
}

interface UserService {
  updateData<T = any>(formattedUser: User): Promise<T>
  updateLogo<T = any>(formdata: FormData): Promise<T>
  updateSocialNetwork<T = any>({
    urlFacebook,
    urlInstagram,
    urlOnlyfans,
    urlTikTok,
  }: {
    urlFacebook: string
    urlInstagram: string
    urlOnlyfans: string
    urlTikTok: string
  }): Promise<T>
}
