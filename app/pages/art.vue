<template>
    <UPageHero headline="No AI" title="Digital Art Gallery" description="A collection of stuff I created in Photoshop, Affinity, or Pixelmator Pro over the years. Click an image to see the full size!" />
    <div v-for="gallery in artManifest" :key="gallery.title" class="mb-24">
        <div class="mb-6 flex items-center gap-5">
            <h2 class="text-5xl font-bold">
                {{ gallery.title }}
            </h2>

            <USeparator class="flex-1" />
        </div>

        <UPageGrid class="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <button
              v-for="file in gallery.files"
              :key="file.id"
              class="group aspect-square w-full overflow-hidden rounded-lg border border-default shadow-md transition-all duration-200 hover:scale-105 hover:shadow-xl"
              @click="openImage(gallery.title, file)"
            >
              <img
                :src="file.thumb"
                :alt="`${gallery.title} artwork ${file.id}`"
                class="size-full object-cover transition-transform duration-200 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </button>
        </UPageGrid>
    </div>

    <UModal
        v-model:open="isOpen"
        :title="activeImage?.title"
        :ui="{ content: 'bg-black/25 backdrop-blur-sm' }"
        fullscreen
    >
        <template #body>
            <div
                class="flex h-full items-center justify-center"
                @click="isOpen = false"
            >
                <img
                    v-if="activeImage"
                    :src="activeImage.file.full"
                    :alt="`${activeImage.title} artwork ${activeImage.file.id}`"
                    class="max-h-[85vh] max-w-full rounded-lg object-contain"
                    @click.stop
                />
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
import { artManifest } from "~/data/art";
import type { ActiveImage, ArtFile } from "~/data/art";

const isOpen = ref(false);
const activeImage = ref<ActiveImage | null>(null);

function openImage(title: string, file: ArtFile) {
    activeImage.value = { title, file };
    isOpen.value = true;
}
</script>
