<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />
    <UPageGrid class="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ULink
            v-for="product in Products"
            :to="product.url"
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
                            {{ product.title }}
                        </h2>
                    </div>
                </template>
                <img
                    :src="product.img"
                    :alt="`${product.img}`"
                    class="h-full object-cover block"
                />
                <template #footer>
                    <div class="flex flex-col text-center">
                        <p
                            class="mt-2 w-full leading-relaxed border-t border-default pt-2 px-2 text-left"
                        >
                            {{ product.description }}
                        </p>
                    </div>
                </template>
            </UCard>
        </ULink>
    </UPageGrid>
</template>

<script setup lang="ts">
    import { Products, heroInfo } from "~/data/store";
</script>
