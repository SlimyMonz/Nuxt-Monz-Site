export interface Movie {
  title: string;
  director: string;
  date: string;
  img: string;
  description: string;
  url: string;
}

export const movies: Movie[] = [
  {
    title: "Project Hail Mary",
    director: "Phil Lord, Christopher Miller",
    date: "2026",
    img: "/movies/project_hail_mary.jpg",
    description: `If you love the book, you'll love the movie. Nearly perfect adaptation as science-fiction.`,
    url: "https://tv.apple.com/us/movie/project-hail-mary/umc.cmc.7jxdlxvz304lj3iwhtrhbe8fv",
  },
  {
    title: "Midsommar",
    director: "Ari Aster",
    date: "2019",
    img: "/movies/midsommar.jpg",
    description: `Brightly-lit and colorful scenes somehow give off a sense of dread at every turn. Florence Pugh does wonderfully here.`,
    url: "https://tv.apple.com/us/movie/midsommar/umc.cmc.3btmmnmdi8cci3gb2qupxli8o",
  },
  {
    title: "Upgrade",
    director: "Leigh Whannell",
    date: "2018",
    img: "/movies/upgrade.jpg",
    description: `Unique lighting and fierce cinematography. Great sci-fi action movie that keeps the blood pumping.`,
    url: "https://tv.apple.com/us/movie/upgrade/umc.cmc.5y4gtzpaftor940ypobn1m0as",
  },
  {
    title: "Nightcrawler",
    director: "Dan Gilroy",
    date: "2014",
    img: "/movies/nightcrawler.jpg",
    description: `Dramatic and crazy. Jake Gyllenhaal portrays an insanely dark persona who will do nothing to get what he wants.`,
    url: "https://tv.apple.com/us/movie/nightcrawler/umc.cmc.1h8fjzqshxpg22pa0bm7iho27",
  },
  {
    title: "Triangle",
    director: "Christopher Smith",
    date: "2008",
    img: "/movies/triangle.jpg",
    description: `Shocking and tragic. What is supposed to be a vacation away from the pressures of life ends up becoming something worse.`,
    url: "https://tv.apple.com/us/movie/triangle/umc.cmc.5hcljk35jquf4c354pht2p8fw",
  },
  {
    title: "The Thing",
    director: "John Carpenter",
    date: "1982",
    img: "/movies/the_thing.jpg",
    description: `Horrifying terror. Crazy good practical effects. A must-watch for horror fans.`,
    url: "https://tv.apple.com/us/movie/the-thing/umc.cmc.70lpgfopfk3gr1pg7uux69znx",
  },

];
