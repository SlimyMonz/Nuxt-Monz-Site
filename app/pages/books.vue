<template>
    <div>
        <SlimyHero :hero-info="heroInfo" />
        <UPageGrid
            class="grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <MediaCard
                v-for="(book, i) in sortedBooks"
                :key="i"
                :url="book.url"
                :title="book.title"
                :creator="book.author"
                :date="book.date"
                :imagePath="book.img"
                :textBody="book.description" />
        </UPageGrid>
    </div>
</template>

<script setup lang="ts">
    import { Books, heroInfo } from "~/data/books";
    const sortedBooks = [...Books].sort(
        (a, b) => Number(b.date) - Number(a.date),
    );
</script>
