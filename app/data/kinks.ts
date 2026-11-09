export const heroInfo: HeroInfo = {
    headline: "Secret!",
    title: "Fetishes and Kinks",
    description: "Sexual preferences! Rated and organized by personal opinion.",
};

export const kinkKey = [
    {
        key: "Yes",
        description: "These are preferences I'd like basically any time.",
    },
    {
        key: "Maybe",
        description:
            "Stuff that I don't have a strong opinion on or has a qualification to enjoy.",
    },
    {
        key: "No",
        description:
            "Whatever is here, please don't bother. It's not for me, thank you.",
    },
];

export const yesKinks: Kink[] = [
    {
        title: "Anal Sex",
        description:
            "Genital(s) thrusting into an anus. Giving and receiving are great!",
        rating: 10,
    },
    {
        title: "Rimming",
        description: "Eating ass, face-sitting, tongue-in-hole action.",
        rating: 10,
    },
    {
        title: "Tentacles",
        description:
            "Slender appendages that happen to fill available holes. Bonus if cock-tentacles/oviposition/maw-type.",
        rating: 10,
    },
    {
        title: "Oviposition",
        description:
            "Eggs going in holes. Mainly ass and mouth, but some gentle urethral play is fine.",
        rating: 9,
    },
    {
        title: "Anal Vore",
        description:
            "Being engulfed by an anus. Think of War of The Worlds (2005) with the tripod opening.",
        rating: 9,
    },
    {
        title: "Tail Vore",
        description:
            "Being engulfed by a tail with some sort of opening. Think of Cell from DBZ.",
        rating: 9,
    },
    {
        title: "Goo/Slime",
        description:
            "Fluid substances of varying viscosity. Not much of a surprise, here!",
        rating: 9,
    },
    {
        title: "Absorption Vore",
        description:
            "Being engulfed by slime/goo and then absorbed. Think of Venom or Majin Buu.",
        rating: 8,
    },
    {
        title: "Muscle",
        description:
            "Figures with defined muscles. Not grotesquely-muscular, just a nice bit.",
        rating: 8,
    },
    {
        title: "Sweat",
        description:
            "Body persperation from working out or heavy activity. Great as an accent!",
        rating: 7,
    },
];

export const maybeKinks: Kink[] = [
    {
        title: "Musk",
        description:
            "Bodily scents. Preference in the lighter area, not the extreme/strong zone.",
        rating: 6,
    },
    {
        title: "Oral Sex",
        description:
            "Not super into receiving! Giving is great, but not specifically-sought.",
        rating: 6,
    },
    {
        title: "Fat",
        description:
            "Overweight body types. As long as it's not too much. This does not include muscle-guts.",
        rating: 5,
    },
];

export const noKinks: Kink[] = [
    {
        title: "Dainty",
        description: "Things that are cute/soft/feminine.",
        rating: 3,
    },
    {
        title: "Hyper",
        description: "Exaggerated body parts, usually genitals/muscle/fat.",
        rating: 1,
    },
    {
        title: "Pregnancy",
        description: "Any form of pregnancy either male/female.",
        rating: 0,
    },

    {
        title: "Bodily Waste",
        description: "Urine, feces, vomit, gas, stink.",
        rating: 0,
    },
    {
        title: "Fatal",
        description:
            "Anything involving death/dying in any form including implied.",
        rating: 0,
    },
    {
        title: "Harm",
        description:
            "Pain/Injury/Abuse/Damage/Blood. Anything that causes harm to one's health.",
        rating: 0,
    },
];

const sortKinks = (kinks: Kink[]) =>
    [...kinks].sort(
        (a, b) => b.rating - a.rating || a.title.localeCompare(b.title),
    );

export const kinkSections = [
    {
        label: "Yes",
        description: "These are preferences I'd like basically any time.",
        color: "text-green-600 dark:text-green-400",
        items: sortKinks(yesKinks),
    },
    {
        label: "Maybe",
        description:
            "Stuff that I don't have a strong opinion on or has a qualification to enjoy.",
        color: "text-yellow-600 dark:text-yellow-400",
        items: sortKinks(maybeKinks),
    },
    {
        label: "No",
        description:
            "Whatever is here, please don't bother. It's not for me, thank you.",
        color: "text-red-600 dark:text-red-400",
        items: sortKinks(noKinks),
    },
];
