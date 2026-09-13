<template>
    <UPageHero
        headline="No AI"
        title="Digital Art Gallery"
        description="A collection of stuff I created in Photoshop, Affinity, or Pixelmator Pro over the years. Click an image to see the full size!" />
    <AlbumGallery :manifest="ImageManifest" />
</template>

<script setup lang="ts">
    import { ImageManifest } from "~/data/art";
</script>
