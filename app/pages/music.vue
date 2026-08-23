<template>
    <div>
        <UPageHero
            id="top"
            headline="Monster Jams!"
            title="Favorite Albums"
            description="Everything that I personally love and highly recommend."
        >
        </UPageHero>
        <UPageGrid
            class="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
            <ULink
                v-for="(album, i) in albums"
                :key="i"
                :to="album.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block"
            >
                <UCard
                    class="h-full transition hover:ring-2 hover:ring-secondary"
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
                                <span class="text-left">
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
