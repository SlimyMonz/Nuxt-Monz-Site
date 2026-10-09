<template>
    <UModal
        :title="blogPost?.title"
        :ui="{
            overlay: 'backdrop-blur-sm',
        }"
    >
        <template #body>
            <div
                v-if="blogPost"
                class="space-y-4"
            >
            <ClientOnly>
                <div v-html="blogPost.body"></div>
            </ClientOnly>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
    import type { BlogPost } from "~/types/contentTypes";

    const props = defineProps<{
        blogPost: BlogPost | null;
    }>();

</script>
