import User from '../../interfaces/user'
export const state = (): User => ({
  address: {},
  amountAvailable: 0,
  archivementsAvailable: [],
  cards: [],
  cellPhone: '',
  cityName: '',
  defaultCard: null,
  email: '',
  firstName: '',
  gender: '',
  identification: {
    type: '',
    number: '',
  },
  interesGender: '',
  isVerify: true,
  lastName: '',
  logo: '',
  totalArchievements: 0,
  totalSusbscriberMerchant: 0,
  totalpublications: 0,
  age: null
})

export type UserState = ReturnType<typeof state>
