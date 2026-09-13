<template>
    <UPageHero
        headline="I want a DSLR"
        title="Digital Photo Albums"
        description="Albums of notable photographs I've taken over the years." />
    <AlbumGallery :manifest="ImageManifest" />
</template>

<script setup lang="ts">
    import { ImageManifest } from "~/data/photos";
</script>
