import { MutationTree } from 'vuex'
import { ToastState } from '.'

const mutations: MutationTree<ToastState> = {
  SWITCH_SHOW: (state, show: boolean) => (state.show = show),
}

export default mutations
