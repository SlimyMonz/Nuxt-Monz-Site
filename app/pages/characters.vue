<template>
    <div>
        <SlimyHero :hero-info="heroInfo" />
        <UPageGrid
            class="grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
            <ULink
                v-for="character in Characters"
                :to="character.url"
                target="_blank"
                class="block"
            >
                <UCard
                    class="h-full transition hover:ring-4 hover:ring-secondary block"
                    :ui="{ body: 'p-0 sm:p-0' }"
                >
                    <template #header>
                        <div class="flex flex-col text-center">
                            <h2
                                class="font-bold text-highlighted uppercase tracking-wide"
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
                        <div class="flex flex-col text-center">
                            <p class="font-bold tracking-wide">
                                {{ character.species }}
                            </p>
                            <p
                                class="mt-2 w-full leading-relaxed border-t border-default pt-2 px-2 text-left"
                            >
                                {{ character.description }}
                            </p>
                        </div>
                    </template>
                </UCard>
            </ULink>
        </UPageGrid>
    </div>
</template>

<script setup lang="ts">
    import { Characters, heroInfo } from "~/data/characters";
</script>
