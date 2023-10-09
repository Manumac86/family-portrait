import type { UUID } from 'crypto'

export interface Database {
  users: User[]
  posts: Post[]
}

export interface User {
  email: string
  id: UUID
  created_at: Date
  name: string
}

export interface Post {
  id: UUID
  content: string
  created_at: Date
  user_id: UUID
}
