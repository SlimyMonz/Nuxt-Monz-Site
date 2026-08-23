import type { ButtonProps, TimelineItem } from "@nuxt/ui";

export const title = `Hello, I'm Monz!`;
export const tagline = `Welcome to my Website~`;
export const heroImage = "/about/monz_ref.jpg";
export const sonaRef = "/about/monz_ref.png";
export const sonaIcon = "/about/monz_icon.jpg";

export const heroLinks = ref<ButtonProps[]>([
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

const age = () => {
  const birth = new Date("1993-07-06"),
    now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  if (now < new Date(now.getFullYear(), birth.getMonth(), birth.getDate()))
    years--;
  return `${years} years old`;
};

export const sonaFacts = [
  { label: "Full Name", value: "Slimy Monster" },
  { label: "Pronouns", value: "He/Him | They/Them | It/Its" },
  { label: "Species", value: "Slime, Wrath Demon, Monster" },
  { label: "Age", value: age() },
  { label: "Height", value: "182 cm | 6 ft" },
  { label: "Sexuality", value: "Aromantic-Asexual" },
  { label: "Politics", value: "Radically Leftist" },
  { label: "Occupation", value: "Software Developer" },
  { label: "Neurodivergence", value: "AuDHD" },
  { label: "Weaknesses", value: "Heat, Loud Noises" },
  { label: "Favorite Color", value: "Red" },
];

export const timelineItems = ref<TimelineItem[]>([
  {
    date: "July 1993",
    title: "EXISTENCE",
    description: "This is the year I came to life!",
    icon: "lucide:baby",
  },
  {
    date: "August 2010",
    title: "WORST MISTAKE",
    description: "Moved to Florida...",
    icon: "lucide:palmtree",
  },
  {
    date: "October 2015",
    title: "MET DAUSTY",
    description: "Only good part about Florida!",
    icon: "lucide:heart",
  },
  {
    date: "December 2023",
    title: "UNIVERSITY GRADUATION",
    description: "Bachelors in Computer Science",
    icon: "lucide:graduation-cap",
  },
  {
    date: "Today",
    title: "PENNSYLVANIA",
    description: "Working and living here with Dausty",
    icon: "lucide:home",
  },
]);

export const interestCards = [
  {
    title: "Hobbies",
    description: `I'm a big fan of video games, books, music, and movies.
      Games are probably the biggest one, but I enjoy all kinds of engaging and creative media.
      I'm also the sort of person who can turn a casual interest into a deep dive and suddenly know far more about it than I ever intended to.`,
    icon: "lucide:gamepad-2",
  },
  {
    title: "Work",
    description: `I build software for a living, mostly as a full-stack developer with a preference for the back end.
      I like the parts of development where you get to dig into data, design APIs, untangle complicated business logic, and make things work behind the scenes.
      I also spend plenty of time in Vue and TypeScript, so I'm just as comfortable crossing over into the front end when necessary.`,
    icon: "lucide:briefcase",
  },
  {
    title: "Skills",
    description: `My skill set is less 'expert in one thing' and more 'give me a problem and I'll figure something out.'
      I've picked up experience across a pretty wide range of software development, from front-end frameworks and databases to APIs, testing, scripting, and everything in between.
      I also spent years working in retail, where I picked up leadership and management skills that don't show up in a typical developer résumé, but absolutely come in handy.`,
    icon: "lucide:graduation-cap",
  },
];


export const badges = [
  { text: "Regal's Website", img: "/about/badges/cobra.monster.gif", url: "https://cobra.monster/" },
];
