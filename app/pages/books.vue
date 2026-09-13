<template>
    <UPageHero
        id="top"
        :headline="heroInfo.headline"
        :title="heroInfo.title"
        :description="heroInfo.description" />
    <UPageGrid>
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
</template>

<script setup lang="ts">
    import { Books, heroInfo } from "~/data/books";
    const sortedBooks = [...Books].sort(
        (a, b) => Number(b.date) - Number(a.date),
    );
</script>
