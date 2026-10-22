<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />
</template>

<script setup lang="ts">
import type { HeroInfo } from '~/types/contentTypes';
    const props = defineProps<{
        heroInfo: HeroInfo;
    }>();
</script>
