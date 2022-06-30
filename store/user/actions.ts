import { UserState } from './index'
import { ActionTree } from 'vuex'
import { RootState } from '..'
import User from '../../interfaces/user'
import UserTypes from './types'

const actions: ActionTree<UserState, RootState> = {
  setUser({ commit }, user: User) {
    commit(UserTypes.SET_USER, user)
  },
  setSocialMedias(
    { commit },
    socialMedias: {
      facebook: string
      instagram: string
      onlyfans: string
      tiktok: string
    }
  ) {
    commit(UserTypes.SET_FACEBOOK, socialMedias.facebook)
    commit(UserTypes.SET_INSTAGRAM, socialMedias.instagram)
    commit(UserTypes.SET_ONLYFANS, socialMedias.onlyfans)
    commit(UserTypes.SET_TIKTOK, socialMedias.tiktok)
  },
}

export default actions
