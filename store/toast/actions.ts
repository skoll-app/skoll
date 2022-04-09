import { ActionTree } from 'vuex'
import { ToastState } from '.'
import { RootState } from '..'
import Toast from '../../interfaces/toast'
import ToastTypes from './types'

const actions: ActionTree<ToastState, RootState> = {
  showToast({ commit }) {
    commit(ToastTypes.SWITCH_SHOW, true)
  },
  hideToast({ commit }) {
    commit(ToastTypes.SWITCH_SHOW, false)
  },
  showToastWithProps({ commit, state }, toast: Toast) {
    commit(ToastTypes.SWITCH_SHOW, true)
    commit(ToastTypes.SET_TITLE, toast.title)
    commit(ToastTypes.SET_TITLE_HELP, toast.titleHelp)
    commit(ToastTypes.SET_MESSAGE, toast.message)
    commit(ToastTypes.SET_TYPE, toast.type)
    if (toast.closable) {
      commit(ToastTypes.SET_CLOSABLE, toast.closable)
    }
    if (!toast.closable || toast.timer) {
      setTimeout(() => {
        commit(ToastTypes.SWITCH_SHOW, false)
      }, toast.timer || state.timer)
    }
  },
}

export default actions
