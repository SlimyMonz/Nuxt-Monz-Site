<script setup lang="ts">
import {
    title,
    tagline,
    sonaRef,
    sonaIcon,
    heroLinks,
    sonaFacts,
    timelineItems,
    interestCards,
    badges,
} from "~/data/about";
</script>

<template>
    <div>
        <UPageHero
            id="top"
            :title="title"
            :description="tagline"
            :links="heroLinks"
        >
            <div
                class="bg-elevated rounded-3xl overflow-hidden flex items-center justify-center"
            >
                <img
                    :src="sonaRef"
                    alt="Monz Reference Sheet"
                    class="w-full h-full object-cover"
                />
            </div>
        </UPageHero>

        <USeparator />

        <UPageSection id="about" title="About Me">
            <UPageCard variant="soft" orientation="horizontal">
                <img :src="sonaIcon" alt="Monz Headshot Icon" class="w-full" />
                <div class="text-lg md:text-xl space-y-4">
                    <div
                        v-for="fact in sonaFacts"
                        :key="fact.label"
                        class="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4"
                    >
                        <span class="text-muted">{{ fact.label }}</span>
                        <span class="font-semibold">{{ fact.value }}</span>
                    </div>
                </div>
            </UPageCard>
        </UPageSection>

        <USeparator />

        <UPageSection id="timeline" title="Timeline">
            <div class="overflow-x-auto pb-16 -mb-16">
                <UTimeline
                    :items="timelineItems"
                    :default-value="3"
                    color="secondary"
                    orientation="horizontal"
                    size="3xl"
                    class="min-w-max"
                />
            </div>
        </UPageSection>

        <USeparator />

        <UPageSection id="skills" title="Hobbies + Work + Skills">
            <UPageGrid>
                <UPageCard
                    v-for="card in interestCards"
                    :key="card.title"
                    :title="card.title"
                    :description="card.description"
                    :icon="card.icon"
                    variant="soft"
                />
            </UPageGrid>
        </UPageSection>

        <USeparator />
        
        <!-- Future Idea: ACHIEVEMENTS | where it's like... PSN trophies etc -->

        <UPageSection id="badges" title="Badges">
            <div class="flex flex-wrap justify-center gap-2">
                <a
                    v-for="(badge, i) in badges"
                    :key="i"
                    :href="badge.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block"
                >
                    <img
                        :src="badge.img"
                        :alt="badge.text"
                        class="object-contain"
                    />
                </a>
            </div>
        </UPageSection>
    </div>
</template>
