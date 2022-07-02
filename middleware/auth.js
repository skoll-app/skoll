export default function ({ redirect, app, route }) {
  if (app.$cookies.get('token')) {
    if (route.path.includes('/auth')) redirect('/feed')
  } else {
    if (!route.path.includes('/auth')) redirect('/')
  }
}
