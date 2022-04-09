import { ActionTree } from 'vuex'
import { ToastState } from '.'
import { RootState } from '..'
import ToastTypes from './types'

const actions: ActionTree<ToastState, RootState> = {
  showToast({ commit }) {
    commit(ToastTypes.SWITCH_SHOW, true)
  },
  hideToast({ commit }) {
    commit(ToastTypes.SWITCH_SHOW, false)
  },
}

export default actions
