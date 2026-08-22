export interface ArtManifest {
  root_dir: string;
  albums: Album[];
}

export interface Album {
  title: string;
  numberOfImages: number;
}

export interface ArtManifestEntry {
  title: string;
  files: ArtFile[];
}

export interface ArtFile {
  id: string;
  full: string;
  thumb: string;
}

export interface ActiveImage {
  title: string;
  file: ArtFile;
}

// Edit this when adding new albums. Expects photos to be inside a folder and album with a unique name, have a thumbnail inside a nested "thumbs" folder, and be named 1.jpg, 2.jpg...etc.
const manifest: ArtManifest = {
  root_dir: "/art",

  albums: [
    { title: "2009", numberOfImages: 6 },
    { title: "2010", numberOfImages: 6 },
    { title: "2011", numberOfImages: 5 },
    { title: "2012", numberOfImages: 8 },
    { title: "2013", numberOfImages: 3 },
    { title: "2014", numberOfImages: 1 },
    { title: "2015", numberOfImages: 6 },
    { title: "2016", numberOfImages: 13 },
    { title: "2017", numberOfImages: 12 },
    { title: "2018", numberOfImages: 9 },
    { title: "2019", numberOfImages: 16 },
    { title: "2020", numberOfImages: 3 },
    { title: "2021", numberOfImages: 28 },
    { title: "2022", numberOfImages: 6 },
    { title: "2023", numberOfImages: 6 },
    { title: "2025", numberOfImages: 12 },
  ],
};

function buildArtFiles(rootDir: string, album: Album): ArtFile[] {
  const files: ArtFile[] = [];
  const albumPath = `${rootDir}/${album.title}`;
  for (let index = 1; index <= album.numberOfImages; index++) {
    const id = String(index);
    const fullPath = `${albumPath}/${id}.jpg`;
    const thumbnailPath = `${albumPath}/thumbs/${id}.jpg`;
    const file: ArtFile = {
      id: id,
      full: fullPath,
      thumb: thumbnailPath,
    };
    files.push(file);
  }
  return files;
}

function buildArtManifest(manifest: ArtManifest): ArtManifestEntry[] {
  const artManifest: ArtManifestEntry[] = [];
  for (const album of manifest.albums) {
    const files = buildArtFiles(manifest.root_dir, album);
    const gallery: ArtManifestEntry = {
      title: album.title,
      files: files,
    };
    artManifest.push(gallery);
  }
  return artManifest;
}

export const artManifest = buildArtManifest(manifest);
