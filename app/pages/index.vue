<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
        :links="HeroLinks"
    />

    <USeparator />

    <UPageSection
        id="badges"
        title="Badges"
        description="Links to other people's websites!"
        class="-my-5"
    >
        <div class="flex flex-wrap justify-center gap-2">
            <UTooltip
                v-for="(b, i) in badges"
                :key="i"
                :text="b.text"
            >
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
                        loading="lazy"
                        decoding="async"
                    />
                </a>
            </UTooltip>
        </div>
    </UPageSection>
</template>
<script setup lang="ts">
    import { badges, HeroLinks, heroInfo } from "~/data/index";
</script>
