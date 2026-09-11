<template>
    <UApp>
        <SlimyBackground v-if="colorMode.preference === 'dark'" />
        <SlimyHeader />
        <UMain>
            <UContainer
                :class="{
                    'bg-black/10 backdrop-blur-3xl pb-8 rounded-b-3xl': colorMode.preference === 'dark',
                }">
                <NuxtPage />
            </UContainer>
        </UMain>
        <SlimyFooter />
    </UApp>
</template>

<script setup lang="ts">
    const colorMode = useColorMode();
</script>
