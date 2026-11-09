<template>
    <div>
        <SlimyHero :hero-info="heroInfo" />

        <UPageGrid class="mt-8">
            <UCard
                v-for="section in kinkSections"
                :key="section.label"
                variant="soft"
            >
                <template #header>
                    <h2
                        class="text-xl font-semibold"
                        :class="section.color"
                    >
                        {{ section.label }}
                    </h2>

                    <p class="text-toned">{{ section.description }}</p>
                </template>

                <ul class="space-y-5">
                    <div class="flex items-baseline justify-between gap-4">
                        <p class="text-muted">Title</p>
                        <p class="text-muted">Rating</p>
                    </div>
                    <li
                        v-for="kink in section.items"
                        :key="kink.title"
                    >
                        <div class="flex items-baseline justify-between gap-4">
                            <span class="text-lg md:text-xl font-semibold">{{
                                kink.title
                            }}</span>
                            <span
                                class="text-lg md:text-xl font-semibold tabular-nums"
                                :class="section.color"
                            >
                                {{ kink.rating }}
                            </span>
                        </div>
                        <p class="text-base text-toned">
                            {{ kink.description }}
                        </p>
                    </li>
                </ul>
            </UCard>
        </UPageGrid>
        <UCard
            variant="soft"
            class="mt-5"
            title="Wait... aren't you asexual?"
            description="Yeah, for real-life people. This is all for fantasy stuff like demons/monsters/dragons."
        />
    </div>
</template>

<script setup lang="ts">
    import { heroInfo, kinkSections } from "~/data/kinks";
</script>
