<template>
    <div class="mb-16">
        <UPageHero
            id="top"
            headline="Do not eat!"
            title="Monster Reads"
            description="A collection of books I've read and enjoyed sorted by release year. Click one to buy on Apple Books!"
        />

        <UPageGrid>
            <ULink
                v-for="(book, i) in books"
                :key="i"
                :to="book.url"
                target="_blank"
                class="block"
            >
                <UCard
                    class="h-full transition hover:ring-4 hover:ring-secondary"
                    :ui="{ body: 'p-0 sm:p-0' }"
                >
                    <template #header>
                        <div class="flex flex-col gap-0.5">
                            <h2
                                class="text-left uppercase text-lg font-bold text-highlighted truncate"
                            >
                                {{ book.title }}
                            </h2>
                            <div
                                class="flex items-baseline justify-between gap-2"
                            >
                                <span class="text-left truncate">
                                    {{ book.author }}
                                </span>
                                <span class="text-right">
                                    {{ book.date }}
                                </span>
                            </div>
                        </div>
                    </template>
                    <img
                        :src="book.img"
                        :alt="`${book.title} by ${book.author}`"
                        class="w-full object-cover block"
                    />
                    <template #footer>
                        <p>
                            {{ book.description }}
                        </p>
                    </template>
                </UCard>
            </ULink>
        </UPageGrid>
    </div>
</template>

<script setup lang="ts">
import { books } from "~/data/books";
</script>
