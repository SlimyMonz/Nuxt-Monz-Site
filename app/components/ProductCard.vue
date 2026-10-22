<template>
    <UPageCard
        :title="product.name"
        :description="product.description"
        variant="soft"
        class="group cursor-pointer transition hover:ring-2 hover:ring-secondary"
        :class="{ 'opacity-70': product.soldOut }"
    >
        <template #header>
            <div
                class="relative aspect-square overflow-hidden rounded-lg bg-elevated"
            >
                <img
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="size-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                />
                <UBadge
                    v-if="product.soldOut"
                    label="Sold Out"
                    color="neutral"
                    class="absolute top-3 left-3"
                />
            </div>
        </template>

        <template #footer>
            <div class="flex items-center justify-between gap-2">
                <span class="font-semibold">{{ product.price }}</span>
                <UButton
                    v-if="product.buyUrl && !product.soldOut"
                    :to="product.buyUrl"
                    target="_blank"
                    trailing-icon="i-lucide-external-link"
                    size="sm"
                    @click.stop
                >
                    Buy Here
                </UButton>
                <span v-else-if="product.soldOut" class="text-muted text-sm">
                    Sold Out
                </span>
            </div>
        </template>
    </UPageCard>
</template>

<script setup lang="ts">
import type { Product } from "~/types/contentTypes"

defineProps<{
    product: Product;
}>();
</script>