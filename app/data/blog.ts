import type { BlogPost } from "~/types/contentTypes";

export const BlogPosts: BlogPost[] = [
    {
        id: 0,
        title: "First post!",
        date: "2026-08-20",
        body: `This is my first blog post! I wanted to have this here for some data until I make more of the site. This should be good for now until I do more!"
        `,
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
        <p>Oh also you'll probably notice I'm using some fancier styling here in the post already~ <strong>THE POWER OF HTML!</strong> </p>
        `,
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
        body: `Created the books and movies pages!!! Gonna keep this a short post because I still have the ACTUAL HOME PAGE to complete. But all of the others done! Now I can make the home page look real nice.
        `,
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
        I hope people like the site! And even if nobody sees it, I made it for myself anyway.
        `,
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
        AUGH right before posting this I had to fix a nasty bug: These blog posts use v-html so I can post links etc inside the body. This was causing rendering issues!! Had to wrap it in a ClientOnly tag. Glad that's fixed!!!!
        `,
    },
    {
        id: 8,
        title: "Wow, it's the twin tower date!",
        date: "2026-09-11",
        body: `Haven't made a ton of updates to the website this time! I did some code cleanup and refactoring, but nothing crazy.
        Though, I haven't even added any new movies/music/books. TBF, that's because I haven't seen or listened to any worth adding, yet.
        I do plan to read the next book in the Three Body Problem series. I didn't even know it was a trilogy until my coworker told me.
        <br><br>
        Anyway, yeah! It's <a style="color: red; font-weight: bold;"> 9/11!!!!!!!!</a> That's all I have to say about it.
        <br><br>
        Something I'm excited for coming up is the Mac mini I ordered. It's my first top-of-the-line Apple computer! I opted for the M6 with 32GB of RAM, 2TB of storage, and 10Gbps ethernet.
        I plan to have it for a decade as my 'everything except games' desktop. Going to have all of my files on it locally, with iCloud sync, and MEGA Backups. Plus, I can use it as a media server!
        With my lifestyle, I've found that I don't play games as much anymore. I like hanging with my family, watching videos, listening to music, etc.
        Gaming is still a large part of my life, but I don't need my giant desktop PC setup to be running 24/7 and using a ton of electricity while only browsing the internet.
        Basically: I wanted something low-power that can store all my files and be used for everyday computing until I need my PC for gaming.
        I feel very privileged now. Hell, when I was working retail, I had to choose between getting ONE smart item! From: PC/console/laptop/TV/smartphone and you can only choose ONE. Bad times back then!
        There was a point where I was trying to consider selling my Macbook Neo and get a Macbook Pro, but holy fuck it would be like $3000 to do that with the specs I need. It was actually cheaper to keep the Neo!
        <br><br>
        Maybe nobody is asking this question: "Why are you moving away from Linux?" and I'm not! I promise!!! It's just that iPhone is the best phone for my life until Linux phone becomes a thing.
        I'll be real: I fucking hate Google. I hate them and everything they're about. I also hate Microsoft with a passion. But specifically Google, because they're doing a lot of stupid shit with Android.
        Android could have been perfect if it wasn't for Google. Their whole iOS-ification of Android ruined it. Android 17 is the end of third-party app installs.
        Obviously, there will be workarounds, but every year they make it harder. And honestly? I don't care to keep up with it. The other issue I have is with Android Developers.
        There are a handful of them that are good beans, but most suck so hard. So many apps are AI-coded slop. Plus I'll be real, Android app dev sucks as a whole. It's quite a fragile process. 
        Speaking of AI, Android is turning into this horrible AI-focused platform. Because of Google, it's one of the most invasive privacy-killing platforms that mine your data and force AI on ya.
        Let's be real: Apple isn't the savior of mankind in this regard or anything. But with every single company forcing slop in our faces, I will admit Apple's seems the least offensive.
        That's not a high bar, nor even good, but it's edible slop compared to the competition. So in the battle of the least evils, I'll take it. Ideally, I'd have a Linux phone with none of it.
        But we don't live in that world. <b>There is no Linux Phone that matters today.</b> This isn't to be mean to the devs currently working to make it happen. I'm sure they're fully aware.
        <b>ANYWAY</b> all that to say nobody makes a phone I care to use except Apple.
        <br><br>
        Oh right, Apple released their new stuff the other day. Or should I say, they released the iPhone Duo and pretty much nothing else.
        I'm actually surprised they didn't release even a minor chipset upgrade to the 17/Air. But they did increase prices! Cool, my iPhone Air is worth more than I bought it.
        I will say that the iPhone Duo seems pretty neat. And I am tempted to give it a shot, but I still have my general reservation about foldables. The price, for one.
        Yes, it's $2000 for 256GB of Storage (should have started at 1TB IMO), but it's still a folding phone with moving parts. I suppose only time will tell on how long it lasts.
        Or I'll watch one of those YouTube channels that destroys phones. I'd like to think Apple being late to the game means they've spent all this time on R&D in a way nobody else has.
        Will I actually get one? There's a high chance I'll go to BestBuy, play with it a bit, and then decide there and then. Will I need one? Absolutely not. I just like playing with new toys.
        <br><br>
        Right! I've been playing with old toys! Been using my GBA SP emulator portable thingy (RG35XXSP?) to play some GBA romhacks.
        Recently beat both Aria of Sorrow Alter and Metroid: Desolation. Both are really good! The Castlevania game is a nice lil remix of Aria of Sorrow's map with more difficulty.
        The Metroid game is quite good and fairly polished. I wouldn't call it Nintendo-polished, but it's quite well-made. VERY large maps and tons of hidden items. Even power-ups are hidden!
        It does have a "new game plus" type of deal where you restart the game on a new-game difficulty called "true ending" that I need to play through and try. I think I'll give it a go!
        <br><br>
        That's all for now I suppose! Been nice catching up here and using my lil blog as a diary for today. Can't say I'll do this often, but it does feel relaxing to do. Take care~
        `,
    },
];
