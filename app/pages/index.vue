<template>
    <UPageHero
        headline="WORK IN PROGRESS"
        title="Main Index Page"
        description="Eventually there will be a collection of the other pages summarized in here in a fun way."
        :links="HeroLinks"
    />

    <USeparator/>

    <UPageSection
        id="latest-post"
        headline="Ramblings and Such"
        title="Latest Post"
        description="Click the post to see more!"
    >
        <ULink to="/blog">
            <UBlogPost
                :key="latestPost.id"
                :title="latestPost.title"
                :date="latestPost.date"
                class="transition hover:ring-4 hover:ring-secondary"
                orientation="vertical"
            >
                <template #description>
                    <div v-html="latestPost.body" />
                </template>
            </UBlogPost>
        </ULink>
    </UPageSection>

    <USeparator/>

    <UPageSection
        id="badges"
        title="Badges"
        description="Links to other people's websites!"
    >
        <div class="flex flex-wrap justify-center gap-2">
            <UTooltip v-for="(b, i) in badges" :key="i" :text="b.text">
                <a
                    :href="b.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block"
                >
                    <img
                        :src="b.img"
                        :alt="b.text"
                        width="176"
                        height="62"
                        class="[image-rendering:pixelated] transition hover:ring-4 hover:ring-secondary"
                    />
                </a>
            </UTooltip>
        </div>
    </UPageSection>
</template>
<script setup lang="ts">
import { badges, HeroLinks } from "~/data/index";
import { BlogPosts } from "~/data/blog";
import { ArtManifest } from "~/data/art";
import { Books } from "~/data/books";
import { Movies } from "~/data/movies";

const latestPost = BlogPosts.at(-1)!;

const latestArt = ArtManifest.at(-1)!;
const latestBook = Books.at(-1)!;
const latestMovie = Movies.at(-1)!;
</script>
