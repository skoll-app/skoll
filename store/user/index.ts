import User from '../../interfaces/user'
export const state = (): User => ({
  firstName: '',
  lastName: '',
  logo: '',
  email: '',
  gender: '',
  interesGender: ''
})

export type UserState = ReturnType<typeof state>
