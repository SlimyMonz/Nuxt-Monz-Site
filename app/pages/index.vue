<template>
    <UPageHero
        headline="WORK IN PROGRESS"
        title="Main Index Page"
        description="Eventually there will be a collection of the other pages summarized in here in a fun way."
    />

    <UPageSection
        id="badges"
        title="Badges"
        description="Links to other people's websites!"
    >
        <div class="flex flex-wrap justify-center gap-2">
            <UTooltip v-for="(b, i) in badges" :key="i" :text="b.text">
                <a
                    :href="b.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block"
                >
                    <img
                        :src="b.img"
                        :alt="b.text"
                        width="176"
                        height="62"
                        class="[image-rendering:pixelated] transition hover:ring-4 hover:ring-secondary"
                    />
                </a>
            </UTooltip>
        </div>
    </UPageSection>
</template>
<script setup lang="ts">
import { badges } from "~/data/index";
</script>
