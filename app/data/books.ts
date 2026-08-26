export interface Book {
  title: string;
  author: string;
  date: string;
  img: string;
  description: string;
  url: string;
}

export const books: Book[] = [
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    date: "2021",
    img: "/books/project_hail_mary.jpg",
    description: "Purely fun sci-fi with a touch of suspense and a lot of heart. Engaging without being sophisticated.",
    url: "https://books.apple.com/us/book/project-hail-mary/id1526997052"
  },
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu & Ken Liu",
    date: "2014",
    img: "/books/three_body_problem.jpg",
    description: `A slow-starting science fiction story that really starts to take off once it gets going. Will need to be patient at first, but ends up being a wild ride.`,
    url: "https://books.apple.com/us/book/the-three-body-problem/id856893409",
  },
];
