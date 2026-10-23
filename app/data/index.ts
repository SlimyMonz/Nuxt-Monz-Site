import type { PageFeatureProps, ButtonProps } from "@nuxt/ui";
import type { Badge, HeroInfo } from "~/types/contentTypes";

export const heroInfo: HeroInfo = {
    headline: "Made by Monz",
    title: "Monster Website",
    description:
        "Welcome! I hope you like my site. I put in a lot of time and effort to make something just for me. Feel free to click around and check things out!",
};

export const pageFeatureProps = ref<PageFeatureProps[]>([
    {
        title: "About",
        description: `Learn more about who I am and my background!`,
        icon: "lucide:user",
        to: "/about",
    },
    {
        title: "Art",
        description: `Browse my digital artwork. Most of it was made on a computer with mouse/keyboard using stuff similar to Photoshop.`,
        icon: "lucide:palette",
        to: "/art",
    },
    {
        title: "Blog",
        description: `Read my latest posts, thoughts, and updates. Usually gets into ramblings and such.`,
        icon: "lucide:newspaper",
        to: "/blog",
    },
    {
        title: "Books",
        description: `Books I've been reading and that I've enjoyed. I'd recommend any of these if you're a fan of reading.`,
        icon: "lucide:book",
        to: "/books",
    },
    {
        title: "Characters",
        description: `A collection of my characters! Each one has a link to their FurAffinity gallery.`,
        icon: "lucide:user-round-group",
        to: "/characters",
    },
    {
        title: "Error",
        description: `Preview the error page, since sometimes things go wrong. Also a great way to view the animated background (dark mode only).`,
        icon: "lucide:triangle-alert",
        to: "/error",
    },
    {
        title: "Movies",
        description: `A collection of films I've watched, loved, and want to share. I consider these perfection.`,
        icon: "lucide:film",
        to: "/movies",
    },
    {
        title: "Music",
        description: `Favorite albums and artists of mine. Best way to get a peek at what my music tastes are~`,
        icon: "lucide:eighth-notes",
        to: "/music",
    },
    {
        title: "Obituary",
        description: `A quiet place to remember and honor those who are no longer with us. Rest in peace.`,
        icon: "lucide:tombstone",
        to: "/obituary",
    },
    {
        title: "Photos",
        description: `A gallery of photos I wanna share! Mostly and scenery.`,
        icon: "lucide:images",
        to: "/photos",
    },
    {
        title: "Recipes",
        description: `Dishes I love to make with ingredients and step-by-step instructions.`,
        icon: "lucide:utensils",
        to: "/recipes",
    },
    {
        title: "Terms of Service",
        description: `The terms and guidelines for using this site.`,
        icon: "lucide:certificate",
        to: "/terms",
    },
]);

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
        to: "https://www.furaffinity.net/user/slimymonz",
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
        img: "/badges/null_sheep.png",
        url: "https://www.sheeeeeeeep.art/",
    },
    {
        text: "Aks",
        img: "/badges/akselmo.png",
        url: "https://akselmo.dev/",
    },
    {
        text: "Monz",
        img: "/badges/monz.gif",
        url: "/",
    },
    {
        text: "Regal",
        img: "/badges/cobra.monster.gif",
        url: "https://cobra.monster/",
    },
];
