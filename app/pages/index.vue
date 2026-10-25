<template>
    <div>
        <SlimyHero
            :hero-info="heroInfo"
            :links="HeroLinks"
        />

        <USeparator />

        <UPageSection
            id="latestBlogPost"
            headline="New"
            title="Latest Post"
            description="Thoughts, updates, and stuff."
            class="-my-8"
        >
            <div class="mx-auto w-full max-w-2xl">
                <UBlogPost
                    :key="latestPost.id"
                    :title="latestPost.title"
                    :date="latestPost.date"
                    variant="subtle"
                    class="transition hover:ring-4 hover:ring-secondary my-4"
                    @click="selectBlogPost(latestPost)"
                >
                    <template
                        v-if="latestPost.tags?.length"
                        #description
                    >
                        <div class="flex flex-wrap mt-4 gap-x-2">
                            <UBadge
                                v-for="tag in latestPost.tags"
                                :key="tag"
                                :label="`#${tag}`"
                                color="primary"
                                variant="outline"
                                size="sm"
                            />
                        </div>
                    </template>
                </UBlogPost>

                <BlogPostModal
                    v-model:open="blogPostIsOpen"
                    :blogPost="selectedBlogPost"
                />

                <div class="mt-6 flex justify-center">
                    <UButton
                        label="View all posts"
                        to="/blog"
                        icon="lucide:arrow-right"
                        trailing
                        variant="ghost"
                        color="secondary"
                    />
                </div>
            </div>
        </UPageSection>

        <USeparator />

        <UPageSection
            id="pageFeatures"
            headline="DIRECTORY"
            title="All Pages"
            description="These are the places that exist on my site! You can navigate (most) of them on the top navigation bar, too."
            class="-my-8"
            :features="pageFeatureProps"
        />

        <USeparator />

        <UPageSection
            id="badges"
            title="Badges"
            description="Links to other people's websites!"
            class="-my-4"
        >
            <div class="flex flex-wrap justify-center gap-2">
                <UTooltip
                    v-for="(b, i) in badges"
                    :key="i"
                    :text="b.text"
                >
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
    </div>
</template>
<script setup lang="ts">
    import {
        badges,
        HeroLinks,
        heroInfo,
        pageFeatureProps,
    } from "~/data/index";

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
