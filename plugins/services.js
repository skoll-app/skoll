export default function ({ app }, inject) {
  const skollSecurity = process.env.skollSecurity
  const skollRegister = process.env.skollRegister

  let services = {
    auth: {
      login(username, password) {
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
      userExists({ username }) {
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
      updatePassword({ newPassword, password }) {
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
      getAll({ page, size }) {
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
      uploadImage(formdata) {
        return new Promise(async (resolve, reject) => {
          try {
            const response = await app.$apiAuth.post(
              `${skollRegister}/client/create/multimedia`,
              formdata,
            )
            resolve(response)
          } catch (error) {
            reject(error)
          }
        })
      },
    },
    utils: {
      uploadImageToCut(formdata) {
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
  }
  inject('httpService', services)
}
