<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
        class="-my-8"
        :ui="{
            headline: 'hero-in [--i:0]',
            title: 'hero-in [--i:1]',
            description: 'hero-in [--i:2]',
        }"
    />
</template>

<script setup lang="ts">
    import type { HeroInfo } from "~/types/contentTypes";
    const props = defineProps<{
        heroInfo: HeroInfo;
    }>();
</script>
