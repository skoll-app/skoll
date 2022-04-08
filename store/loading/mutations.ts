import { MutationTree } from 'vuex'
import { LoadingState } from '.'

const mutations: MutationTree<LoadingState> = {
  SWITCH_SHOW: (state, show: boolean) => (state.showing = show),
}

export default mutations
