<template>
    <UPageHero
        headline="NEW"
        title="Monz Website"
        description="Welcome! I hope you like my site. I put in a lot of time and effort to make something just for me. Feel free to click around and check things out!"
        :links="HeroLinks"
    />

    <USeparator />

    <UPageSection
        id="latest"
        headline="New!"
        title="Latest Stuff"
        description="Click one to see more!"
        class="-my-5"
    >
        <ULink to="/blog" target="_self">
            <UCard
                title="Blog Post"
                class="transition hover:ring-4 hover:ring-secondary"
                :ui="{ body: 'p-0 sm:p-0' }"
            >
                <UBlogPost
                    :key="latestPost.id"
                    :title="latestPost.title"
                    :date="latestPost.date"
                    variant="ghost"
                    orientation="vertical"
                >
                    <template #description>
                    <ClientOnly>
                        <div v-html="latestPost.body" />
                    </ClientOnly>
                    </template>
                </UBlogPost>
            </UCard>
        </ULink>

        <UPageGrid
            class="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
        >
            <ULink to="/art" title="Art" target="_self">
                <UCard
                    :key="latestArt?.id"
                    title="ART"
                    class="overflow-hidden transition hover:ring-4 hover:ring-secondary"
                    :ui="{ body: 'p-0 sm:p-0' }"
                >
                    <img
                        :src="latestArt?.thumb"
                        :alt="latestArt?.id"
                        class="block w-full h-auto"
                        loading="lazy"
                        decoding="async"
                    />
                </UCard>
            </ULink>

            <ULink to="/books" :title="latestBook?.title" target="_self">
                <UCard
                    class="transition hover:ring-4 hover:ring-secondary"
                    title="BOOK"
                    :ui="{ body: 'p-0 sm:p-0' }"
                >
                    <img
                        :src="latestBook.img"
                        :alt="`${latestBook.title} by ${latestBook.author}`"
                        class="w-full object-cover block"
                        loading="lazy"
                        decoding="async"
                    />
                    <template #footer>
                        <div class="flex flex-col gap-0.5">
                            <h2
                                class="text-left uppercase text-lg text-highlighted truncate"
                            >
                                {{ latestBook.title }}
                            </h2>
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-left truncate">
                                    {{ latestBook.author }}
                                </span>
                                <span class="text-right">
                                    {{ latestBook.date }}
                                </span>
                            </div>
                        </div>
                        <USeparator class="my-1" />
                        <p>
                            {{ latestBook.description }}
                        </p>
                    </template>
                </UCard>
            </ULink>

            <ULink to="/movies" :title="latestMovie?.title" target="_self">
                <UCard
                    class="transition hover:ring-4 hover:ring-secondary"
                    title="MOVIE"
                    :ui="{ body: 'p-0 sm:p-0' }"
                >
                    <img
                        :src="latestMovie.img"
                        :alt="`${latestMovie.title} by ${latestMovie.director}`"
                        class="w-full object-cover block"
                        loading="lazy"
                        decoding="async"
                    />
                    <template #footer>
                        <div class="flex flex-col gap-0.5">
                            <h2
                                class="text-left uppercase text-lg text-highlighted truncate"
                            >
                                {{ latestMovie.title }}
                            </h2>
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-left truncate">
                                    {{ latestMovie.director }}
                                </span>
                                <span class="text-right">
                                    {{ latestMovie.date }}
                                </span>
                            </div>
                        </div>
                        <USeparator class="my-1" />
                        <p>
                            {{ latestMovie.description }}
                        </p>
                    </template>
                </UCard>
            </ULink>
            <ULink to="/music" :title="latestAlbum?.title">
                <UCard
                    class="transition hover:ring-4 hover:ring-secondary"
                    title="MUSIC"
                    :ui="{ body: 'p-0 sm:p-0' }"
                >
                    <img
                        :src="latestAlbum.img"
                        :alt="`${latestAlbum.title} by ${latestAlbum.artist}`"
                        class="w-full object-cover block"
                        loading="lazy"
                        decoding="async"
                    />
                    <template #footer>
                        <div class="flex flex-col gap-0.5">
                            <h2
                                class="text-left uppercase text-lg text-highlighted truncate"
                            >
                                {{ latestAlbum.title }}
                            </h2>
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-left truncate">
                                    {{ latestAlbum.artist }}
                                </span>
                                <span class="text-right">
                                    {{ latestAlbum.year }}
                                </span>
                            </div>
                        </div>
                        <USeparator class="my-1" />
                        <p>
                            {{ latestAlbum.description }}
                        </p>
                    </template>
                </UCard>
            </ULink>
        </UPageGrid>
    </UPageSection>

    <USeparator />

    <UPageSection
        id="badges"
        title="Badges"
        description="Links to other people's websites!"
        class="-my-5"
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
                        loading="lazy"
                        decoding="async"
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
import { Albums } from "~/data/music";

const latestPost = BlogPosts.at(-1)!;
const latestArt = [...ArtManifest].at(-1)!.files.at(-1);
const latestBook = Books.at(-1)!;
const latestMovie = Movies.at(-1)!;
const latestAlbum = [...Albums]
    .sort((a, b) => Number(a.year) - Number(b.year))
    .at(-1)!;
</script>
