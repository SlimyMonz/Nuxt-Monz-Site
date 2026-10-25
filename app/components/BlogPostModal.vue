<template>
    <UModal
        :title="blogPost?.title"
        :ui="{
            overlay: 'backdrop-blur-sm',
            content: 'max-w-3xl',
        }"
    >
        <template #body>
            <div
                v-if="blogPost"
                class="space-y-4"
            >
                <p class="text-sm text-muted justify-end">
                    Posted on {{ blogPost.date }}
                </p>

                <ClientOnly>
                    <div v-html="blogPost.body"></div>
                </ClientOnly>

                <div class="flex flex-wrap gap-2">
                    <UBadge
                        v-for="tag in blogPost.tags"
                        :key="tag"
                        :label="`#${tag}`"
                        color="primary"
                        variant="outline"
                        size="sm"
                    />
                </div>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
    import type { BlogPost } from "~/types/contentTypes";

    defineProps<{
        blogPost: BlogPost | null;
    }>();
</script>
