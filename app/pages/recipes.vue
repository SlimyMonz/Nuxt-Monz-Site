<template>
    <div>
        <SlimyHero :hero-info="heroInfo" />
    <UPageGrid
        class="grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <UCard
                v-for="recipe in Recipes"
                :key="recipe.title"
                class="transition hover:ring-4 hover:ring-secondary"
                @click="selectRecipe(recipe)"
            >
                <template #header>
                    <h2
                        class="text-center font-bold tracking-tight text-highlighted truncate"
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
    </div>
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
