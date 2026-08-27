<template>
    <UPageHero
        headline="I want a DSLR"
        title="Digital Photo Albums"
        description="Albums of notable photographs I've taken over the years."
    />

    <UPageGrid class="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <template v-for="gallery in PhotoManifest" :key="gallery.title">
            <div
                v-if="expandedAlbum === gallery.title"
                class="col-span-full mb-6"
            >
                <div class="mb-6 flex items-center gap-5">
                    <UButton
                        :label="gallery.title"
                        icon="lucide:chevron-left"
                        variant="link"
                        color="neutral"
                        size="xl"
                        class="p-0 text-4xl font-bold"
                        :ui="{ leadingIcon: 'size-8 shrink-0' }"
                        @click="toggleAlbum(gallery.title)"
                    />
                    <USeparator class="flex-1" />
                </div>

                <UPageGrid
                    class="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                >
                    <UCard
                        v-for="file in gallery.files"
                        :key="file.id"
                        :ui="{
                            root: 'size-full',
                            body: 'p-0 sm:p-0 size-full flex items-center justify-center',
                        }"
                        class="group aspect-square w-full cursor-pointer overflow-hidden transition hover:ring-4 hover:ring-secondary"
                        @click="openImage(gallery.title, file)"
                    >
                        <img
                            :src="file.thumb"
                            :alt="`${gallery.title} photo ${file.id}`"
                            class="size-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </UCard>
                </UPageGrid>
            </div>

            <UCard
                v-else
                :ui="{ body: 'p-0 sm:p-0', root: 'flex flex-col' }"
                class="group cursor-pointer overflow-hidden text-left transition hover:ring-4 hover:ring-secondary"
                @click="toggleAlbum(gallery.title)"
            >
                <div
                    class="grid aspect-square w-full grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden"
                >
                    <div
                        v-for="thumb in previewThumbs(gallery)"
                        :key="thumb.id"
                        class="aspect-square size-full overflow-hidden"
                    >
                        <img
                            :src="thumb.thumb"
                            :alt="`${gallery.title} preview`"
                            class="size-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="truncate text-lg font-semibold">
                        {{ gallery.title }}
                    </h3>
                    <p class="text-sm text-muted">
                        {{ gallery.files.length }} photos
                    </p>
                </div>
            </UCard>
        </template>
    </UPageGrid>

    <UModal
        v-model:open="isOpen"
        :title="activeImage?.title"
        :ui="{ content: 'bg-0 backdrop-blur' }"
        fullscreen
        @update:open="(value) => !value && closeImage()"
    >
        <template #body>
            <div
                class="relative flex h-full items-center justify-center"
                @click="closeImage"
            >
                <img
                    v-if="activeImage"
                    :src="activeImage.file.full"
                    :alt="`${activeImage.title} photo ${activeImage.file.id}`"
                    class="max-h-[85vh] max-w-full rounded-lg object-contain"
                    @click.stop
                />
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
import { PhotoManifest } from "~/data/photos";
import type { ActiveImage, PhotoFile } from "~/data/photos";

const activeImage = ref<ActiveImage | null>(null);
const expandedAlbum = ref<string | null>(null);

const isOpen = computed({
    get: () => activeImage.value !== null,
    set: (value: boolean) => {
        if (!value) activeImage.value = null;
    },
});

function toggleAlbum(title: string) {
    expandedAlbum.value = expandedAlbum.value === title ? null : title;
}

function previewThumbs(gallery: (typeof PhotoManifest)[number]) {
    // preview up to the last 4 photos in the album.
    return gallery.files.slice(-4);
}

function openImage(title: string, file: PhotoFile) {
    activeImage.value = { title, file };
}

function closeImage() {
    activeImage.value = null;
}
</script>
