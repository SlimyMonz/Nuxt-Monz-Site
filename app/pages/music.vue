<template>
    <div>
        <SlimyHero :hero-info="heroInfo" />
        <UPageGrid
            class="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
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
    </div>
</template>

<script setup lang="ts">
    import { Albums, heroInfo } from "~/data/music";
    const sortedAlbums = [...Albums].sort((a, b) =>
        a.artist.localeCompare(b.artist),
    );
</script>
