export interface ArtFile {
  id: string
  full: string
  thumb: string
}

export interface ActiveImage {
  title: string
  file: ArtFile
}

interface ArtManifestEntry {
  title: string
  files: ArtFile[]
}

interface AlbumSpec {
  title: string
  count: number
  svgIndices?: number[]
}

const ART_BASE = '/art'

function buildAlbum({
  title,
  count,
  svgIndices = []
}: AlbumSpec): ArtManifestEntry {
  const path = `${ART_BASE}/${title}`

  return {
    title,
    files: Array.from({ length: count }, (_, i) => {
      const id = i + 1
      const isSvg = svgIndices.includes(id)
      const filename = `art_${title}_${id}.${isSvg ? 'svg' : 'jpg'}`

      return {
        id: String(id),
        full: `${path}/${filename}`,
        thumb: isSvg
          ? `${path}/${filename}`
          : `${path}/thumbs/${filename}`
      }
    })
  }
}

const albumSpecs = [
  { title: '2009', count: 6 },
  { title: '2010', count: 6 },
  { title: '2011', count: 5 },
  { title: '2012', count: 8 },
  { title: '2013', count: 3 },
  { title: '2014', count: 1 },
  { title: '2015', count: 6 },
  { title: '2016', count: 13 },
  { title: '2017', count: 12 },
  { title: '2018', count: 9 },
  { title: '2019', count: 16 },
  { title: '2020', count: 3 },
  { title: '2021', count: 28 },
  { title: '2022', count: 6 },
  { title: '2023', count: 6 },
  { title: '2025', count: 12, svgIndices: [1, 3, 4, 5, 6, 10, 11, 12] }
] satisfies AlbumSpec[]

export const artManifest = albumSpecs.map(buildAlbum)