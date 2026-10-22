<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
        :links="HeroLinks"
    >
        <div class="space-y-6">
            <div
                class="bg-elevated overflow-hidden flex items-center justify-center"
            >
                <img
                    :src="heroImage"
                    alt="Featured artwork"
                    class="w-full h-full object-cover"
                />
            </div>

            <!-- Site nav, same routes as the header -->
            <nav class="flex flex-wrap justify-center gap-5">
                <UButton
                    v-for="item in navItems"
                    :key="item.to as string"
                    :label="item.label"
                    :to="item.to"
                    color="neutral"
                    variant="soft"
                    size="lg"
                    class="px-5 hover:bg-primary/20 text-2xl"
                />
            </nav>
        </div>
    </UPageHero>
</template>

<script setup lang="ts">
import { HeroLinks, heroImage, heroInfo } from "~/data/index";

const navItems = useNavItems();
</script>