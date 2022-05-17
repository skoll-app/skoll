export default function ({ redirect, app, store }) {
  console.log(store.state)
  if (!app.$cookies.get('token')) {
    redirect('/')
  }
}
