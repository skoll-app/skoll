import { UserState } from './index'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import User from '../../interfaces/user'
import UserTypes from './types'

const actions: ActionTree<UserState, RootState> = {
  setUser({ commit }, user: User) {
    commit(UserTypes.SET_USER, user)
  },
}

export default actions
