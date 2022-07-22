import User from '../interfaces/user'

export default function ({ app }, inject) {
  const skollSecurity = process.env.skollSecurity
  const skollRegister = process.env.skollRegister
  const skollParameter = process.env.skollParameter

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
      generateOTP({ check, sessionId }: { check: string; sessionId?: string }) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.post(
              `${skollSecurity}/security/generate/otp`,
              {
                check,
                sessionId,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      validateOTP({ sessionId, otp }: { sessionId: string; otp: string }) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.post(
              `${skollSecurity}/security/validate/otp`,
              {
                sessionId,
                otp,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      validateEmail({
        sessionId,
        email,
      }: {
        sessionId: string
        email: string
      }): Promise<any> {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.post(
              `${skollSecurity}/security/validate/email`,
              {
                email,
                sessionId,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      passwordRecovery({
        sessionId,
        password,
      }: {
        sessionId: string
        password: string
      }): Promise<any> {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.put(
              `${skollSecurity}/security/recovery/password`,
              {
                password,
                sessionId,
              }
            )
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
      getData() {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.get(`${skollRegister}/client/`)
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      signup(user: Partial<User>, password: string, sessionId: string) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.post(`${skollRegister}/register`, {
              age: user.age,
              gender: user.gender,
              interestGender: user.interesGender,
              lat: 0,
              log: 0,
              password,
              sessionId,
            })
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      preSignup(user: Partial<User>) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$api.post(
              `${skollRegister}/client/hello`,
              {
                cellPhone: user.cellPhone,
                cellPhonePrefix: '57',
                city: user.cityName,
                email: user.email,
                firstname: user.firstName,
                lastName: user.lastName,
              }
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
    },
    policy: {
      get(): Promise<any> {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.get(
              `${skollParameter}/support/security/policy`
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
      update({
        notification,
        profile,
        invitation,
      }: {
        notification: boolean
        profile: boolean
        invitation: boolean
      }) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.put(
              `${skollParameter}/support/security/policy`,
              {
                notifications: notification,
                profileViewable: profile,
                receiveInvitations: invitation,
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
