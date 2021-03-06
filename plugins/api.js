export default function ({ $axios, app, redirect }, inject) {
  // Open API
  const api = $axios.create()
  api.setBaseURL(process.env.baseUrl)

  // API AUTH
  const apiAuth = $axios.create()
  apiAuth.setBaseURL(process.env.baseUrl)

  // Interceptor
  apiAuth.interceptors.request.use(
    function (config) {
      apiAuth.setToken(app.$cookies.get('token'))
      // Do something before request is sent
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  apiAuth.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log('error', error.response.status)
      if (error.response.status === 401 || error.response.status === 500) {
        app.$cookies.remove('token')
        localStorage.removeItem('user')
        redirect("/")
      }
      return Promise.resolve({ error })
    }
  )

  // Inject to context as $api & $apiAuth
  inject('api', api)
  inject('apiAuth', apiAuth)
}
