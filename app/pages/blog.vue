<template>
    <UPageHero
        id="top"
        headline="Personal Blog"
        title="Monster Talks"
        description="News, ramblings, thoughts, etc."
    >
    </UPageHero>
    <UPage>
        <UPageBody>
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
                :date="post.date + 'T00:00:00-04:00'"
                orientation="vertical"
            >
                <template #description>
                    <div v-html="post.body" />
                </template>
            </UBlogPost>
            <div class="flex-1" />
            <UPagination
                v-model:page="page"
                :items-per-page="itemsPerPage"
                :total="sortedBlogPosts.length"
                show-edges
            />
        </UPageBody>
    </UPage>
</template>

<script setup lang="ts">
import { BlogPosts } from "~/data/blog";

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
</script>
