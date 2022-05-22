import { UserState } from './index'
import { MutationTree } from 'vuex'
import UserTypes from './types'
import { Address } from '../../interfaces/user'

const mutations: MutationTree<UserState> = {
  [UserTypes.SET_NAME]: (state, firstName: string) =>
    (state.firstName = firstName),
  [UserTypes.SET_ADDRESS]: (state, address: Address) =>
    (state.address = address),
  [UserTypes.SET_AMOUNT_AVAILABLE]: (state, amountAvailable: number) =>
    (state.amountAvailable = amountAvailable),
  [UserTypes.SET_ARCHIVEMENTS_AVAILABLE]: (
    state,
    archivementsAvailable: Array<any>
  ) => (state.archivementsAvailable = archivementsAvailable),
  [UserTypes.SET_CARDS]: (state, cards: Array<any>) => (state.cards = cards),
  [UserTypes.SET_LASTNAME]: (state, lastName: string) =>
    (state.lastName = lastName),
  [UserTypes.SET_LOGO]: (state, logo: string) => (state.logo = logo),
  [UserTypes.SET_EMAIL]: (state, email: string) => (state.email = email),
}

export default mutations
