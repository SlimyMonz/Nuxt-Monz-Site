<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />
    <UPagination
        v-model:page="page"
        :items-per-page="itemsPerPage"
        :total="sortedBlogPosts.length"
        show-edges
    />

    <UBlogPost
        v-for="post in paginatedBlogPosts"
        :key="post.id"
        :title="post.title"
        :date="post.date"
        class="transition hover:ring-4 hover:ring-secondary my-4"
        @click="selectPost(post)"
    />

    <UPagination
        v-model:page="page"
        :items-per-page="itemsPerPage"
        :total="sortedBlogPosts.length"
        show-edges
    />

    <BlogPostModal
        v-model:open="isOpen"
        :blogPost="selected"
    />
</template>

<script setup lang="ts">
    import { BlogPosts, heroInfo } from "~/data/blog";
    import type { BlogPost } from "~/types/contentTypes";

    const page = ref(1);
    const itemsPerPage = 10;

    const sortedBlogPosts = computed(() => {
        return [...BlogPosts].sort((a, b) => b.id - a.id);
    });

    const paginatedBlogPosts = computed(() => {
        const start = (page.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return sortedBlogPosts.value.slice(start, end);
    });

    const selected = ref<BlogPost | null>(null);

    const isOpen = computed({
        get: () => selected.value !== null,
        set: (value: boolean) => {
            if (!value) {
                selected.value = null;
            }
        },
    });

    function selectPost(post: BlogPost) {
        selected.value = post;
    }
</script>
