import type { ButtonProps } from "@nuxt/ui"

interface Badge {
  text: string;
  img: string;
  url: string;
}

export const HeroLinks = ref<ButtonProps[]>([
  {
    icon: "simple-icons:bandcamp",
    to: "https://bandcamp.com/slimymonz",
    label: "Bandcamp",
    class: "bg-[#007C9E] hover:bg-0 hover:ring-4 hover:ring-secondary",
  },
  {
    icon: "simple-icons:bluesky",
    to: "https://bsky.app/profile/monz.us",
    label: "Bluesky",
    class: "bg-[#0f73ff] hover:bg-0 hover:ring-4 hover:ring-secondary",
  },
  {
    icon: "simple-icons:codeberg",
    to: "https://codeberg.org/Monz?tab=overview",
    label: "Codeberg",
    class: "bg-[#2185d0] hover:bg-0 hover:ring-4 hover:ring-secondary",
  },
  {
    icon: "lucide:mail",
    to: "mailto:website@monz.us",
    label: "E-Mail",
    class: "bg-[#e64134] hover:bg-0 hover:ring-4 hover:ring-secondary",
  },
  {
    icon: "simple-icons:furaffinity",
    to: "https://www.furaffinity.net/user/slimymonz hover:ring-4 hover:ring-secondary",
    label: "FurAffinity",
    class: "bg-[#faaf3a] hover:bg-0 hover:ring-4 hover:ring-secondary",
  },
  {
    icon: "simple-icons:mastodon",
    to: "https://yiff.life/@slimymonz",
    label: "Mastodon",
    class: "bg-[#6260fa] hover:bg-0 hover:ring-4 hover:ring-secondary",
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
    text: "Monz",
    img: "/badges/monz.gif",
    url: "/",
  },
  {
    text: "Regal",
    img: "https://cobra.monster/_astro/cobra.monster.OCLY4hzR_29y7l4.gif",
    url: "https://cobra.monster/",
  },
];

