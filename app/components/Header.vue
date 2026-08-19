<template>
  <UHeader>
    <template #title>
      <span class="font-bold text-2xl">
        Monz
      </span>
    </template>

    <UNavigationMenu
      :items="items"
    />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const router = useRouter()

const items = computed<NavigationMenuItem[]>(() =>
  router.getRoutes()
    .filter(route =>
      route.path !== '/' &&
      route.path !== '/:all(.*)*' &&
      route.path !== '/404'
    )
    .map(route => ({
      label: route.path
        .slice(1)
        .replace(/-/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase()),
      to: route.path
    }))
)
</script>