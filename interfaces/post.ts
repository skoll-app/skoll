import Comments from './comments'
import User from './user'

export default interface Post {
  user?: User
  location?: string
  accountComment?: number,
  accountLike?: number,
  comments: [],
  createDate?: string,
  description?: string | null,
  extension?: string,
  id?: number,
  url?: string,
}
