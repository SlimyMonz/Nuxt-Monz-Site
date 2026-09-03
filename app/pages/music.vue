<template>
    <UPageHero
        id="top"
        headline="Monster Jams!"
        title="Favorite Albums"
        description="Sorted by Artist. Click an album to check out samples!"
    >
    </UPageHero>
    <UPageGrid class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <MediaCard
            v-for="(album, i) in sortedAlbums"
            :key="i"
            :url="album.url"
            :title="album.title"
            :creator="album.artist"
            :date="album.year"
            :imagePath="album.img"
            :textBody="album.description"
        />
    </UPageGrid>
</template>

<script setup lang="ts">
import { Albums } from "~/data/music";
const sortedAlbums = [...Albums].sort((a, b) =>
    a.artist.localeCompare(b.artist),
);
</script>
