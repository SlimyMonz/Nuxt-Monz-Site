<template>
    <UPageHero
        id="top"
        headline="Personal Blog"
        title="Monster Talks"
        description="News, ramblings, thoughts, etc.">
    </UPageHero>
    <UPagination
        v-model:page="page"
        :items-per-page="itemsPerPage"
        :total="sortedBlogPosts.length"
        show-edges />
    <UBlogPost
        v-for="post in paginatedBlogPosts"
        :key="post.id"
        :title="post.title"
        :date="post.date"
        class="my-5">
        <template #description>
            <ClientOnly>
                <div v-html="post.body"></div>
            </ClientOnly>
        </template>
    </UBlogPost>
    <UPagination
        v-model:page="page"
        :items-per-page="itemsPerPage"
        :total="sortedBlogPosts.length"
        show-edges />
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
