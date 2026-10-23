export default defineAppConfig({
    ui: {
        colors: {
            primary: "ember",
            secondary: "grape",
            neutral: "ink",
        },
        pageFeature: {
            slots: {
                root: "group p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 transition-all hover:ring-4 hover:ring-secondary",
                title: "group-hover:text-secondary transition-colors",
                leadingIcon:
                    "group-hover:text-secondary transition-colors size-12",
            },
        },
    },
});
