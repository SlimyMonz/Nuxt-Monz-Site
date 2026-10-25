<template>
    <div>
        <SlimyHero :hero-info="heroInfo" />

        <UInput
            v-model="search"
            icon="i-lucide-search"
            size="md"
            variant="outline"
            placeholder="Search Posts..."
            class="mb-4"
        />

        <UPagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total="filteredBlogPosts.length"
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
            :total="filteredBlogPosts.length"
            show-edges
        />

        <BlogPostModal
            v-model:open="isOpen"
            :blogPost="selected"
        />
    </div>
</template>

<script setup lang="ts">
    import { BlogPosts, heroInfo } from "~/data/blog";
    import type { BlogPost, Tag } from "~/types/contentTypes";

    const itemsPerPage = 10;
    const page = ref(1);
    const search = ref("");
    const tags = ref<Tag[]>([]);

    const sortedBlogPosts = computed(() => {
        return [...BlogPosts].sort((a, b) => b.id - a.id);
    });

    const filteredBlogPosts = computed(() => {
        const query = search.value.trim().toLowerCase();

        return sortedBlogPosts.value.filter((post) => {
            const matchesSearch =
                !query ||
                `${post.title} ${post.body}`.toLowerCase().includes(query);

            const matchesTags =
                tags.value.length === 0 ||
                tags.value.some((tag) => post.tags?.includes(tag));

            return matchesSearch && matchesTags;
        });
    });

    const paginatedBlogPosts = computed(() => {
        const start = (page.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredBlogPosts.value.slice(start, end);
    });

    // URL-based blog posts being opened and closed
    const route = useRoute();
    const router = useRouter();

    const selected = computed<BlogPost | null>(() => {
        const id = Number(route.query.post);
        if (!route.query.post || Number.isNaN(id)) return null;
        return BlogPosts.find((p) => p.id === id) ?? null;
    });

    const isOpen = computed({
        get: () => selected.value !== null,
        set: (value: boolean) => {
            if (!value) {
                const { post, ...rest } = route.query;
                router.push({ query: rest });
            }
        },
    });

    function selectPost(post: BlogPost) {
        router.push({ query: { ...route.query, post: post.id } });
    }

    // If you start a search or click a tag on Page X, go back to page 1.
    watch(
        [search, tags],
        () => {
            page.value = 1;
        },
        { deep: true },
    );
</script>
