import type { TimelineItem } from "@nuxt/ui";

export const heroImage = "/about/monz_ref.jpg";
export const sonaRef = "/about/monz_ref.png";
export const sonaIcon = "/about/monz_icon.jpg";


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
  { label: "Neurotype", value: "AuDHD" },
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

export const achievements = [
  {
    title: "2Woke4U",
    description: "Human rights are important.",
    img: "/about/achievements/antinazi.gif",
  },
  {
    title: "Cozy Gaymer",
    description: "Loves playing Animal Crossing.",
    img: "/about/achievements/bobbutton.gif",
  },
  {
    title: "Linux User",
    description: "Main desktop runs KDE Fedora.",
    img: "/about/achievements/fedora.gif",
  },
  {
    title: "Microsoft Hater",
    description: "Avoids Microsoft at all costs.",
    img: "/about/achievements/stop_microsoft.gif",
  },
];
