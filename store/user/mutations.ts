import { UserState } from './index'
import { MutationTree } from 'vuex'
import UserTypes from './types'
import User from '../../interfaces/user'

const mutations: MutationTree<UserState> = {
  [UserTypes.SET_USER]: (state, user: User) => {
    state.firstName = user.firstName
    state.lastName = user.lastName
    state.gender = user.gender
    state.interesGender = user.interesGender
    state.email = user.email
    state.cellPhone = user.cellPhone
    state.cityName = user.cityName
    state.totalArchievements = user.totalArchievements
    state.totalSusbscriberMerchant = user.totalSusbscriberMerchant
    state.amountAvailable = user.amountAvailable
    state.about = user.about
    state.logo = user.logo
    state.age = user.age
    state.isVerify = user.isVerify
    state.archivementsAvailable = user.archivementsAvailable
    state.defaultCard = user.defaultCard
    state.identification = user.identification
    state.address = user.address
    state.cards = user.cards
    state.userName = user.userName
    state.urlFacebook = user.urlFacebook
    state.urlInstagram = user.urlInstagram
    state.urlOnlyfans = user.urlOnlyfans
    state.urlTikTok = user.urlTikTok
  },
  [UserTypes.SET_FACEBOOK]: (state, facebook: string) => {
    state.urlFacebook = facebook
  },
  [UserTypes.SET_INSTAGRAM]: (state, instagram: string) => {
    state.urlInstagram = instagram
  },
  [UserTypes.SET_ONLYFANS]: (state, onlyfans: string) => {
    state.urlOnlyfans = onlyfans
  },
  [UserTypes.SET_TIKTOK]: (state, tiktok: string) => {
    state.urlTikTok = tiktok
  }
}

export default mutations
