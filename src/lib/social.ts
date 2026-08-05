import type { PostType, UserType } from '../types/social'

const postAssets = import.meta.glob('../assets/posts/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const standardCountFormatter = new Intl.NumberFormat('en')
const compactCountFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

const postDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

export function formatCount(value: number): string {
  const formatter = value >= 10_000
    ? compactCountFormatter
    : standardCountFormatter

  return formatter.format(value)
}

export function formatPostDate(date: string): string {
  return postDateFormatter.format(new Date(date))
}

export function getDisplayName(user: UserType): string {
  return `${user.firstName} ${user.lastName}`
}

export function getPostMedia(post: PostType): string {
  const fileName = `${post.id.padStart(2, '0')}.png`

  return postAssets[`../assets/posts/${fileName}`] ?? post.mediaSrc
}

export function getPostSharedElementName(postId: string): string {
  return `post-${postId}`
}