import {
  ArrowLeft,
  BadgeCheck,
  Bookmark,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Send,
} from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import {
  RouteveilSharedElement,
  useRouteveilNavigate,
} from 'routeveil/react-router'
import { profile } from '../../data/profile'
import {
  formatPostDate,
  getDisplayName,
  getPostMedia,
  getPostSharedElementName,
} from '../../lib/social'
import type { PostType } from '../../types/social'
import './Feed.css'

type FeedPostProps = {
  post: PostType
  selected: boolean
}

function FeedPost({ post, selected }: FeedPostProps) {
  return (
    <article
      className="feed-post"
      aria-current={selected ? 'true' : undefined}
    >
      <header className="feed-post__header">
        <div className="feed-post__author">
          <img
            className="feed-post__avatar"
            src={profile.avatarSrc}
            alt=""
          />

          <div className="feed-post__author-copy">
            <div>
              <strong>{profile.username}</strong>
              <BadgeCheck size={15} aria-label="Verified profile" />
            </div>
            <span>{getDisplayName(profile)}</span>
          </div>
        </div>

        <button
          className="feed-post__more"
          type="button"
          aria-label="Post options"
        >
          <MoreHorizontal size={22} />
        </button>
      </header>

      <RouteveilSharedElement name={getPostSharedElementName(post.id)}>
        <img
          className="feed-post__media"
          src={getPostMedia(post)}
          alt={post.mediaAlt}
          loading={selected ? 'eager' : 'lazy'}
        />
      </RouteveilSharedElement>

      <div className="feed-post__content">
        <div className="feed-post__actions">
          <div className="feed-post__primary-actions">
            <button type="button" aria-label="Like post">
              <Heart />
            </button>

            <button type="button" aria-label="Comment on post">
              <MessageCircle />
            </button>

            <button type="button" aria-label="Repost">
              <Repeat2 />
            </button>

            <button type="button" aria-label="Share post">
              <Send />
            </button>
          </div>

          <button type="button" aria-label="Save post">
            <Bookmark />
          </button>
        </div>

        {post.caption && (
          <p className="feed-post__caption">
            <strong>{profile.username}</strong> {post.caption}
          </p>
        )}

        <time className="feed-post__date" dateTime={post.date}>
          {formatPostDate(post.date)}
        </time>
      </div>
    </article>
  )
}

function Feed() {
  const { username, postId } = useParams<{
    username: string
    postId: string
  }>()
  const navigate = useRouteveilNavigate()
  const profilePath = `/${profile.username}`
  const hasSelectedPost = profile.posts.some((post) => post.id === postId)

  if (username !== profile.username || !hasSelectedPost) {
    return <Navigate to={profilePath} replace />
  }

  const returnToProfile = () => {
    void navigate(profilePath, {
      transition: {
        name: 'slide',
        direction: 'right',
      },
      sharedElements: false,
    })
  }

  return (
    <main className="content-container">
      <header className="feed-page__header">
        <button
          className="feed-page__back"
          type="button"
          aria-label="Return to profile"
          onClick={returnToProfile}
        >
          <ArrowLeft size={22} />
        </button>

        <div className="feed-page__title">
          <span>Posts by</span>
          <strong>@{profile.username}</strong>
        </div>

        <div className="feed-page__header-spacer" aria-hidden="true" />
      </header>

      <section
        className="feed"
        aria-label={`${getDisplayName(profile)}'s feed`}
      >
        {profile.posts.map((post) => (
          <FeedPost
            key={post.id}
            post={post}
            selected={post.id === postId}
          />
        ))}
      </section>
    </main>
  )
}

export default Feed