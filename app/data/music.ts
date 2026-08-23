interface Album {
  title: string
  artist: string
  year: string
  img: string
  url: string
  body: string
}

export const albums: Album[] = [
  {
    title: 'Mayhem',
    artist: 'Lady Gaga',
    year: '2025',
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/85/96/e5/8596e5c9-ea5d-f074-14ab-0def74d49a41/Job55a60f4d-834e-43b4-b0ac-bc65708cbd78-187464330-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_366977506_2078765148-Time1741332248310.png/592x592bb.webp',
    url: 'https://music.apple.com/us/album/mayhem/1792666546',
    body: 'Abracadabra is the standout here, but the whole album is electrifyingly good. This is the best Lady Gaga has ever been.'
  },
  {
    title: 'Utopia',
    artist: 'St. Lucia',
    year: '2022',
    img: 'https://f4.bcbits.com/img/a3964903351_10.jpg',
    url: 'https://stluciamusic.bandcamp.com/album/utopia',
    body: 'Tropic pop taken to the next level. A mix of upbeat and smooth, with vocals and instruments that carry you away.'
  },
  {
    title: 'Bliss',
    artist: 'Temples',
    year: '2026',
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e3/56/77/e35677cf-5fb6-5d06-11d8-63733431a0e4/8717931356282.jpg/592x592bb.webp',
    url: 'https://music.apple.com/us/album/bliss/1877638926',
    body: 'Taking the sounds of the 1950s and adding an insanely modern energy with some fantastic production quality.'
  },
  {
    title: 'As I Try Not To Fall Apart',
    artist: 'White Lies',
    year: '2022',
    img: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ac/8a/d5/ac8ad52c-f66a-e842-ec57-c653d0f799c0/5400863100384_cover.jpg/592x592bb.webp',
    url: 'https://music.apple.com/us/album/as-i-try-not-to-fall-apart-bonus-edition/1650376145',
    body: 'The epitome of "sad white boy music" with a lot of upbeat instrumentals. Solid male vocalist and heart-breaking lyrics.'
  }
]