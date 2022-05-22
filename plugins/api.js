export default function ({ $axios, app }, inject) {

  console.log('url', process.env.BASE_URL);
  // Open API
  const api = $axios.create()
  api.setBaseURL(process.env.BASE_URL || 'https://e1b5-191-107-184-84.ngrok.io')

  // API AUTH
  const apiAuth = $axios.create()
  apiAuth.setBaseURL(process.env.BASE_URL || 'https://e1b5-191-107-184-84.ngrok.io')

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
