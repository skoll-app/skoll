import User from '../interfaces/user'

export default function ({ app }, inject) {
  const skollSecurity = process.env.skollSecurity
  const skollRegister = process.env.skollRegister

  let services = {
    auth: {
      login(username: string, password: string) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.post(
              `${skollSecurity}/oauth/login`,
              {
                username,
                password,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      userExists({ username }: { username: string }) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.post(
              `${skollSecurity}/security/exist/user`,
              {
                username,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      updatePassword({
        newPassword,
        password,
      }: {
        newPassword: string
        password: string
      }) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.put(
              `${skollRegister}/client/change/password`,
              {
                newPassword,
                password,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      userData() {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.get(`${skollRegister}/client/`)
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
    },
    posts: {
      getAll({ page, size }: { page: number; size: number }) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.post(
              `${skollRegister}/publication/`,
              {
                page,
                size,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      uploadImage(formdata: FormData) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.post(
              `${skollRegister}/client/create/multimedia`,
              formdata
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      deleteById(id: string) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.delete(
              `${skollRegister}/publication/${id}`
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      get() {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.get(
              `${skollRegister}/publication/`
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
    },
    utils: {
      uploadImageToCut(formdata: FormData) {
        return new Promise(async (resolve, reject) => {
          try {
            const headers = { 'Content-Type': 'multipart/form-data' }
            const response = await app.$apiAuth.post(
              `${skollRegister}/client/create/multimedia/cut`,
              formdata,
              {
                headers,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
    },
    user: {
      updateData(formattedUser: User) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.post(
              `${skollRegister}/client/update`,
              formattedUser
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      updateLogo(formdata: FormData) {
        return new Promise(async (resolve, reject) => {
          try {
            const headers = { 'Content-Type': 'multipart/form-data' }
            const response = await app.$apiAuth.post(
              `${skollRegister}/client/update/logo`,
              formdata,
              {
                headers,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      updateSocialNetwork({
        urlFacebook,
        urlInstagram,
        urlOnlyfans,
        urlTikTok,
      }: {
        urlFacebook: string
        urlInstagram: string
        urlOnlyfans: string
        urlTikTok: string
      }) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.post(
              `${skollRegister}/client/update/social/network`,
              {
                urlFacebook,
                urlInstagram,
                urlOnlyfans,
                urlTikTok,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
    },
  }
  inject('httpService', services)
}
