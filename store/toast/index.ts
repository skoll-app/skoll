import Toast from "../../interfaces/toast"

export const state = (): Toast => ({
  show: false,
  title: '',
  titleHelp: '',
  message: '',
  type: 'primary',
  closable: false,
  timer: 5000
})

export type ToastState = ReturnType<typeof state>
