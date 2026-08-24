interface obituary {
  name: string;
  dates: string;
  cause: string;
  memento: string;
  img: string;
}

export const obituaries: obituary[] = [
  {
    name: "Kari Schlegel",
    dates: "1992 - 2016",
    cause: "Killed by a Drunk Driver",
    memento: `Kari graduated from High School in 2010 and went on to earn an associate degree in graphic design in 2012, a first step into a life of quiet creativity.
    She found joy in the small, steady things: caring for others as a dietary aide, creating melodies from her flute, sketching personalized designs, and losing herself in video games.
    Kari was a kind heart and a gentle spirit, ready to lift up those the world had been unkind to. Her life was extinguished far too soon.
    Kari is loved and missed by her friends and family.`,
    img: "/obituary/kari_schlegel.jpg",
  },
  {
    name: "Katharine Pelliccioni",
    dates: "1992 - 2016",
    cause: "Drug Overdose",
    memento: `Katharine moved through the world as an artist first, her quirky, radiant spirit drawing friends to her like moths to a porch light.
    Her tastes wandered as freely as her imagination: eclectic music, long afternoons lost in The Sims 2 or the endless scroll of YouTube, and a tender fascination with the strange and macabre.
    Her rats were never far from her side, small companions in a world she saw a little differently than most.
    Though she is gone, she is loved by her friends and family.`,
    img: "/obituary/katharine_pelliccioni.jpg",
  },
  {
    name: "Marianne Hornyak",
    dates: "1931 - 2025",
    cause: "Natural Causes",
    memento: `Marianne spent a lifetime shaping young minds as a devoted and deeply respected teacher, and worked hard as a loving mother to her daughters.
    Rooted in Pennsylvania for nearly the whole of her long life, she was ahead of her time: an advocate for human rights, offering warmth to anyone who needed it.
    She lived to see nearly an entire century, surrounded always by love. Marianne will be dearly missed by family, friends, and the entire community.`,
    img: "/obituary/marianne_hornyak.jpg",
  },
  {
    name: "Marlys Greer",
    dates: "1966 - 2020",
    cause: "Complications from Drug Use",
    memento: `Marlys carried herself with a fire that never quite went out. Fierce and unyielding, yet always ready to celebrate life's smallest joys.
    Hers was not an easy road; the wounds of a childhood marked by cruelty within her own family followed her long into adulthood, and she bore that weight with a resilience few could imagine.
    In time, the burden grew heavier than she could carry, but it is not her death that defines her memory. Marlys is loved and missed. She is survived by her two sons.`,
    img: "/obituary/marlys_greer.jpg",
  },
];
