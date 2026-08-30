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
  {
    id: 2,
    title: "Two posts in one day!",
    date: "2026-08-22",
    body: `<p>I really REALLY wanted to get the Album Gallery thing working in the Photos section. You can check that out
    <a
        href="/photos"
        target="_blank"
        rel="noopener noreferrer"
        style="color: red; font-weight: bold;"
    >
        [ HERE ]
    </a></p><br>
    <p>Otherwise, not much else! I did add some theming, too. It's supposed to match my Monz colors with the black/red/white and some purple.
    Nothing is purple, yet! But that's because I don't think a lot of my stuff uses secondary colors. No big deal!</p><br>
    <p>OH YEAH. I did add some links in the footer. FurAffinity especially: I was suprised they had an icon in the simple-icons pack! Very very cool.
    Scroll on down to the footer at the bottom of the page to check it out~</p>
    <br>
    <p>UPDATE so I don't need to make another post: I made the ABOUT page, too! WOW!!!</p>
    `,
  },
  {
    id: 3,
    title: "SO MANY CODE CHANGES",
    date: "2026-08-23",
    body: `<p>I'm actually quite tired now, I spent my entire weekend writing up my website. Might take a break from work this upcoming week. Anyway, the new things!</p><br>
    <p>First off: I updated the About, Art, and Photos pages. They weren't great on mobile, but now they are!</p>
    <p>Second: Music page is pretty much done!
    I never meant for it to be anything ultra-fancy, just wanted to share the music I REALLY like.
    It's like... purely 10/10 albums.
    I still need to add more, but for now this is good.</p>
    `,
  },
  {
    id: 4,
    title: "Building the website still!",
    date: "2026-08-25",
    body: `<p>Currently stuck in meetings at work. Instead of letting time slip by as people talk about information that isn't directly related to me, I felt the need to stay productive.</p>
    <p>Generally, I don't have a very strong "grindset-mindset" attitude, but I really don't like sitting around doing nothing when I know I can do literally anything else.</p>
    <br>
    <p>Anyway! I have finished working on two pages. The first one seems kinda sad, but I made it because I want to remember people: an Obituary page.</p>
    <p>The other page I made is the Recipes page. Only four on there so far. I need to source more recipes! If you have any: <a href="mailto:web_recipe@monz.us" style="color: red; font-weight: bold;">send me an email.</a></p>
    `,
  },
  {
    id: 5,
    title: "At last... almost!",
    date: "2026-08-26",
    body: `Created the books and movies pages!!! Gonna keep this a short post because I still have the ACTUAL HOME PAGE to complete. But all of the others done! Now I can make the home page look real nice.`
  },
  {
    id: 6,
    title: "It's done! I did it! Yay!",
    date: "2026-08-27",
    body: `Here we go! My website is completed. At least, the basic bones of it is.
    I still plan to make some updates! For now, just little things like adding more books/movies/music to a page.
    At some point I'd like to have an animated background. There's this really cool UI suite called 'Inspira-UI' that has a silky-wavy animation.
    Also I still need to make a site badge! AUGGGHH. Pixel art is hard. Still, one step at a time! I'm just glad to have my site up and going.
    There's definitely a ton of optimizations I could make code-wise. Lots of reused text/components, but I don't really care about that.
    <br><br>
    I hope people like the site! And even if nobody sees it, I made it for myself anyway.`
  },
  {
    id: 7,
    title: "Added a few more things...",
    date: "2026-08-29",
    body: `...and started to actually enjoy my weekend! The website has a really cool background now. It came from <a href="https://shader.gallery/" style="color: red; font-weight: bold;">shader.gallery</a>.
    Getting the shader to work wasn't actually all that difficult. Many smarter people have done the hard work for me! What I did do is optimize it by restricting the resolution to 360p and FPS to 30. There's a 4-pixel blur to make it a lil smoother.
    <br>
    I also had to do a bunch of changes such as update how my data was represented and sorted. Now each page should be sorted as-expected!
    <br>
    At some point, I still want to update the Main home page. Specifically, the section that has the latest Art, Book, Movie, and Music.
    Ideally, it would be a bit prettier in some way with a lil description about the page and most recent material.
    <br>
    As for what I've been doing this weekend? Playing tons of a game called "Keep Digging." It's literally just a game about digging. I like it!
    <br>
    Dausty and I have been watching episodes of Demon Slayer. We finished the Entertainment District Arc and are now on the Swordsmith Village part. I really enjoy how the show's storytelling flows.
    <br>
    Anyway, thanks for visiting my site if you're reading this! Have a super cool day~
    <br><br>
    AUGH right before posting this I had to fix a nasty bug: These blog posts use v-html so I can post links etc inside the body. This was causing rendering issues!! Had to wrap it in a ClientOnly tag. Glad that's fixed!!!!`
  }
];
