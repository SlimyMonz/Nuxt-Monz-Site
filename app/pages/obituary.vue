<template>
    <div class="mb-16">
        <UPageHero
            id="top"
            headline="Rememberance"
            title="Rest in Peace"
            description="Loved ones that have moved on."
        >
        </UPageHero>
        <UPageGrid>
            <div v-for="(obituary, i) in obituaries" :key="i" class="block">
                <UCard class="h-full" :ui="{ body: 'p-0 sm:p-0' }">
                    <template #header>
                        <div class="flex flex-col gap-2 text-center">
                            <h2
                                class="text-2xl font-bold text-highlighted tracking-tight"
                            >
                                {{ obituary.name }}
                            </h2>
                        </div>
                    </template>
                    <img
                        :src="obituary.img"
                        :alt="`${obituary.img}`"
                        class="h-full object-cover block"
                    />
                    <template #footer>
                        <div class="flex flex-col gap-2 text-center">
                            <p
                                class="font-medium text-muted uppercase tracking-wide"
                            >
                                {{ obituary.dates }}
                            </p>

                            <p class="text-sm text-dimmed italic">
                                {{ obituary.cause }}
                            </p>

                            <p
                                class="mt-2 w-full leading-relaxed text-toned border-t border-default pt-3 px-2 text-left"
                            >
                                {{ obituary.memento }}
                            </p>
                        </div>
                    </template>
                </UCard>
            </div>
        </UPageGrid>
    </div>
</template>
<script setup lang="ts">
import { obituaries } from "~/data/obituary";
</script>
