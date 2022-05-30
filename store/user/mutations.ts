import { UserState } from './index'
import { MutationTree } from 'vuex'
import UserTypes from './types'
import User from '../../interfaces/user'

const mutations: MutationTree<UserState> = {
  [UserTypes.SET_USER]: (state, user: User) => {
    state = Object.assign({}, state, { ...user })
  },
}

export default mutations
