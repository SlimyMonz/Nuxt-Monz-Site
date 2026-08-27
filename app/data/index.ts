import type { ButtonProps } from "@nuxt/ui"

interface Badge {
  text: string;
  img: string;
  url: string;
}

export const HeroLinks = ref<ButtonProps[]>([
  {
    icon: "simple-icons:bluesky",
    to: "https://bsky.app/profile/monz.us",
    label: "Bluesky",
    color: "secondary",
  },
  {
    icon: "simple-icons:codeberg",
    to: "https://codeberg.org/Monz?tab=overview",
    label: "Codeberg",
    color: "secondary",
  },
  {
    icon: "lucide:mail",
    to: "mailto:website@monz.us",
    label: "E-Mail",
    color: "secondary",
  },
  {
    icon: "simple-icons:furaffinity",
    to: "https://www.furaffinity.net/user/slimymonz",
    label: "FurAffinity",
    color: "secondary",
  },
  {
    icon: "simple-icons:mastodon",
    to: "https://yiff.life/@slimymonz",
    label: "Mastodon",
    color: "secondary",
  },
]);

export const badges: Badge[] = [
  {
    text: "and Null",
    img: "https://www.sheeeeeeeep.art/imgs/art/button.png",
    url: "https://www.sheeeeeeeep.art/",
  },
  {
    text: "Aks",
    img: "https://akselmo.dev/assets/images/buttons/akselmo.png",
    url: "https://akselmo.dev/",
  },
  {
    text: "Regal",
    img: "https://cobra.monster/_astro/cobra.monster.OCLY4hzR_29y7l4.gif",
    url: "https://cobra.monster/",
  },
];

