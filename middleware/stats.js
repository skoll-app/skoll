export default function ({ store }) {
  if (process.client) {
    try {
      store.dispatch(`sidebar/closeSidebar`)
    } catch (error) {
      console.log(error)
    }
  }
}
