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
                <div class="flex items-center justify-between gap-y-1">
                    <p class="text-sm text-muted">{{ blogPost.date }}</p>
                    <div class="flex flex-wrap justify-end gap-2">
                        <UBadge
                            v-for="tag in blogPost.tags"
                            :key="tag"
                            :label="`#${tag}`"
                            color="neutral"
                            variant="subtle"
                            size="sm"
                        />
                    </div>
                </div>

                <USeparator />

                <ClientOnly>
                    <div v-html="blogPost.body"></div>
                </ClientOnly>
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
