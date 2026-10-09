<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description"
    />
    <UPageGrid class="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <MediaCard
            v-for="(book, i) in sortedBooks"
            :key="i"
            :url="book.url"
            :title="book.title"
            :creator="book.author"
            :date="book.date"
            :imagePath="book.img"
            :textBody="book.description"
        />
    </UPageGrid>
</template>

<script setup lang="ts">
    import { Books, heroInfo } from "~/data/books";
    const sortedBooks = [...Books].sort(
        (a, b) => Number(b.date) - Number(a.date),
    );
</script>
