import { SidebarState } from './index'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import types from './types'

const actions: ActionTree<SidebarState, RootState> = {
  openSidebar({ commit }) {
    commit(types.SWITCH_OPEN, true)
    document.getElementById('mySidenav')!.style.width = '300px'
    document.body.style.backgroundColor = 'rgba(196,196,196,0.5)'
  },
  closeSidebar({ commit }) {
    commit(types.SWITCH_OPEN, false)
    document.getElementById('mySidenav')!.style.width = '0'
    document.body.style.backgroundColor = 'white'
  },
}

export default actions
