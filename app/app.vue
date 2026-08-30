<template>
    <UApp>
        <OilBackground v-if="colorMode.value === 'dark'" />
        <!-- Header Content -->
        <UHeader toggle-side="left">
            <template #title>
                <span
                    class="font-bold px-5 py-2 text-2xl rounded-md transition hover:bg-primary/20"
                >
                    Monz Site
                </span>
            </template>

            <UNavigationMenu
                :items="headerItems"
                highlight
                class="bg-muted/50 backdrop-blur rounded-full px-1.75 border border-muted/50"
                :ui="{
                    link: 'px-3 py-1 text-md before:rounded-full hover:before:bg-primary/20',
                }"
            />

            <template #right>
                <UColorModeButton class="hover:bg-primary/20" />
            </template>

            <template #body>
                <UNavigationMenu
                    :items="headerItems"
                    highlight
                    orientation="vertical"
                    :ui="{
                        list: 'gap-5 px-16',
                        link: 'px-4 py-4 my-4 text-2xl justify-center text-center before:rounded-full before:bg-muted hover:before:bg-primary/20',
                    }"
                />
            </template>
        </UHeader>
        <!-- Page Body Content -->
        <UMain>
            <UContainer
                class="'bg-black/25 backdrop-blur-3xl pb-8 rounded-b-3xl"
            >
                <NuxtPage />
            </UContainer>
        </UMain>
        <!-- Footer Content -->
        <UFooter class="backdrop-blur-sm">
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
const colorMode = useColorMode();
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

const footerLinks: NavigationMenuItem[] = [
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
    {
        label: "Terms of Use",
        to: "/terms",
        target: "_self",
    },
];

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
        icon: "lucide:mail",
        to: "mailto:website@monz.us",
        label: "E-Mail",
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
