// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = "https://www.monz.us";
const title = "Monz Site";
const description = "Official website created by Monz";
const banner = `${siteUrl}/monz_banner.png`;

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
                { property: "og:title", content: title },
                { property: "og:description", content: description },
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "Monz.us" },
                { property: "og:url", content: siteUrl },
                { property: "og:locale", content: "en_US" },

                // Banner for Embeds
                { property: "og:image", content: banner },
                { property: "og:image:alt", content: "Monz site banner" },
                { property: "og:image:width", content: "1200" },
                { property: "og:image:height", content: "806" },
                { name: "twitter:card", content: "summary_large_image" },
                
            ],
            link: [
                { rel: "canonical", href: siteUrl },
                { rel: "icon", href: "/favicon.ico", sizes: "any" },
            ],
        },
    },
});