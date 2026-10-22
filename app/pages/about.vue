<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />

    <USeparator />

    <!-- Bio -->
    <UPageSection id="bio" title="Biography">
        <UPageCard variant="soft" orientation="horizontal">
            <img
                :src="artistPortrait"
                alt="Artist portrait"
                class="w-full rounded-xl"
            />
            <div class="text-md space-y-4">
                <p v-for="(para, i) in bioParagraphs" :key="i">
                    {{ para }}
                </p>
            </div>
        </UPageCard>
    </UPageSection>

    <USeparator />

    <!-- Skills / Expertise -->
    <UPageSection id="skills" title="Experience">
        <UPageGrid class="lg:grid-cols-3">
            <UPageCard
                v-for="group in skillGroups"
                :key="group.heading"
                :title="group.heading"
                variant="soft"
            >
                <ul class="space-y-3">
                    <li
                        v-for="skill in group.skills"
                        :key="skill.label"
                        class="flex items-baseline gap-3"
                    >
                        <UIcon
                            name="i-lucide-sparkles"
                            class="text-primary shrink-0 size-3"
                        />
                        <div>
                            <span class="font-semibold text-highlighted">
                                {{ skill.label }}
                            </span>
                            <span v-if="skill.details" class="text-muted text-sm">
                                — {{ skill.details }}
                            </span>
                        </div>
                    </li>
                </ul>
            </UPageCard>
        </UPageGrid>
    </UPageSection>

    <USeparator />

    <!-- Timeline -->
    <UPageSection id="timeline" title="Journey">
        <UTimeline
            :items="timelineItems"
            :default-value="timelineItems.length - 1"
            color="primary"
            size="xl"
        />
    </UPageSection>

    <USeparator />

    <!-- Contact -->
    <UPageSection
        id="contact"
        title="Contact"
        description="Open to commissions, collaborations, licensing inquiries, and consulting. Reach out through any of the channels below."
    >
        <UPageGrid class="lg:grid-cols-2">
            <UPageCard
                v-for="social in contactInfo.socials"
                :key="social.platform"
                :to="social.url"
                target="_blank"
                :title="social.platform"
                :description="social.label"
                :icon="social.icon"
                variant="soft"
            />
        </UPageGrid>
    </UPageSection>
</template>

<script setup lang="ts">
import {
    artistPortrait,
    artistBio,
    heroInfo,
    skillGroups,
    timelineItems,
    contactInfo,
} from "~/data/about";

const bioParagraphs = artistBio.split("\n\n");
</script>