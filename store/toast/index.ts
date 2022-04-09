import Toast from "../../interfaces/toast"

export const state = (): Toast => ({
  show: true,
  title: '',
  titleHelp: '',
  message: '',
  type: 'primary',
})

export type ToastState = ReturnType<typeof state>
