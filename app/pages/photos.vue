<template>
    <UPageHero
        headline="I want a DSLR"
        title="Digital Photo Albums"
        description="Albums of notable photographs I've taken over the years." />

    <UPageGrid class="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <template
            v-for="gallery in sortedImageManifest"
            :key="gallery.title">
            <div
                v-if="expandedAlbum === gallery.title"
                class="col-span-full mb-6">
                <div class="mb-6 flex items-center gap-5">
                    <UButton
                        :label="gallery.title"
                        icon="lucide:chevron-left"
                        variant="link"
                        color="neutral"
                        size="xl"
                        class="p-0 text-4xl font-bold"
                        :ui="{ leadingIcon: 'size-8 shrink-0' }"
                        @click="toggleAlbum(gallery.title)" />
                    <USeparator class="flex-1" />
                </div>

                <UPageGrid class="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <UCard
                        v-for="file in gallery.images"
                        :key="file.id"
                        :ui="{
                            root: 'size-full',
                            body: 'p-0 sm:p-0 size-full flex items-center justify-center',
                        }"
                        class="group aspect-square w-full cursor-pointer overflow-hidden transition hover:ring-4 hover:ring-secondary"
                        @click="openImage(gallery.title, file)">
                        <img
                            :src="file.thumbPath"
                            :alt="`${gallery.title} photo ${file.id}`"
                            class="size-full object-cover"
                            loading="lazy"
                            decoding="async" />
                    </UCard>
                </UPageGrid>
            </div>
            <GalleryPreviewCard
                v-else
                :album="gallery"
                @select="toggleAlbum(gallery.title)" />
        </template>
    </UPageGrid>

    <UModal
        v-model:open="isOpen"
        :title="activeImage?.title"
        :ui="{ content: 'bg-0 backdrop-blur' }"
        fullscreen
        @update:open="(value) => !value && closeImage()">
        <template #body>
            <div
                class="relative flex h-full items-center justify-center"
                @click="closeImage">
                <img
                    v-if="activeImage"
                    :src="activeImage.imageFile.path"
                    :alt="`${activeImage.title} photo ${activeImage.imageFile.id}`"
                    class="max-h-[85vh] max-w-full rounded-lg object-contain"
                    @click.stop />
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
    import { ImageManifest } from "~/data/photos";
    import type { SelectedImage, ImageFile } from "~/types/imageCollections";

    const activeImage = ref<SelectedImage | null>(null);
    const expandedAlbum = ref<string | null>(null);

    const sortedImageManifest = [...ImageManifest].sort((a, b) => Number(b.title) - Number(a.title));

    const isOpen = computed({
        get: () => activeImage.value !== null,
        set: (value: boolean) => {
            if (!value) activeImage.value = null;
        },
    });

    function toggleAlbum(title: string) {
        expandedAlbum.value = expandedAlbum.value === title ? null : title;
    }

    function openImage(title: string, file: ImageFile) {
        activeImage.value = { title, imageFile: file };
    }

    function closeImage() {
        activeImage.value = null;
    }
</script>
