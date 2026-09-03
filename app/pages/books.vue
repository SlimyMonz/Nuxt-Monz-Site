<template>
    <UPageHero
        id="top"
        headline="Do not eat!"
        title="Monster Reads"
        description="A collection of books I've read and enjoyed sorted by release year. Click one to buy on Apple Books!"
    />

    <UPageGrid>
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
import { Books } from "~/data/books";
const sortedBooks = [...Books].sort((a, b) => Number(b.date) - Number(a.date));
</script>
