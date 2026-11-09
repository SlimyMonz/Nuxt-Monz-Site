export const heroInfo: HeroInfo = {
    headline: "Secret!",
    title: "Fetishes and Kinks",
    description: "Sexual preferences! Rated and organized by personal opinion.",
};

const favoriteSpecies = [
    {
        title: "Scalie",
        variants: [
            "Dragon",
            "Lizard",
            "Kobold",
            "Alligator",
            "Snake",
            "Naga",
            "Dinosaur",
        ],
    },
    {
        title: "Alien",
        variants: [
            "Sangheili",
            "Xenomorph",
            "Krogan",
            "Turian",
            "Yautja",
            "Symbiote",
        ],
    },
    {
        title: "Monster",
        variants: ["Goo Creature", "Cryptid", "Skullhead", "Skeletal"],
    },
    {
        title: "Others",
        variants: ["Insect", "Robot", "Plant", "Shark"],
    },
    {
        title: "Demon",
        variants: [
            "Incubus",
            "Succubus",
            "Saytr",
            "Wendigo",
            "Capra",
            "Taurus",
        ],
    },
    {
        title: "Mammal",
        variants: [
            "Bull",
            "Minotaur",
            "Wolf",
            "Orca",
            "Charr",
            "Werewolf",
            "Beastren",
            "Avian",
        ],
    },
];

export const species = favoriteSpecies
    .map((group) => ({
        ...group,
        variants: [...group.variants].sort((a, b) => a.localeCompare(b)),
    }))
    .sort((a, b) => {
        if (a.title === "Others") return 1;
        if (b.title === "Others") return -1;
        return a.title.localeCompare(b.title);
    });

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
        title: "Overweight",
        description:
            "Fat/heavy/large/rotund body types. As long as it's not too much, it's usually just okay. This does not include muscle-guts.",
        rating: 5,
    },
    {
        title: "Macro/Micro",
        description:
            "Extreme big/small size. Only reason this is maybe is if just with implication instead of focus. Aurelion Sol in space, for example.",
        rating: 4,
    },
    {
        title: "Non-con/Dub-con",
        description:
            "Where consent is in a gray area. I'm fine with basic dubious consent, but nothing hardcore like a complete lack of consent.",
        rating: 4,
    },
];

export const noKinks: Kink[] = [
    {
        title: "Dainty",
        description: "Things that are cute/soft/feminine.",
        rating: 3,
    },
    {
        title: "Pup/Pet Play",
        description: "Acting like a pet and/or wearing a pet hood (pup hood).",
        rating: 2,
    },
    {
        title: "Hyper",
        description: "Exaggerated body parts, usually genitals/muscle/fat.",
        rating: 2,
    },
    {
        title: "Pregnancy",
        description: "Any form of pregnancy and breeding either male/female.",
        rating: 1,
    },
    {
        title: "Baby",
        description: "Diapers/Age-play/Acting like a baby.",
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

export const questionsAndAnswers: QuestionsAndAnswers[] = [
    {
        question: "Wait... aren't you asexual?",
        answer: "Yeah, for real-life people. This is all for fantasy stuff.",
    },
    {
        question: "I don't see [KINK] in a section! Does that mean you're [YES/MAYBE/NO]?",
        answer: "No. Don't assume anything that's missing. Feel free to email if you're extremely curious."
    },
    {
        question: "I have a kink that you don't like. Do you hate me?",
        answer: "Most likely not! If you bother me with those, I won't like you very much for it."
    },
    {
        question: "Can I sexually harass you now that I've seen this?",
        answer: "Please don't. At least wait until we're established as friends."
    },
    {
        question: "Are you worried person/work/family will see this?",
        answer: "I'm an adult and I don't care. You have to go out of your way to find this."
    }
]