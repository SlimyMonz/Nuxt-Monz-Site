import { buildImageManifest } from "~/composables/useImageManifest";
import type { AlbumManifest } from "~/types/imageCollectionTypes";

// Expects photos to be inside a folder and album with a unique name; have a thumbnail inside a nested "thumbs" folder, and be named 1.jpg, 2.jpg...etc.
const albumManifest: AlbumManifest = {
    path: "/photos",
    albums: [
        { title: "Dewey", path: "dewey", imageCount: 10 },
        { title: "Dunbar", path: "dunbar", imageCount: 20 },
        { title: "Florida Garden", path: "florida-garden", imageCount: 25 },
        { title: "Onyx", path: "onyx", imageCount: 27 },
        { title: "UCF", path: "ucf", imageCount: 21 },
    ],
};

export const ImageManifest = buildImageManifest(albumManifest);
