<template>
    <UApp>
        <!-- Header Content -->
        <UHeader>
            <template #title>
                <span class="font-bold text-2xl"> Monz </span>
            </template>

            <UNavigationMenu :items="headerItems" />

            <template #right>
                <UColorModeButton />
            </template>

            <template #body>
                <UNavigationMenu :items="headerItems" orientation="vertical" />
            </template>
        </UHeader>
        <!-- Page Body Content -->
        <UMain>
            <UContainer>
                <NuxtPage />
            </UContainer>
        </UMain>
        <!-- Footer Content -->
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
    </UApp>
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

// Links in the bottom-middle inside the footer.
const footerLinks: NavigationMenuItem[] = [
    {
        label: "Contact",
        to: "mailto:website@monz.us",
        target: "_blank",
    },
    {
        label: "Source",
        to: "https://codeberg.org/Monz/nuxt-monz-site",
        target: "_blank",
    },
    {
        label: "Nuxt",
        to: "https://nuxt.com/",
        target: "_blank",
    },
    {
        label: "Nuxt UI",
        to: "https://ui.nuxt.com/",
        target: "_blank",
    },
];

// Button links at the bottom-right inside the footer.
const footerButtons = [
    {
        icon: "simple-icons:bluesky",
        to: "https://bsky.app/profile/monz.us",
        label: "Bluesky",
    },
    {
        icon: "simple-icons:codeberg",
        to: "https://codeberg.org/Monz?tab=overview",
        label: "Codeberg",
    },
    {
        icon: "simple-icons:furaffinity",
        to: "https://www.furaffinity.net/user/slimymonz",
        label: "FurAffinity",
    },
    {
        icon: "simple-icons:mastodon",
        to: "https://yiff.life/@slimymonz",
        label: "Mastodon",
    },
];
</script>
