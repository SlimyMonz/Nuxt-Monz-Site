<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description" />
    <AlbumGallery :manifest="ImageManifest" />
</template>

<script setup lang="ts">
    import { ImageManifest, heroInfo } from "~/data/art";
</script>
