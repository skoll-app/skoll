export default function ({ $axios, app }, inject) {
  // Open API
  const api = $axios.create()
  api.setBaseURL(process.env.baseUrl)

  // API AUTH
  const apiAuth = $axios.create()
  apiAuth.setBaseURL(process.env.baseUrl)

  // Interceptor
  apiAuth.interceptors.request.use(function (config) {
    apiAuth.setToken(app.$cookies.get('token'))
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Inject to context as $api & $apiAuth
  inject('api', api)
  inject('apiAuth', apiAuth)
}
