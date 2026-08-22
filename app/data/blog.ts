interface BlogPost {
  id: number;
  title: string;
  date: string;
  body: string;
}

export const BlogPosts: BlogPost[] = [
  {
    id: 0,
    title: "First post!",
    date: "2026-08-20",
    body: "This is my first blog post! I wanted to have this here for some data until I make more of the site. This should be good for now until I do more!",
  },

  {
    id: 1,
    title: "Second post!?",
    date: "2026-08-22",
    body: `<p>Whoa! Second post! I created the <strong>Art page</strong> and now it's there! I went through a lot of iterations before I was happy with it.
    I tried having a fancy carousel of images, but it didn't look right and it was kinda repetitive visually.</p><br>
    <p>Using <strong>Nuxt/NuxtUI</strong> is nice, but after creating the manifest for all of the images... kinda feels silly to even use Nuxt when most of the work was done by hand.
    Sure, I can use a <code>v-for</code> loop to make each gallery, but honestly copy/pasting a <code>div</code> isn't as hard as writing 700 lines just to model photo URLs and directories.
    There's an easier way to generate a manifest on build, but I low key got confused by it and I didn't want to spend a whole week troubleshooting a simple idea.
    Basically: <strong>It's my fault! Oh well!</strong></p><br>
    <p>If you want, you can look at the source code for the art page: 
        <a
            href="https://codeberg.org/Monz/nuxt-monz-site/src/branch/main/app/pages/art.vue"
            target="_blank"
            rel="noopener noreferrer"
            style="color: red; font-weight: bold;"
        >
            [ HERE ]
        </a>
    </p>
    <p>Oh also you'll probably notice I'm using some fancier styling here in the post already~ <strong>THE POWER OF HTML!</strong> </p>`,
  },
];
