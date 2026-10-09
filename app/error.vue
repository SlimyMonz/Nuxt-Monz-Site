<template>
    <UApp>
        <SlimyBackground />
        <UMain>
            <UContainer>
                <UPageHero
                    headline="You've made a mistake."
                    :title="error.status?.toString()"
                    :description="error.message"
                    :links="links"
                >
                </UPageHero>
            </UContainer>
        </UMain>
    </UApp>
</template>

<script setup lang="ts">
    import type { NuxtError } from "#app";
    import type { ButtonProps } from "@nuxt/ui";

    defineProps<{
        error: NuxtError;
    }>();

    const router = useRouter();

    const links = ref<ButtonProps[]>([
        {
            label: "Return from where you came",
            onClick: goBack,
        },
    ]);

    async function goBack() {
        const hasHistory = import.meta.client && window.history.state?.back;
        await clearError();
        if (hasHistory) {
            router.back();
        } else {
            await navigateTo("/");
        }
    }
</script>
