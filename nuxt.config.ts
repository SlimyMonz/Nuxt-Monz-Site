// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxt/ui"],
    css: ["~/assets/css/main.css"],
    icon: {
        clientBundle: {
            scan: true,
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
        head: {
            title: "Monz Site",
            meta: [
                { name: "description", content: "Website created by Monz" },
                { property: "og:type", content: "website" },
                {
                    property: "og:image",
                    content: "https://www.monz.us/about/monz_ref.png",
                },
                { name: "twitter:card", content: "summary_large_image" },
            ],
        },
    },
});
