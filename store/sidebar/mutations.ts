import { MutationTree } from 'vuex'
import { SidebarState } from '.'
import types from './types'

const mutations: MutationTree<SidebarState> = {
  [types.SWITCH_OPEN]: (state, open: boolean) => (state.open = open),
}

export default mutations
