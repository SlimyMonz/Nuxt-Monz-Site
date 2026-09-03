<template>
    <ULink :to="url" target="_blank" class="block">
        <UCard
            class="h-full transition hover:ring-4 hover:ring-secondary"
            :ui="{ body: 'p-0 sm:p-0' }"
        >
            <template #header>
                <div class="flex flex-col gap-0.5">
                    <h2
                        class="text-left text-lg font-bold text-highlighted truncate"
                    >
                        {{ title }}
                    </h2>
                    <div class="flex items-baseline justify-between gap-2">
                        <span class="text-left truncate">
                            {{ creator }}
                        </span>
                        <span class="text-right">
                            {{ date }}
                        </span>
                    </div>
                </div>
            </template>
            <img
                :src="imagePath"
                :alt="`${title} by ${creator}`"
                class="w-full object-cover block"
            />
            <template #footer>
                <p>
                    {{ textBody }}
                </p>
            </template>
        </UCard>
    </ULink>
</template>
<script setup lang="ts">
interface Props {
    url: string;
    title: string;
    creator: string;
    date: string;
    imagePath: string;
    textBody: string;
}

defineProps<Props>();
</script>
