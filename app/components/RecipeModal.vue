<template>
    <UModal
        :title="recipe?.title"
        :ui="{
            overlay: 'backdrop-blur-sm',
        }"
    >
        <template #body>
            <div
                v-if="recipe"
                class="space-y-4"
            >
                <div class="flex items-center justify-between gap-4">
                    <p class="text-xl font-bold">Ingredients</p>
                    <UFormField
                        label="Servings"
                        orientation="horizontal"
                    >
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
                        v-for="ingredient in recipe.ingredients"
                        :key="ingredient.name"
                    >
                        <span class="font-medium text-highlighted">
                            {{
                                formatQuantity(ingredient.quantity * multiplier)
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
                    <li
                        v-for="step in recipe.instructions"
                        :key="step"
                    >
                        {{ step }}
                    </li>
                </ol>
            </div>
        </template>
    </UModal>
</template>

<script setup lang="ts">
    import type { Recipe } from "~/types/contentTypes";

    const props = defineProps<{
        recipe: Recipe | null;
    }>();

    const multiplier = ref(1);

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
