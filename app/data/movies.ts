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
    title: "UPGRADE",
    director: "Leigh Whannell",
    date: "2018",
    img: "/movies/upgrade.jpg",
    description: `Unique lighting and fierce cinematography. Great sci-fi action movie that keeps the blood pumping.`,
    url: "https://tv.apple.com/us/movie/upgrade/umc.cmc.5y4gtzpaftor940ypobn1m0as",
  },
  {
    title: "Project Hail Mary",
    director: "Phil Lord, Christopher Miller",
    date: "2026",
    img: "/movies/project_hail_mary.jpg",
    description: `If you love the book, you'll love the movie. Nearly perfect adaptation as a science-fiction movie.`,
    url: "https://tv.apple.com/us/movie/project-hail-mary/umc.cmc.7jxdlxvz304lj3iwhtrhbe8fv",
  },

];
