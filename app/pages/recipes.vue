<template>
    <div class="mb-16">
        <UPageHero
            id="top"
            headline="Mmmmm~"
            title="Monster Eats"
            description="A collection of favorites. Click a card for the recipe!"
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

        <UModal
            v-model:open="isOpen"
            :title="selected?.title"
            :ui="{
                overlay: 'backdrop-blur-sm',
            }"
        >
            <template #body>
                <div v-if="selected" class="space-y-4">
                    <div class="flex items-center justify-between gap-4">
                        <p class="text-xl font-bold">Ingredients</p>
                        <UFormField label="Servings" orientation="horizontal">
                            <UInputNumber
                                v-model="multiplier"
                                :min="1"
                                :max="9"
                                :step="1"
                                class="w-24"
                                variant="soft"
                            />
                        </UFormField>
                    </div>

                    <ul class="space-y-1 text-toned">
                        <li
                            v-for="ingredient in selected.ingredients"
                            :key="ingredient.name"
                        >
                            <span class="font-medium text-highlighted">
                                {{
                                    formatQuantity(
                                        ingredient.quantity * multiplier,
                                    )
                                }}
                                <template v-if="ingredient.unit">
                                    {{ ingredient.unit }}
                                </template>
                            </span>
                            {{ ingredient.name }}
                        </li>
                    </ul>

                    <USeparator />

                    <p class="text-xl font-bold">Instructions</p>

                    <ol class="list-inside list-decimal space-y-2 text-toned">
                        <li v-for="step in selected.instructions" :key="step">
                            {{ step }}
                        </li>
                    </ol>
                </div>
            </template>
        </UModal>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Recipes, type Recipe } from "~/data/recipes";

const selected = ref<Recipe | null>(null);
const multiplier = ref(1);

const isOpen = computed({
    get: () => selected.value !== null,
    set: (value: boolean) => {
        if (!value) {
            selected.value = null;
            multiplier.value = 1;
        }
    },
});

function selectRecipe(recipe: Recipe) {
    selected.value = recipe;
    multiplier.value = 1;
}

const fractionGlyphs = [
    [1 / 8, "⅛"],
    [1 / 4, "¼"],
    [1 / 3, "⅓"],
    [1 / 2, "½"],
    [2 / 3, "⅔"],
    [3 / 4, "¾"],
] as const;

function formatQuantity(qty: number): string {
    const whole = Math.floor(qty);
    const remainder = qty - whole;

    if (remainder === 0) {
        return whole.toString();
    }

    const match = fractionGlyphs.find(
        ([value]) => Math.abs(value - remainder) < 0.02,
    );

    const fraction = match?.[1] ?? remainder.toFixed(2);

    return whole > 0 ? `${whole} ${fraction}` : fraction;
}
</script>
