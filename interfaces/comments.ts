import User from "./user"

export default interface Comments {
  id: string
  user?: User
  text: string
  likes?: number
}
