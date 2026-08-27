<template>
    <div class="mb-16">
        <UPageHero
            id="top"
            headline="Absolute Cinema"
            title="Monster Films"
            description="Movies I consider to be a 5-star experience sorted by year. Click to see a trailer or watch on Apple TV!"
        />
        <UPageGrid>
            <ULink
                v-for="(movie, i) in Movies"
                :key="i"
                :to="movie.url"
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
                                class="text-left uppercase text-lg font-bold text-highlighted truncate"
                            >
                                {{ movie.title }}
                            </h2>
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-left truncate">
                                    {{ movie.director }}
                                </span>
                                <span class="text-right">
                                    {{ movie.date }}
                                </span>
                            </div>
                        </div>
                    </template>
                    <img
                        :src="movie.img"
                        :alt="`${movie.title} by ${movie.director}`"
                        class="w-full object-cover block"
                    />
                    <template #footer>
                        <p>
                            {{ movie.description }}
                        </p>
                    </template>
                </UCard>
            </ULink>
        </UPageGrid>
    </div>
</template>

<script setup lang="ts">
import { Movies } from "~/data/movies";
</script>
