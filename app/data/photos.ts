export interface PhotoManifest {
  root_dir: string;
  albums: Album[];
}

export interface Album {
  title: string;
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

// Edit this when adding new photos or albums. Expects photos to be inside a folder and album with a unique name, have a thumbnail inside a nested "thumbs" folder, and be named 1.jpg, 2.jpg...etc.
const manifest: PhotoManifest = {
  root_dir: "/photos",

  albums: [
    { title: "Onyx", numberOfPhotos: 27 },
  ]
};

function buildPhotoFiles(rootDir: string, album: Album): PhotoFile[] {
  const files: PhotoFile[] = [];
  const albumPath = `${rootDir}/${album.title}`;
  for (let index = 1; index <= album.numberOfPhotos; index++) {
    const id = String(index);
    const fullPath = `${albumPath}/${id}.jpg`;
    const thumbnailPath = `${albumPath}/thumbs/${id}.jpg`;
    const file: PhotoFile = {
      id: id,
      full: fullPath,
      thumb: thumbnailPath,
    };
    files.push(file);
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

export const photoManifest = buildPhotoManifest(manifest);
