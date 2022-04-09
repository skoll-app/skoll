import { MutationTree } from 'vuex'
import { ToastState } from '.'
import ToastTypes from './types'

const mutations: MutationTree<ToastState> = {
  [ToastTypes.SWITCH_SHOW]: (state, show: boolean) => (state.show = show),
  [ToastTypes.SET_TITLE]: (state, title: string) => (state.title = title),
  [ToastTypes.SET_TITLE_HELP]: (state, helpTitle: string) =>
    (state.titleHelp = helpTitle),
  [ToastTypes.SET_MESSAGE]: (state, message: string) =>
    (state.message = message),
  [ToastTypes.SET_TYPE]: (
    state,
    type: 'danger' | 'info' | 'warning' | 'primary'
  ) => (state.type = type),
  [ToastTypes.SET_CLOSABLE]: (state, closable: boolean) =>
    (state.closable = closable),
}

export default mutations
