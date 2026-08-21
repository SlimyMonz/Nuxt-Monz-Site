<template>
  <main class="mx-auto max-w-3xl px-6 py-12">
      <UPagination
        v-model:page="page"
        :items-per-page="itemsPerPage"
        :total="sortedBlogPosts.length"
        show-edges
        class="justify-center mb-16"
      />
    <article
      v-for="post in paginatedBlogPosts"
      class="mb-16"
    >
      <header>
        <h1 class="text-4xl font-bold tracking-tight">
          {{ post.title }}
        </h1>

        <time
          :datetime="post.date.toISOString()"
          class="mt-2 block"
        >
          {{ formatDate(post.date) }}
        </time>
      </header>

      <hr class="my-6">

      <p class="text-lg leading-relaxed">
        {{ post.body }}
      </p>
    </article>

    <UPagination
      v-model:page="page"
      :items-per-page="itemsPerPage"
      :total="sortedBlogPosts.length"
      show-edges
      class="justify-center"
    />
  </main>
</template>

<script setup lang="ts">
import { BlogPosts } from '~/data/blog'

const page = ref(1)
const itemsPerPage = 10

const sortedBlogPosts = computed(() => {
  return [...BlogPosts].sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  )
})

const paginatedBlogPosts = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  return sortedBlogPosts.value.slice(start, end)
})
</script>