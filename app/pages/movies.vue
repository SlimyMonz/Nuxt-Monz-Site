<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />
    <UPageGrid class="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    import { Movies, heroInfo } from "~/data/movies";
    const sortedMovies = [...Movies].sort(
        (a, b) => Number(b.date) - Number(a.date),
    );
</script>
