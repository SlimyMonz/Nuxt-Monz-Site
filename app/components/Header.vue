<template>
    <UHeader toggle-side="left">
        <template #title>
            <span
                class="font-bold px-5 py-2 text-2xl rounded transition hover:bg-primary/50"
            >
                Home
            </span>
        </template>

        <UNavigationMenu
            :items="headerItems"
            highlight
            class="bg-muted/50 backdrop-blur rounded px-1.75 border border-muted/50"
            :ui="{
                link: 'px-3 py-1 text-md before:rounded hover:before:bg-primary/50',
            }"
        />

        <template #right>
            <UColorModeButton class="hover:bg-primary/50" />
        </template>

        <template #body>
            <UNavigationMenu
                :items="headerItems"
                highlight
                orientation="vertical"
                :ui="{
                    list: 'gap-5 px-16',
                    link: 'px-4 py-4 my-4 text-2xl justify-center text-center before:rounded before:bg-muted hover:before:bg-primary/50',
                }"
            />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from "@nuxt/ui";
    const router = useRouter();
    // Grabs pages and computes paths to use in navigation header
    const headerItems = computed<NavigationMenuItem[]>(() =>
        router
            .getRoutes()
            .filter(
                (route) =>
                    route.path !== "/" &&
                    route.path !== "/terms" &&
                    route.path !== "/:all(.*)*" &&
                    route.path !== "/404",
            )
            .map((route) => ({
                label: route.path
                    .slice(1)
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase()),
                to: route.path,
            })),
    );
</script>
