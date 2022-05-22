import Comments from './comments'
import User from './user'

export default interface Post {
  id: string
  user: User
  location: string
  imageUrl: string
  text: string
  likes: number
  comments?: Comments[],
  liked: boolean
}
