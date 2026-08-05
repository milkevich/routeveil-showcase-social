export type PostType = {
  id: string
  mediaSrc: string
  mediaAlt: string
  caption?: string
  date: string
}

export type UserType = {
  username: string
  avatarSrc: string
  bannerSrc: string
  firstName: string
  lastName: string
  biography: string
  followers: number
  following: number
  posts: PostType[]
}
