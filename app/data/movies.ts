export interface Movie {
  title: string;
  director: string;
  date: string;
  img: string;
  description: string;
  url: string;
}

export const Movies: Movie[] = [
  {
    title: "The Thing",
    director: "John Carpenter",
    date: "1982",
    img: "/movies/the_thing.jpg",
    description: `Horrifying, tense, and packed with some of the best practical effects ever put to film. An absolute must-watch for horror fans.`,
    url: "https://tv.apple.com/us/movie/the-thing/umc.cmc.70lpgfopfk3gr1pg7uux69znx",
  },
  {
    title: "Triangle",
    director: "Christopher Smith",
    date: "2008",
    img: "/movies/triangle.jpg",
    description: `Shocking and tragic. What begins as a vacation away from the pressures of everyday life slowly turns into something far more sinister.`,
    url: "https://tv.apple.com/us/movie/triangle/umc.cmc.5hcljk35jquf4c354pht2p8fw",
  },
  {
    title: "Nightcrawler",
    director: "Dan Gilroy",
    date: "2014",
    img: "/movies/nightcrawler.jpg",
    description: `Dark, disturbing, and completely captivating. Jake Gyllenhaal delivers an incredible performance as a man willing to do almost anything to get what he wants.`,
    url: "https://tv.apple.com/us/movie/nightcrawler/umc.cmc.1h8fjzqshxpg22pa0bm7iho27",
  },
  {
    title: "Upgrade",
    director: "Leigh Whannell",
    date: "2018",
    img: "/movies/upgrade.jpg",
    description: `Stylish lighting, fierce cinematography, and plenty of brutal action. A fantastic sci-fi thriller that never lets the adrenaline drop.`,
    url: "https://tv.apple.com/us/movie/upgrade/umc.cmc.5y4gtzpaftor940ypobn1m0as",
  },
  {
    title: "Midsommar",
    director: "Ari Aster",
    date: "2019",
    img: "/movies/midsommar.jpg",
    description: `Bright, colorful, and beautiful on the surface, yet somehow filled with dread at every turn. Florence Pugh is phenomenal.`,
    url: "https://tv.apple.com/us/movie/midsommar/umc.cmc.3btmmnmdi8cci3gb2qupxli8o",
  },
  {
    title: "Project Hail Mary",
    director: "Phil Lord, Christopher Miller",
    date: "2026",
    img: "/movies/project_hail_mary.jpg",
    description: `If you loved the book, you'll love the movie. A remarkably faithful adaptation that brings the heart and excitement of the story to film.`,
    url: "https://tv.apple.com/us/movie/project-hail-mary/umc.cmc.7jxdlxvz304lj3iwhtrhbe8fv",
  },
];