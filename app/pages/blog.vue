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

        <div class="flex flex-wrap gap-2 mb-4">
            <UButton
                :variant="tags.length === 0 ? 'solid' : 'outline'"
                color="primary"
                class="rounded-full px-4"
                @click="clearTags"
            >
                All
            </UButton>

            <UButton
                v-for="tag in allTags"
                :key="tag"
                :variant="tags.includes(tag) ? 'solid' : 'outline'"
                color="primary"
                class="rounded-full px-4 transition duration-300 hover:-translate-y-0.5"
                @click="toggleTag(tag)"
            >
                {{ tag }}
                <UBadge
                    :label="String(countFor(tag))"
                    color="neutral"
                    variant="subtle"
                    size="sm"
                    class="rounded-full"
                />
            </UButton>
        </div>

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
        >
            <template
                v-if="post.tags?.length"
                #description
            >
                <div class="flex flex-wrap mt-4 gap-x-2">
                    <UBadge
                        v-for="tag in post.tags"
                        :key="tag"
                        :label="`#${tag}`"
                        color="primary"
                        variant="outline"
                        size="sm"
                    />
                </div>
            </template>
        </UBlogPost>

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
    import type { BlogPost } from "~/types/contentTypes";
    import { Tag } from "~/types/contentTypes";

    const itemsPerPage = 10;
    const page = ref(1);
    const search = ref("");
    const tags = ref<Tag[]>([]);

    const allTags = Object.values(Tag);

    const sortedBlogPosts = computed(() =>
        [...BlogPosts].sort((a, b) => b.id - a.id),
    );

    function matchesSearch(post: BlogPost) {
        const query = search.value.trim().toLowerCase();
        return (
            !query || `${post.title} ${post.body}`.toLowerCase().includes(query)
        );
    }

    const filteredBlogPosts = computed(() =>
        sortedBlogPosts.value.filter((post) => {
            const matchesTags =
                tags.value.length === 0 ||
                tags.value.some((tag) => post.tags?.includes(tag)); // any selected tag
            // use .every(...) instead if posts must have ALL selected tags

            return matchesSearch(post) && matchesTags;
        }),
    );

    const paginatedBlogPosts = computed(() => {
        const start = (page.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredBlogPosts.value.slice(start, end);
    });

    // Counts reflect the current search text
    function countFor(tag: Tag) {
        return sortedBlogPosts.value.filter(
            (post) => matchesSearch(post) && post.tags?.includes(tag),
        ).length;
    }

    function toggleTag(tag: Tag) {
        tags.value = tags.value.includes(tag)
            ? tags.value.filter((t) => t !== tag)
            : [...tags.value, tag];
    }

    function clearTags() {
        tags.value = [];
    }

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
