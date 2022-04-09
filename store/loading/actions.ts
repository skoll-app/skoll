import { ActionTree } from 'vuex'
import { LoadingState } from '.'
import { RootState } from '..'
import LoadingTypes from './types'

const actions: ActionTree<LoadingState, RootState> = {
  showLoading({ commit }) {
    commit(LoadingTypes.SWITCH_SHOW, true)
  },
  hideLoading({ commit }) {
    commit(LoadingTypes.SWITCH_SHOW, false)
  },
}

export default actions
