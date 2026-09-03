<template>
    <UPageHero
        id="top"
        headline="Absolute Cinema"
        title="Monster Films"
        description="Movies I consider to be a 5-star experience sorted by year. Click to see a trailer or watch on Apple TV!"
    />
    <UPageGrid>
        <MediaCard
            v-for="(movie, i) in sortedMovies"
            :key="i"
            :url="movie.url"
            :title="movie.title"
            :creator="movie.director"
            :date="movie.date"
            :imagePath="movie.img"
            :textBody="movie.description"
        />
    </UPageGrid>
</template>

<script setup lang="ts">
import { Movies } from "~/data/movies";
const sortedMovies = [...Movies].sort(
    (a, b) => Number(b.date) - Number(a.date),
);
</script>
