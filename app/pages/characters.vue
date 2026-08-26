<template>
    <UPageHero
        headline="Yeah, they're all gay."
        title="Character Page"
        description="Click on a character to view their FurAffinity gallery! Account is required and 18+ Only!"
    />
    <UPageGrid>
        <ULink
            v-for="(character, i) in characters"
            :key="i"
            :to="character.url"
            target="_blank"
            class="block"
        >
            <UCard
                class="h-full transition hover:ring-4 hover:ring-secondary"
                :ui="{ body: 'p-0 sm:p-0' }"
                :link="character.url"
            >
                <template #header>
                    <div class="flex flex-col gap-2 text-center">
                        <h2
                            class="text-xl font-bold text-highlighted uppercase tracking-wide"
                        >
                            {{ character.name }}
                        </h2>
                    </div>
                </template>
                <img
                    :src="character.img"
                    :alt="`${character.img}`"
                    class="h-full object-cover block"
                />
                <template #footer>
                    <div class="flex flex-col gap-2 text-center">
                        <p class="font-bold uppercase tracking-wide">
                            {{ character.species }}
                        </p>
                        <p
                            class="mt-2 w-full leading-relaxed border-t border-default pt-3 px-2 text-left"
                        >
                            {{ character.description }}
                        </p>
                    </div>
                </template>
            </UCard>
        </ULink>
    </UPageGrid>
</template>

<script setup lang="ts">
import { characters } from "~/data/characters";
</script>
