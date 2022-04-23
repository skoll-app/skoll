import { SidebarState } from './index'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import types from './types'

const actions: ActionTree<SidebarState, RootState> = {
  openSidebar({ commit }) {
    commit(types.SWITCH_OPEN, true)
    const mySidenav = document.getElementById('mySidenav')!
    mySidenav.style.width = '100vw'
    mySidenav.style.height = 'calc(100vh - 76px)'
    mySidenav.style.backgroundColor = 'rgba(196,196,196,0.7)'
    document.getElementById('sidenavContent')!.style.width = '300px'
    document.body.style.overflow = 'hidden'
  },
  closeSidebar({ commit }) {
    commit(types.SWITCH_OPEN, false)
    const mySidenav = document.getElementById('mySidenav')!
    mySidenav.style.width = '0'
    mySidenav.style.backgroundColor = 'white'
    document.getElementById('sidenavContent')!.style.width = '0'
    document.body.style.overflow = 'auto'
  },
}

export default actions
