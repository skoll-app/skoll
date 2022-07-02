export default function (_, inject) {
  const addErrorImg = (e) => {
    e.target.src = 'assets/img/error-placeholder.png'
  }
  inject('addErrorImg', addErrorImg)
}
