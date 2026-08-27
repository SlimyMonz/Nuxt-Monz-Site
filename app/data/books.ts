export interface Book {
  title: string;
  author: string;
  date: string;
  img: string;
  description: string;
  url: string;
}

export const Books: Book[] = [
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu & Ken Liu",
    date: "2014",
    img: "/books/three_body_problem.jpg",
    description: `A slow burn that takes some patience to get into, but becomes an absolutely wild ride once it gets going. Strange, ambitious, and full of fascinating ideas.`,
    url: "https://books.apple.com/us/book/the-three-body-problem/id856893409",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    date: "2021",
    img: "/books/project_hail_mary.jpg",
    description: `Purely fun sci-fi with a great mix of suspense, humor, and heart. Not overly complicated, just an incredibly engaging and enjoyable read.`,
    url: "https://books.apple.com/us/book/project-hail-mary/id1526997052"
  },
];
