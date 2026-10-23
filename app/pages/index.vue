<template>
    <div>
        <SlimyHero
            :hero-info="heroInfo"
            :links="HeroLinks" />

        <USeparator />

        <UPageSection
            id="latestBlogPost"
            headline="New!"
            title="Latest Blog Post"
            description="Click to see the full post!"
            class="-my-8">
            <div>
                <UBlogPost
                    :key="latestPost.id"
                    :title="latestPost.title"
                    :date="latestPost.date"
                    class="transition hover:ring-4 hover:ring-secondary my-4"
                    @click="selectBlogPost(latestPost)" />
                <BlogPostModal
                    v-model:open="blogPostIsOpen"
                    :blogPost="selectedBlogPost" />
                <div class="flex justify-center">
                    <UButton
                        label="Click to See More Posts"
                        target="_self"
                        to="/blog"
                        icon="lucide:newspaper"
                        variant="outline" />
                </div>
            </div>
        </UPageSection>

        <!--
        <USeparator />
        <UPageSection>
            Put in some per-page hero-description boxes
        </UPageSection>
         -->

        <USeparator />

        <UPageSection
            id="badges"
            title="Badges"
            description="Links to other people's websites!"
            class="-my-5">
            <div class="flex flex-wrap justify-center gap-2">
                <UTooltip
                    v-for="(b, i) in badges"
                    :key="i"
                    :text="b.text">
                    <a
                        :href="b.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block">
                        <img
                            :src="b.img"
                            :alt="b.text"
                            width="176"
                            height="62"
                            class="[image-rendering:pixelated] transition hover:ring-4 hover:ring-secondary"
                            loading="lazy"
                            decoding="async" />
                    </a>
                </UTooltip>
            </div>
        </UPageSection>
    </div>
</template>
<script setup lang="ts">
    import { badges, HeroLinks, heroInfo } from "~/data/index";
    import { heroInfo as aboutHeroInfo } from "~/data/about";
    import { heroInfo as artHeroInfo } from "~/data/art";
    import { heroInfo as blogHeroInfo } from "~/data/blog";
    import { heroInfo as booksHeroInfo } from "~/data/books";
    import { heroInfo as charactersHeroInfo } from "~/data/characters";
    import { heroInfo as moviesHeroInfo } from "~/data/movies";
    import { heroInfo as musicHeroInfo } from "~/data/music";
    import { heroInfo as obituaryHeroInfo } from "~/data/obituary";
    import { heroInfo as photosHeroInfo } from "~/data/photos";
    import { heroInfo as recipesHeroInfo } from "~/data/recipes";

    import { BlogPosts } from "~/data/blog";
    import type { BlogPost } from "~/types/contentTypes";
    const latestPost = BlogPosts.at(-1)!;
    const selectedBlogPost = ref<BlogPost | null>(null);

    const blogPostIsOpen = computed({
        get: () => selectedBlogPost.value !== null,
        set: (value: boolean) => {
            if (!value) {
                selectedBlogPost.value = null;
            }
        },
    });

    function selectBlogPost(post: BlogPost) {
        selectedBlogPost.value = post;
    }
</script>
