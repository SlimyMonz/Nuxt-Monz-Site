<template>
    <UPageHero
        headline="I want a DSLR"
        title="Digital Photo Albums"
        description="Albums of notable photographs I've taken over the years." />

    <UPageGrid class="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <template
            v-for="album in sortedImageManifest"
            :key="album.title">
            <div
                v-if="expandedAlbum === album.title"
                class="col-span-full mb-6">
                <div class="mb-6 flex items-center gap-5">
                    <UButton
                        :label="album.title"
                        icon="lucide:chevron-left"
                        variant="link"
                        color="neutral"
                        size="xl"
                        class="p-0 text-4xl font-bold"
                        :ui="{ leadingIcon: 'size-8 shrink-0' }"
                        @click="toggleAlbum(album.title)" />
                    <USeparator class="flex-1" />
                </div>

                <UPageGrid class="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <AlbumImageCard
                        v-for="image in album.images"
                        :key="image.id"
                        :title="album.title"
                        :image="image"
                        @click="openImage(album.title, image)" />
                </UPageGrid>
            </div>
            <AlbumPreviewCard
                v-else
                :album="album"
                @select="toggleAlbum(album.title)" />
        </template>
    </UPageGrid>

    <UModal
        v-model:open="isOpen"
        :title="selectedImage?.title"
        :ui="{ content: 'bg-0 backdrop-blur' }"
        fullscreen
        @update:open="(value) => !value && closeImage()">
        <template #body>
            <div
                class="relative flex h-full items-center justify-center"
                @click="closeImage">
                <img
                    v-if="selectedImage"
                    :src="selectedImage.imageFile.path"
                    :alt="`${selectedImage.title} photo ${selectedImage.imageFile.id}`"
                    class="max-h-[85vh] max-w-full rounded-lg object-contain"
                    @click.stop />
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
    import { ImageManifest } from "~/data/photos";
    import type { SelectedImage, ImageFile } from "~/types/imageCollections";

    const selectedImage = ref<SelectedImage | null>(null);
    const expandedAlbum = ref<string | null>(null);
    const sortedImageManifest = [...ImageManifest].sort((a, b) => Number(b.title) - Number(a.title));

    const isOpen = computed({
        get: () => selectedImage.value !== null,
        set: (value: boolean) => {
            if (!value) selectedImage.value = null;
        },
    });

    function toggleAlbum(title: string) {
        expandedAlbum.value = expandedAlbum.value === title ? null : title;
    }

    function openImage(title: string, imageFile: ImageFile) {
        selectedImage.value = { title, imageFile };
    }

    function closeImage() {
        selectedImage.value = null;
    }
</script>
