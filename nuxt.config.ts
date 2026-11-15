// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = "https://www.monz.us";
const title = "Monz Site";
const description = "Official website created by Monz";
const banner = `${siteUrl}/about/monz_ref.png`;
const icon = `${siteUrl}/about/monz_icon.jpg`;

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
            htmlAttrs: { lang: "en" },
            title,
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: description },
                { name: "robots", content: "index, follow" },

                // Open Graph
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: title },
                { property: "og:title", content: title },
                { property: "og:description", content: description },
                { property: "og:url", content: siteUrl },
                { property: "og:locale", content: "en_US" },

                // Banner first (primary), icon second (fallback)
                { property: "og:image", content: banner },
                { property: "og:image:alt", content: "Monz banner" },
                { property: "og:image", content: icon },
                { property: "og:image:alt", content: "Monz icon" },

                // Twitter (also read by Discord)
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: title },
                { name: "twitter:description", content: description },
                { name: "twitter:image", content: banner },
                { name: "twitter:image:alt", content: "Monz banner" },
            ],
            link: [
                { rel: "canonical", href: siteUrl },
                { rel: "icon", type: "image/jpeg", href: "/about/monz_icon.jpg" },
                { rel: "apple-touch-icon", href: "/about/monz_icon.jpg" },
            ],
        },
    },
});