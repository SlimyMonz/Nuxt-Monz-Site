import type { AlbumManifest } from "~/types/imageCollections";

// Edit this when adding new albums. Expects photos to be inside a folder and album with a unique name, have a thumbnail inside a nested "thumbs" folder, and be named 1.jpg, 2.jpg...etc.
const albumManifest: AlbumManifest = {
    path: "/art",
    albums: [
        { title: "2009", path: "2009", imageCount: 6 },
        { title: "2010", path: "2010", imageCount: 6 },
        { title: "2011", path: "2011", imageCount: 5 },
        { title: "2012", path: "2012", imageCount: 8 },
        { title: "2013", path: "2013", imageCount: 3 },
        { title: "2014", path: "2014", imageCount: 1 },
        { title: "2015", path: "2015", imageCount: 6 },
        { title: "2016", path: "2016", imageCount: 13 },
        { title: "2017", path: "2017", imageCount: 12 },
        { title: "2018", path: "2018", imageCount: 9 },
        { title: "2019", path: "2019", imageCount: 16 },
        { title: "2020", path: "2020", imageCount: 3 },
        { title: "2021", path: "2021", imageCount: 28 },
        { title: "2022", path: "2022", imageCount: 6 },
        { title: "2023", path: "2023", imageCount: 6 },
        { title: "2025", path: "2025", imageCount: 12 },
        { title: "2026", path: "2026", imageCount: 1 },
    ],
};

export const ImageManifest = buildImageManifest(albumManifest);
