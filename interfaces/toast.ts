export default interface Toast {
  show: boolean
  title: string
  titleHelp: string
  message: string
  type: 'danger' | 'info' | 'warning' | 'primary'
}
