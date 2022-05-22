import { UserState } from './index'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import User from '../../interfaces/user'
import UserTypes from './types'

const actions: ActionTree<UserState, RootState> = {
  setUser({ commit }, user: User) {
    commit(UserTypes.SET_NAME, user.firstName)
    commit(UserTypes.SET_LASTNAME, user.lastName)
    commit(UserTypes.SET_LOGO, user.logo)
    commit(UserTypes.SET_EMAIL, user.email)
  },
}

export default actions
