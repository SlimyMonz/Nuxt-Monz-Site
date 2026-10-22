<template>
    <SlimyHero
        :hero-info="heroInfo"
    />
    <AlbumGallery :manifest="ImageManifest" />
</template>

<script setup lang="ts">
    import { ImageManifest, heroInfo } from "~/data/photos";
</script>
