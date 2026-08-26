<template>
    <div class="mb-16">
        <UPageHero
            id="top"
            headline="Monster Jams!"
            title="Favorite Albums"
            description="Click an album to check out samples."
        >
        </UPageHero>
        <UPageGrid class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ULink
                v-for="(album, i) in albums"
                :key="i"
                :to="album.url"
                target="_blank"
                class="block"
            >
                <UCard
                    class="h-full transition hover:ring-4 hover:ring-secondary"
                    :ui="{ body: 'p-0 sm:p-0' }"
                >
                    <template #header>
                        <div class="flex flex-col gap-0.5">
                            <h2
                                class="text-left text-lg font-bold text-highlighted truncate"
                            >
                                {{ album.title }}
                            </h2>
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-left truncate">
                                    {{ album.artist }}
                                </span>
                                <span class="text-right">
                                    {{ album.year }}
                                </span>
                            </div>
                        </div>
                    </template>
                    <img
                        :src="album.img"
                        :alt="`${album.title} by ${album.artist}`"
                        class="w-full aspect-square object-cover block"
                    />
                    <template #footer>
                        <p>
                            {{ album.body }}
                        </p>
                    </template>
                </UCard>
            </ULink>
        </UPageGrid>
    </div>
</template>

<script setup lang="ts">
import { albums } from "~/data/music";
</script>
