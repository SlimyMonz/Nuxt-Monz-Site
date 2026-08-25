<template>
    <div class="mb-16">
        <UPageHero
            id="top"
            headline="Mmmmm~"
            title="Monster Food"
            description="A collection of favorites. Click a card for the recipe!"
        />
        <UPageGrid>
            <div v-for="(recipe, i) in recipes" :key="i" class="block">
                <UCard
                    class="transition hover:ring-2 hover:ring-secondary"
                    @click="selected = recipe"
                >
                    <template #header>
                        <h2
                            class="text-2xl font-bold text-highlighted tracking-tight text-center"
                        >
                            {{ recipe.title }}
                        </h2>
                    </template>
                    <div
                        class="w-full aspect-square rounded-md overflow-hidden bg-elevated flex items-center justify-center"
                    >
                        <img
                            v-if="recipe.img"
                            :src="recipe.img"
                            :alt="recipe.title"
                            class="w-full h-full object-cover block"
                        />
                    </div>
                    <template #footer>
                        {{ recipe.description }}
                    </template>
                </UCard>
            </div>
        </UPageGrid>

        <UModal v-model:open="isOpen" :title="selected?.title">
            <template #body>
                <div v-if="selected" class="space-y-4">
                    <p class="font-bold text-xl">Ingredients</p>
                    <ul class="text-toned space-y-1">
                        <li
                            v-for="(ingredient, j) in selected.ingredients"
                            :key="j"
                        >
                            <span class="font-medium text-highlighted">
                                {{ formatQuantity(ingredient.quantity)
                                }}{{
                                    ingredient.unit ? ` ${ingredient.unit}` : ""
                                }}
                            </span>
                            {{ " " }}{{ ingredient.name }}
                        </li>
                    </ul>
                    <USeparator />
                    <p class="font-bold text-xl">Instructions</p>
                    <ol class="list-decimal list-inside space-y-2 text-toned">
                        <li v-for="(step, k) in selected.instructions" :key="k">
                            {{ step }}
                        </li>
                    </ol>
                </div>
            </template>
        </UModal>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { recipes, type Recipe } from "~/data/recipes";

const selected = ref<Recipe | null>(null);
const isOpen = computed({
    get: () => selected.value !== null,
    set: (value: boolean) => {
        if (!value) selected.value = null;
    },
});

const fractionGlyphs: [number, string][] = [
    [1 / 8, "⅛"],
    [1 / 4, "¼"],
    [1 / 3, "⅓"],
    [1 / 2, "½"],
    [2 / 3, "⅔"],
    [3 / 4, "¾"],
];
function formatQuantity(qty: number): string {
    const whole = Math.floor(qty);
    const remainder = qty - whole;
    if (remainder === 0) return whole.toString();
    const match = fractionGlyphs.find(
        ([value]) => Math.abs(value - remainder) < 0.02,
    );
    const fraction = match ? match[1] : remainder.toFixed(2);
    return whole > 0 ? `${whole} ${fraction}` : fraction;
}
</script>
