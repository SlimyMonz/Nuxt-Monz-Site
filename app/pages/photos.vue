<template>
    <div>
        <SlimyHero :hero-info="heroInfo" />
        <AlbumGallery :manifest="ImageManifest" />
    </div>
</template>

<script setup lang="ts">
    import { ImageManifest, heroInfo } from "~/data/photos";
</script>
