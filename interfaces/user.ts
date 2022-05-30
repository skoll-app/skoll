export default interface User {
  address?: Address
  amountAvailable?: number
  archivementsAvailable?: Array<any>
  cards?: Array<any>
  cellPhone?: string
  cityName?: string
  decription?: string
  defaultCard?: null
  email: string
  firstName: string
  gender: string
  identification?: Identification
  interesGender: string
  isVerify?: true
  lastName: string
  logo?: string;
  totalArchievements?: number
  totalSusbscriberMerchant?: number
  totalpublications?: number;
  description?: string
  age?: number
}

export interface Identification {
  type: string
  number: string
}

export interface Address {
  id?: string
  zip_code?: string
  street_name?: string
  street_number?: string
}
