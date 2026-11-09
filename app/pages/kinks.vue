<template>
    <div class="space-y-8">
        <SlimyHero :hero-info="heroInfo" />

        <UPageGrid>
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
                    <p class="mt-1 text-toned">{{ section.description }}</p>
                </template>

                <div class="flex items-baseline justify-between gap-4 pb-4">
                    <p class="text-muted">Title</p>
                    <p class="text-muted">Rating</p>
                </div>

                <ul class="space-y-5">
                    <li
                        v-for="kink in section.items"
                        :key="kink.title"
                    >
                        <div class="flex items-baseline justify-between gap-4">
                            <span class="text-lg md:text-xl font-semibold">
                                {{ kink.title }}
                            </span>
                            <span
                                class="text-lg md:text-xl font-semibold tabular-nums"
                                :class="section.color"
                            >
                                {{ kink.rating }}
                            </span>
                        </div>
                        <p class="mt-1 text-base text-toned">
                            {{ kink.description }}
                        </p>
                    </li>
                </ul>
            </UCard>
        </UPageGrid>

        <UPageSection
            title="Preferred Species"
            class="-my-12"
        />

        <UPageGrid>
            <UCard
                v-for="group in species"
                :key="group.title"
                variant="soft"
            >
                <template #header>
                    <h3 class="text-xl font-bold text-center">
                        {{ group.title }}
                    </h3>
                </template>

                <div
                    class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-lg"
                >
                    <span
                        v-for="variant in group.variants"
                        :key="variant"
                    >
                        {{ variant }}
                    </span>
                </div>
            </UCard>
        </UPageGrid>

        <UPageSection
            title="Questions and Answers"
            class="-my-12"
        />

        <UCard
            v-for="response in questionsAndAnswers"
            variant="soft"
            :title="'Q: ' + response.question"
            :description="'A: ' + response.answer"
            :ui="{ title: 'text-xl', description: 'text-default text-lg' }"
        />
    </div>
</template>

<script setup lang="ts">
    import { heroInfo, species, kinkSections, questionsAndAnswers } from "~/data/kinks";
</script>
