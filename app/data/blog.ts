interface BlogPost {
  title: string;
  date: Date;
  body: string;
}

export const BlogPosts: BlogPost[] = [
  {
    title: "First post!",
    date: new Date("2026-08-20"),
    body: "This is my first blog post! I wanted to have this here for some data until I make more of the site. This should be good for now until I do more!",
  },

];
