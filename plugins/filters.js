import Vue from 'vue'

export default () => {
  Vue.filter('truncate', function (data, num) {
    num = num == null ? 80 : num
    const reqdString = data.split('').slice(0, num).join('')
    return `${reqdString}...`
  })

  Vue.filter('initials', function (value) {
    return value.charAt(0);
  })
}
