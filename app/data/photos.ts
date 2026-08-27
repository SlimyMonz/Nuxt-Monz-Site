export interface PhotoManifest {
  root_dir: string;
  albums: Album[];
}

export interface Album {
  title: string;
  folder: string;
  numberOfPhotos: number;
}

export interface PhotoManifestEntry {
  title: string;
  files: PhotoFile[];
}

export interface PhotoFile {
  id: string;
  full: string;
  thumb: string;
}

export interface ActiveImage {
  title: string;
  file: PhotoFile;
}

// Expects photos to be inside a folder and album with a unique name; have a thumbnail inside a nested "thumbs" folder, and be named 1.jpg, 2.jpg...etc.
const Manifest: PhotoManifest = {
  root_dir: "/photos",
  albums: [
    { title: "Dewey", folder: "dewey", numberOfPhotos: 10 },
    { title: "Dunbar", folder: "dunbar", numberOfPhotos: 20 },
    { title: "Florida Garden", folder: "florida-garden", numberOfPhotos: 25 },
    { title: "Onyx", folder: "onyx", numberOfPhotos: 27 },
    { title: "UCF", folder: "ucf", numberOfPhotos: 21 },
  ],
};

function buildPhotoFiles(rootDir: string, album: Album): PhotoFile[] {
  const files: PhotoFile[] = [];
  const albumPath = `${rootDir}/${album.folder}`;
  for (let index = 1; index <= album.numberOfPhotos; index++) {
    const id = String(index);
    files.push({
      id,
      full: `${albumPath}/${id}.jpg`,
      thumb: `${albumPath}/thumbs/${id}.jpg`,
    });
  }
  return files;
}

function buildPhotoManifest(manifest: PhotoManifest): PhotoManifestEntry[] {
  const photoManifest: PhotoManifestEntry[] = [];
  for (const album of manifest.albums) {
    const files = buildPhotoFiles(manifest.root_dir, album);
    const gallery: PhotoManifestEntry = {
      title: album.title,
      files: files,
    };
    photoManifest.push(gallery);
  }
  return photoManifest;
}

export const PhotoManifest = buildPhotoManifest(Manifest);
