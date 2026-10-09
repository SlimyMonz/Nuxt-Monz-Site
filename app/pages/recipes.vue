<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />
    <UPageGrid>
        <UCard
            v-for="recipe in Recipes"
            :key="recipe.title"
            class="transition hover:ring-4 hover:ring-secondary"
            @click="selectRecipe(recipe)"
        >
            <template #header>
                <h2
                    class="text-center text-2xl font-bold tracking-tight text-highlighted"
                >
                    {{ recipe.title }}
                </h2>
            </template>

            <div
                class="flex aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-elevated"
            >
                <img
                    v-if="recipe.img"
                    :src="recipe.img"
                    :alt="recipe.title"
                    class="block h-full w-full object-cover"
                />
            </div>

            <template #footer>
                {{ recipe.description }}
            </template>
        </UCard>
    </UPageGrid>

    <RecipeModal
        v-model:open="isOpen"
        :recipe="selected"
    />
</template>

<script setup lang="ts">
    import { computed, ref } from "vue";
    import { Recipes, heroInfo } from "~/data/recipes";
    import type { Recipe } from "~/types/contentTypes";

    const selected = ref<Recipe | null>(null);

    const isOpen = computed({
        get: () => selected.value !== null,
        set: (value: boolean) => {
            if (!value) {
                selected.value = null;
            }
        },
    });

    function selectRecipe(recipe: Recipe) {
        selected.value = recipe;
    }
</script>
