export default function ({ app }, inject) {
  const skollSecurity = process.env.skollSecurity
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
    },
  }
  inject('httpService', services)
}
