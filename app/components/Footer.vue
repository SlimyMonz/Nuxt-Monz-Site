<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright SlimyMonz © {{ new Date().getFullYear() }}
      </p>
    </template>

    <UNavigationMenu :items="footerLinks" variant="link" />

    <template #right>
    <UTooltip
      v-for="button in footerButtons"
      :key="button.label"
      :text="button.label"
    >
      <UButton
        :icon="button.icon"
        color="neutral"
        variant="ghost"
        :to="button.to"
        target="_blank"
        :aria-label="button.label"
      />
    </UTooltip>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
import { footerButtons, footerLinks } from '~/data/footer';
</script>