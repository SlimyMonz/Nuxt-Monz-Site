<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />

    <USeparator />

    <UPageSection id="products">
        <!-- Filter bar -->
        <div class="flex flex-wrap gap-2">
            <UButton
                v-for="cat in categories"
                :key="cat.value"
                :variant="activeCategory === cat.value ? 'solid' : 'outline'"
                color="primary"
                @click="activeCategory = cat.value"
            >
                {{ cat.label }}
                <UBadge
                    :label="String(countFor(cat.value))"
                    color="neutral"
                    variant="subtle"
                    size="sm"
                />
            </UButton>
        </div>

        <!-- Product grid -->
        <UPageGrid v-if="filteredProducts.length">
            <ProductCard
                v-for="product in filteredProducts"
                :key="product.id"
                :product="product"
                @click="selected = product"
            />
        </UPageGrid>

        <p v-else class="text-center text-muted py-16">
            No products in this category yet.
        </p>
    </UPageSection>

    <!-- Product detail modal -->
    <ProductModal v-model="selected" />
</template>

<script setup lang="ts">
import {
    heroInfo,
    categories,
    products,
} from "~/data/store";
import type { Product, ProductCategory } from "~/types/contentTypes";

type FilterValue = ProductCategory | "all";

const activeCategory = ref<FilterValue>("all");
const selected = ref<Product | null>(null);

const filteredProducts = computed(() =>
    activeCategory.value === "all"
        ? products
        : products.filter((p) => p.category === activeCategory.value),
);

const countFor = (value: FilterValue) =>
    value === "all"
        ? products.length
        : products.filter((p) => p.category === value).length;

const categoryLabel = (cat?: ProductCategory) =>
    categories.find((c) => c.value === cat)?.label ?? "";
</script>