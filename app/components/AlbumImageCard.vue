<template>
    <UCard
        :ui="{
            root: 'size-full',
            body: 'p-0 sm:p-0 size-full flex items-center justify-center',
        }"
        class="group aspect-square w-full cursor-pointer overflow-hidden transition hover:ring-4 hover:ring-secondary">
        <img
            :src="image.thumbPath"
            :alt="`${title} photo ${image.id}`"
            class="size-full object-cover"
            loading="lazy"
            decoding="async" />
    </UCard>
</template>

<script setup lang="ts">
    import type { ImageFile } from "~/types/imageCollectionTypes";

    defineProps<{
        title: string;
        image: ImageFile;
    }>();
</script>
