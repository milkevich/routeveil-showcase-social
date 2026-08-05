import profileAvatar from '../assets/profile-avatar.png'
import profileBanner from '../assets/profile-banner.png'
import type { UserType } from '../types/social'

export const profile: UserType = {
  username: 'itsniavale',
  avatarSrc: profileAvatar,
  bannerSrc: profileBanner,
  firstName: 'Nia',
  lastName: 'Vale',
  biography:
    'operating accordingly. proof i left the house. clothes, places, and questionable decisions.',
  followers: 24731,
  following: 207,

  posts: [
    {
      id: '1',
      mediaSrc: '/media/posts/01.webp',
      mediaAlt: 'Skaters riding through a concrete skatepark by the beach',
      caption: 'concrete was warm',
      date: '2026-07-31',
    },
    {
      id: '2',
      mediaSrc: '/media/posts/02.webp',
      mediaAlt: 'Polaroid portraits arranged across a marble table',
      caption: 'proof of concept',
      date: '2026-06-12',
    },
    {
      id: '3',
      mediaSrc: '/media/posts/03.webp',
      mediaAlt: 'Black and white outfit featuring a polka dot hoodie',
      caption: 'borrowed dots',
      date: '2026-04-23',
    },
    {
      id: '4',
      mediaSrc: '/media/posts/04.webp',
      mediaAlt: 'Woman wearing a red beanie and oversized grey hoodie',
      caption: 'red means go',
      date: '2026-02-14',
    },
    {
      id: '5',
      mediaSrc: '/media/posts/05.webp',
      mediaAlt: 'Close portrait showing silver grills',
      caption: 'mouth full of metal',
      date: '2025-12-27',
    },
    {
      id: '6',
      mediaSrc: '/media/posts/06.webp',
      mediaAlt: 'Portrait wearing a striped beanie and oversized black jacket',
      caption: 'low battery behavior',
      date: '2025-11-08',
    },
    {
      id: '7',
      mediaSrc: '/media/posts/07.webp',
      mediaAlt: 'Bright red storefront covered with white mannequins',
      caption: 'tourist trap',
      date: '2025-09-19',
    },
    {
      id: '8',
      mediaSrc: '/media/posts/08.webp',
      mediaAlt: 'Black and white photograph of someone diving into a pool',
      caption: 'missed the water on purpose',
      date: '2025-07-31',
    },
    {
      id: '9',
      mediaSrc: '/media/posts/09.webp',
      mediaAlt: 'Small dog wearing a pink knitted scarf and white sweater',
      caption: 'security',
      date: '2025-06-12',
    },
    {
      id: '10',
      mediaSrc: '/media/posts/10.webp',
      mediaAlt: 'Man wearing an embroidered tiger hat and spotted jacket',
      caption: 'formal attire',
      date: '2025-04-24',
    },
    {
      id: '11',
      mediaSrc: '/media/posts/11.webp',
      mediaAlt: 'Red polka dot top styled with oversized button belts',
      caption: 'buttoned up',
      date: '2025-03-06',
    },
    {
      id: '12',
      mediaSrc: '/media/posts/12.webp',
      mediaAlt: 'Man wearing a metal mask and graphic white shirt',
      caption: 'doom room',
      date: '2025-01-17',
    },
    {
      id: '13',
      mediaSrc: '/media/posts/13.webp',
      mediaAlt: 'Woman carrying an oversized purple rhinestone bag',
      caption: 'carry-on',
      date: '2024-11-29',
    },
    {
      id: '14',
      mediaSrc: '/media/posts/14.webp',
      mediaAlt: 'Close photograph of a camouflage knitted beanie',
      caption: 'headwear study',
      date: '2024-08-16',
    },
    {
      id: '15',
      mediaSrc: '/media/posts/15.webp',
      mediaAlt: 'Woman posing in an oversized leopard print jacket',
      caption: 'outside clothes',
      date: '2024-04-05',
    },
  ],
}