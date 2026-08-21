import type { NavigationMenuItem } from '@nuxt/ui'

export const footerLinks: NavigationMenuItem[] = [
  {
    label: 'Contact',
    to: 'mailto:website@monz.us',
    target: '_blank'
  },
  {
    label: 'Source',
    to: 'https://codeberg.org/Monz/nuxt-monz-site',
    target: '_blank'
  },
  {
    label: 'Nuxt',
    to: 'https://nuxt.com/',
    target: '_blank'
  },
  {
    label: 'Nuxt UI',
    to: 'https://ui.nuxt.com/',
    target: '_blank'
  }
]

export const footerButtons = [
  {
    icon: 'i-simple-icons-bluesky',
    to: 'https://bsky.app/profile/monz.us',
    label: 'Bluesky'
  },
  {
    icon: 'i-simple-icons-codeberg',
    to: 'https://codeberg.org/Monz?tab=overview',
    label: 'Codeberg'
  },
  {
    icon: 'i-lucide-mail',
    to: 'mailto:website@monz.us',
    label: 'Email'
  },
  {
    icon: 'i-simple-icons-mastodon',
    to: 'https://yiff.life/@slimymonz',
    label: 'Mastodon'
  }
]