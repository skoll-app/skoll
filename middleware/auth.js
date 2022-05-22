export default function ({ redirect, app, store }) {
  if (!app.$cookies.get('token')) {
    redirect('/')
  }
}
