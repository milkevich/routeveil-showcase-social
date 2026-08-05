import { BadgeCheck, MoreHorizontal } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import {
  RouteveilLink,
  RouteveilSharedElement,
} from 'routeveil/react-router'
import { profile } from '../../data/profile'
import {
  formatCount,
  getDisplayName,
  getPostMedia,
  getPostSharedElementName,
} from '../../lib/social'
import './Profile.css'

function Profile() {
  const { username } = useParams<{ username: string }>()
  const displayName = getDisplayName(profile)

  if (username !== profile.username) {
    return <Navigate to={`/${profile.username}`} replace />
  }

  return (
    <main className="content-container">
      <section className="profile-card" aria-labelledby="profile-name">
        <div className="profile__banner">
          <img
            src={profile.bannerSrc}
            alt={`${displayName}'s profile banner`}
          />
        </div>

        <div className="profile__body">
          <div className="profile__avatar-row">
            <img
              className="profile__avatar"
              src={profile.avatarSrc}
              alt={`${displayName}'s profile avatar`}
            />

            <button
              className="profile__options"
              type="button"
              aria-label="Profile options"
            >
              <MoreHorizontal size={22} />
            </button>
          </div>

          <div className="profile__biography">
            <div className="profile__name-row">
              <h1 id="profile-name">{displayName}</h1>
              <BadgeCheck size={19} aria-label="Verified profile" />
            </div>

            <span className="profile__username">@{profile.username}</span>
            <p>{profile.biography}</p>
          </div>

          <dl className="profile__statistics">
            <div>
              <dd>{profile.posts.length}</dd>
              <dt>Posts</dt>
            </div>

            <div>
              <dd>{formatCount(profile.followers)}</dd>
              <dt>Followers</dt>
            </div>

            <div>
              <dd>{formatCount(profile.following)}</dd>
              <dt>Following</dt>
            </div>
          </dl>

          <div className="profile__actions">
            <button className="profile__follow" type="button">
              Follow
            </button>

            <button className="profile__message" type="button">
              Message
            </button>
          </div>
        </div>
      </section>

      <section
        className="profile-posts"
        aria-label={`${displayName}'s posts`}
      >
        <div className="profile__grid">
          {profile.posts.map((post) => {
            const sharedElementName = getPostSharedElementName(post.id)

            return (
              <RouteveilLink
                key={post.id}
                className="profile-post__link"
                to={`/${profile.username}/feed/${post.id}`}
                transition="fade"
                sharedElements={sharedElementName}
                scrollToSharedElement={sharedElementName}
                preload="intent"
                aria-label={`Open post: ${post.mediaAlt}`}
              >
                <article className="profile-post">
                  <RouteveilSharedElement name={sharedElementName}>
                    <img
                      className="profile-post__media"
                      src={getPostMedia(post)}
                      alt={post.mediaAlt}
                      loading="eager"
                    />
                  </RouteveilSharedElement>
                </article>
              </RouteveilLink>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Profile