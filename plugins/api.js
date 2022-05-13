export default function ({ $axios, app }, inject) {
  // Open API
  const api = $axios.create()
  api.setBaseURL(process.env.BASE_URL)

  // API AUTH
  const apiAuth = $axios.create()
  apiAuth.setBaseURL(process.env.BASE_URL)
  apiAuth.setToken(app.$cookies.get('token'), 'Bearer')

  // Inject to context as $api & $apiAuth
  inject('api', api)
  inject('apiAuth', apiAuth)
}
