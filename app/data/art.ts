export interface ArtFile {
  id: string;
  full: string;
  thumb: string;
}

export interface ActiveImage {
  title: string;
  file: ArtFile;
}

interface ArtManifestEntry {
  title: string;
  files: ArtFile[];
}

// This could be generated, but I don't want to deal with build-time generating files.
export const artManifest: ArtManifestEntry[] = [
  {
    title: "2009",
    files: [
      {
        id: "1",
        full: `/art/2009/art_2009_1.jpg`,
        thumb: "/art/2009/thumbs/art_2009_1.jpg",
      },
      {
        id: "2",
        full: "/art/2009/art_2009_2.jpg",
        thumb: "/art/2009/thumbs/art_2009_2.jpg",
      },
      {
        id: "3",
        full: "/art/2009/art_2009_3.jpg",
        thumb: "/art/2009/thumbs/art_2009_3.jpg",
      },
      {
        id: "4",
        full: "/art/2009/art_2009_4.jpg",
        thumb: "/art/2009/thumbs/art_2009_4.jpg",
      },
      {
        id: "5",
        full: "/art/2009/art_2009_5.jpg",
        thumb: "/art/2009/thumbs/art_2009_5.jpg",
      },
      {
        id: "6",
        full: "/art/2009/art_2009_6.jpg",
        thumb: "/art/2009/thumbs/art_2009_6.jpg",
      },
    ],
  },
  {
    title: "2010",
    files: [
      {
        id: "1",
        full: "/art/2010/art_2010_1.jpg",
        thumb: "/art/2010/thumbs/art_2010_1.jpg",
      },
      {
        id: "2",
        full: "/art/2010/art_2010_2.jpg",
        thumb: "/art/2010/thumbs/art_2010_2.jpg",
      },
      {
        id: "3",
        full: "/art/2010/art_2010_3.jpg",
        thumb: "/art/2010/thumbs/art_2010_3.jpg",
      },
      {
        id: "4",
        full: "/art/2010/art_2010_4.jpg",
        thumb: "/art/2010/thumbs/art_2010_4.jpg",
      },
      {
        id: "5",
        full: "/art/2010/art_2010_5.jpg",
        thumb: "/art/2010/thumbs/art_2010_5.jpg",
      },
      {
        id: "6",
        full: "/art/2010/art_2010_6.jpg",
        thumb: "/art/2010/thumbs/art_2010_6.jpg",
      },
    ],
  },
  {
    title: "2011",
    files: [
      {
        id: "1",
        full: "/art/2011/art_2011_1.jpg",
        thumb: "/art/2011/thumbs/art_2011_1.jpg",
      },
      {
        id: "2",
        full: "/art/2011/art_2011_2.jpg",
        thumb: "/art/2011/thumbs/art_2011_2.jpg",
      },
      {
        id: "3",
        full: "/art/2011/art_2011_3.jpg",
        thumb: "/art/2011/thumbs/art_2011_3.jpg",
      },
      {
        id: "4",
        full: "/art/2011/art_2011_4.jpg",
        thumb: "/art/2011/thumbs/art_2011_4.jpg",
      },
      {
        id: "5",
        full: "/art/2011/art_2011_5.jpg",
        thumb: "/art/2011/thumbs/art_2011_5.jpg",
      },
    ],
  },
  {
    title: "2012",
    files: [
      {
        id: "1",
        full: "/art/2012/art_2012_1.jpg",
        thumb: "/art/2012/thumbs/art_2012_1.jpg",
      },
      {
        id: "2",
        full: "/art/2012/art_2012_2.jpg",
        thumb: "/art/2012/thumbs/art_2012_2.jpg",
      },
      {
        id: "3",
        full: "/art/2012/art_2012_3.jpg",
        thumb: "/art/2012/thumbs/art_2012_3.jpg",
      },
      {
        id: "4",
        full: "/art/2012/art_2012_4.jpg",
        thumb: "/art/2012/thumbs/art_2012_4.jpg",
      },
      {
        id: "5",
        full: "/art/2012/art_2012_5.jpg",
        thumb: "/art/2012/thumbs/art_2012_5.jpg",
      },
      {
        id: "6",
        full: "/art/2012/art_2012_6.jpg",
        thumb: "/art/2012/thumbs/art_2012_6.jpg",
      },
      {
        id: "7",
        full: "/art/2012/art_2012_7.jpg",
        thumb: "/art/2012/thumbs/art_2012_7.jpg",
      },
      {
        id: "8",
        full: "/art/2012/art_2012_8.jpg",
        thumb: "/art/2012/thumbs/art_2012_8.jpg",
      },
    ],
  },
  {
    title: "2013",
    files: [
      {
        id: "1",
        full: "/art/2013/art_2013_1.jpg",
        thumb: "/art/2013/thumbs/art_2013_1.jpg",
      },
      {
        id: "2",
        full: "/art/2013/art_2013_2.jpg",
        thumb: "/art/2013/thumbs/art_2013_2.jpg",
      },
      {
        id: "3",
        full: "/art/2013/art_2013_3.jpg",
        thumb: "/art/2013/thumbs/art_2013_3.jpg",
      },
    ],
  },
  {
    title: "2014",
    files: [
      {
        id: "1",
        full: "/art/2014/art_2014_1.jpg",
        thumb: "/art/2014/thumbs/art_2014_1.jpg",
      },
    ],
  },
  {
    title: "2015",
    files: [
      {
        id: "1",
        full: "/art/2015/art_2015_1.jpg",
        thumb: "/art/2015/thumbs/art_2015_1.jpg",
      },
      {
        id: "2",
        full: "/art/2015/art_2015_2.jpg",
        thumb: "/art/2015/thumbs/art_2015_2.jpg",
      },
      {
        id: "3",
        full: "/art/2015/art_2015_3.jpg",
        thumb: "/art/2015/thumbs/art_2015_3.jpg",
      },
      {
        id: "4",
        full: "/art/2015/art_2015_4.jpg",
        thumb: "/art/2015/thumbs/art_2015_4.jpg",
      },
      {
        id: "5",
        full: "/art/2015/art_2015_5.jpg",
        thumb: "/art/2015/thumbs/art_2015_5.jpg",
      },
      {
        id: "6",
        full: "/art/2015/art_2015_6.jpg",
        thumb: "/art/2015/thumbs/art_2015_6.jpg",
      },
    ],
  },
  {
    title: "2016",
    files: [
      {
        id: "1",
        full: "/art/2016/art_2016_1.jpg",
        thumb: "/art/2016/thumbs/art_2016_1.jpg",
      },
      {
        id: "2",
        full: "/art/2016/art_2016_2.jpg",
        thumb: "/art/2016/thumbs/art_2016_2.jpg",
      },
      {
        id: "3",
        full: "/art/2016/art_2016_3.jpg",
        thumb: "/art/2016/thumbs/art_2016_3.jpg",
      },
      {
        id: "4",
        full: "/art/2016/art_2016_4.jpg",
        thumb: "/art/2016/thumbs/art_2016_4.jpg",
      },
      {
        id: "5",
        full: "/art/2016/art_2016_5.jpg",
        thumb: "/art/2016/thumbs/art_2016_5.jpg",
      },
      {
        id: "6",
        full: "/art/2016/art_2016_6.jpg",
        thumb: "/art/2016/thumbs/art_2016_6.jpg",
      },
      {
        id: "7",
        full: "/art/2016/art_2016_7.jpg",
        thumb: "/art/2016/thumbs/art_2016_7.jpg",
      },
      {
        id: "8",
        full: "/art/2016/art_2016_8.jpg",
        thumb: "/art/2016/thumbs/art_2016_8.jpg",
      },
      {
        id: "9",
        full: "/art/2016/art_2016_9.jpg",
        thumb: "/art/2016/thumbs/art_2016_9.jpg",
      },
      {
        id: "10",
        full: "/art/2016/art_2016_10.jpg",
        thumb: "/art/2016/thumbs/art_2016_10.jpg",
      },
      {
        id: "11",
        full: "/art/2016/art_2016_11.jpg",
        thumb: "/art/2016/thumbs/art_2016_11.jpg",
      },
      {
        id: "12",
        full: "/art/2016/art_2016_12.jpg",
        thumb: "/art/2016/thumbs/art_2016_12.jpg",
      },
      {
        id: "13",
        full: "/art/2016/art_2016_13.jpg",
        thumb: "/art/2016/thumbs/art_2016_13.jpg",
      },
    ],
  },
  {
    title: "2017",
    files: [
      {
        id: "1",
        full: "/art/2017/art_2017_1.jpg",
        thumb: "/art/2017/thumbs/art_2017_1.jpg",
      },
      {
        id: "2",
        full: "/art/2017/art_2017_2.jpg",
        thumb: "/art/2017/thumbs/art_2017_2.jpg",
      },
      {
        id: "3",
        full: "/art/2017/art_2017_3.jpg",
        thumb: "/art/2017/thumbs/art_2017_3.jpg",
      },
      {
        id: "4",
        full: "/art/2017/art_2017_4.jpg",
        thumb: "/art/2017/thumbs/art_2017_4.jpg",
      },
      {
        id: "5",
        full: "/art/2017/art_2017_5.jpg",
        thumb: "/art/2017/thumbs/art_2017_5.jpg",
      },
      {
        id: "6",
        full: "/art/2017/art_2017_6.jpg",
        thumb: "/art/2017/thumbs/art_2017_6.jpg",
      },
      {
        id: "7",
        full: "/art/2017/art_2017_7.jpg",
        thumb: "/art/2017/thumbs/art_2017_7.jpg",
      },
      {
        id: "8",
        full: "/art/2017/art_2017_8.jpg",
        thumb: "/art/2017/thumbs/art_2017_8.jpg",
      },
      {
        id: "9",
        full: "/art/2017/art_2017_9.jpg",
        thumb: "/art/2017/thumbs/art_2017_9.jpg",
      },
      {
        id: "10",
        full: "/art/2017/art_2017_10.jpg",
        thumb: "/art/2017/thumbs/art_2017_10.jpg",
      },
      {
        id: "11",
        full: "/art/2017/art_2017_11.jpg",
        thumb: "/art/2017/thumbs/art_2017_11.jpg",
      },
      {
        id: "12",
        full: "/art/2017/art_2017_12.jpg",
        thumb: "/art/2017/thumbs/art_2017_12.jpg",
      },
    ],
  },
  {
    title: "2018",
    files: [
      {
        id: "1",
        full: "/art/2018/art_2018_1.jpg",
        thumb: "/art/2018/thumbs/art_2018_1.jpg",
      },
      {
        id: "2",
        full: "/art/2018/art_2018_2.jpg",
        thumb: "/art/2018/thumbs/art_2018_2.jpg",
      },
      {
        id: "3",
        full: "/art/2018/art_2018_3.jpg",
        thumb: "/art/2018/thumbs/art_2018_3.jpg",
      },
      {
        id: "4",
        full: "/art/2018/art_2018_4.jpg",
        thumb: "/art/2018/thumbs/art_2018_4.jpg",
      },
      {
        id: "5",
        full: "/art/2018/art_2018_5.jpg",
        thumb: "/art/2018/thumbs/art_2018_5.jpg",
      },
      {
        id: "6",
        full: "/art/2018/art_2018_6.jpg",
        thumb: "/art/2018/thumbs/art_2018_6.jpg",
      },
      {
        id: "7",
        full: "/art/2018/art_2018_7.jpg",
        thumb: "/art/2018/thumbs/art_2018_7.jpg",
      },
      {
        id: "8",
        full: "/art/2018/art_2018_8.jpg",
        thumb: "/art/2018/thumbs/art_2018_8.jpg",
      },
      {
        id: "9",
        full: "/art/2018/art_2018_9.jpg",
        thumb: "/art/2018/thumbs/art_2018_9.jpg",
      },
    ],
  },
  {
    title: "2019",
    files: [
      {
        id: "1",
        full: "/art/2019/art_2019_1.jpg",
        thumb: "/art/2019/thumbs/art_2019_1.jpg",
      },
      {
        id: "2",
        full: "/art/2019/art_2019_2.jpg",
        thumb: "/art/2019/thumbs/art_2019_2.jpg",
      },
      {
        id: "3",
        full: "/art/2019/art_2019_3.jpg",
        thumb: "/art/2019/thumbs/art_2019_3.jpg",
      },
      {
        id: "4",
        full: "/art/2019/art_2019_4.jpg",
        thumb: "/art/2019/thumbs/art_2019_4.jpg",
      },
      {
        id: "5",
        full: "/art/2019/art_2019_5.jpg",
        thumb: "/art/2019/thumbs/art_2019_5.jpg",
      },
      {
        id: "6",
        full: "/art/2019/art_2019_6.jpg",
        thumb: "/art/2019/thumbs/art_2019_6.jpg",
      },
      {
        id: "7",
        full: "/art/2019/art_2019_7.jpg",
        thumb: "/art/2019/thumbs/art_2019_7.jpg",
      },
      {
        id: "8",
        full: "/art/2019/art_2019_8.jpg",
        thumb: "/art/2019/thumbs/art_2019_8.jpg",
      },
      {
        id: "9",
        full: "/art/2019/art_2019_9.jpg",
        thumb: "/art/2019/thumbs/art_2019_9.jpg",
      },
      {
        id: "10",
        full: "/art/2019/art_2019_10.jpg",
        thumb: "/art/2019/thumbs/art_2019_10.jpg",
      },
      {
        id: "11",
        full: "/art/2019/art_2019_11.jpg",
        thumb: "/art/2019/thumbs/art_2019_11.jpg",
      },
      {
        id: "12",
        full: "/art/2019/art_2019_12.jpg",
        thumb: "/art/2019/thumbs/art_2019_12.jpg",
      },
      {
        id: "13",
        full: "/art/2019/art_2019_13.jpg",
        thumb: "/art/2019/thumbs/art_2019_13.jpg",
      },
      {
        id: "14",
        full: "/art/2019/art_2019_14.jpg",
        thumb: "/art/2019/thumbs/art_2019_14.jpg",
      },
      {
        id: "15",
        full: "/art/2019/art_2019_15.jpg",
        thumb: "/art/2019/thumbs/art_2019_15.jpg",
      },
      {
        id: "16",
        full: "/art/2019/art_2019_16.jpg",
        thumb: "/art/2019/thumbs/art_2019_16.jpg",
      },
    ],
  },
  {
    title: "2020",
    files: [
      {
        id: "1",
        full: "/art/2020/art_2020_1.jpg",
        thumb: "/art/2020/thumbs/art_2020_1.jpg",
      },
      {
        id: "2",
        full: "/art/2020/art_2020_2.jpg",
        thumb: "/art/2020/thumbs/art_2020_2.jpg",
      },
      {
        id: "3",
        full: "/art/2020/art_2020_3.jpg",
        thumb: "/art/2020/thumbs/art_2020_3.jpg",
      },
    ],
  },
  {
    title: "2021",
    files: [
      {
        id: "1",
        full: "/art/2021/art_2021_1.jpg",
        thumb: "/art/2021/thumbs/art_2021_1.jpg",
      },
      {
        id: "2",
        full: "/art/2021/art_2021_2.jpg",
        thumb: "/art/2021/thumbs/art_2021_2.jpg",
      },
      {
        id: "3",
        full: "/art/2021/art_2021_3.jpg",
        thumb: "/art/2021/thumbs/art_2021_3.jpg",
      },
      {
        id: "4",
        full: "/art/2021/art_2021_4.jpg",
        thumb: "/art/2021/thumbs/art_2021_4.jpg",
      },
      {
        id: "5",
        full: "/art/2021/art_2021_5.jpg",
        thumb: "/art/2021/thumbs/art_2021_5.jpg",
      },
      {
        id: "6",
        full: "/art/2021/art_2021_6.jpg",
        thumb: "/art/2021/thumbs/art_2021_6.jpg",
      },
      {
        id: "7",
        full: "/art/2021/art_2021_7.jpg",
        thumb: "/art/2021/thumbs/art_2021_7.jpg",
      },
      {
        id: "8",
        full: "/art/2021/art_2021_8.jpg",
        thumb: "/art/2021/thumbs/art_2021_8.jpg",
      },
      {
        id: "9",
        full: "/art/2021/art_2021_9.jpg",
        thumb: "/art/2021/thumbs/art_2021_9.jpg",
      },
      {
        id: "10",
        full: "/art/2021/art_2021_10.jpg",
        thumb: "/art/2021/thumbs/art_2021_10.jpg",
      },
      {
        id: "11",
        full: "/art/2021/art_2021_11.jpg",
        thumb: "/art/2021/thumbs/art_2021_11.jpg",
      },
      {
        id: "12",
        full: "/art/2021/art_2021_12.jpg",
        thumb: "/art/2021/thumbs/art_2021_12.jpg",
      },
      {
        id: "13",
        full: "/art/2021/art_2021_13.jpg",
        thumb: "/art/2021/thumbs/art_2021_13.jpg",
      },
      {
        id: "14",
        full: "/art/2021/art_2021_14.jpg",
        thumb: "/art/2021/thumbs/art_2021_14.jpg",
      },
      {
        id: "15",
        full: "/art/2021/art_2021_15.jpg",
        thumb: "/art/2021/thumbs/art_2021_15.jpg",
      },
      {
        id: "16",
        full: "/art/2021/art_2021_16.jpg",
        thumb: "/art/2021/thumbs/art_2021_16.jpg",
      },
      {
        id: "17",
        full: "/art/2021/art_2021_17.jpg",
        thumb: "/art/2021/thumbs/art_2021_17.jpg",
      },
      {
        id: "18",
        full: "/art/2021/art_2021_18.jpg",
        thumb: "/art/2021/thumbs/art_2021_18.jpg",
      },
      {
        id: "19",
        full: "/art/2021/art_2021_19.jpg",
        thumb: "/art/2021/thumbs/art_2021_19.jpg",
      },
      {
        id: "20",
        full: "/art/2021/art_2021_20.jpg",
        thumb: "/art/2021/thumbs/art_2021_20.jpg",
      },
      {
        id: "21",
        full: "/art/2021/art_2021_21.jpg",
        thumb: "/art/2021/thumbs/art_2021_21.jpg",
      },
      {
        id: "22",
        full: "/art/2021/art_2021_22.jpg",
        thumb: "/art/2021/thumbs/art_2021_22.jpg",
      },
      {
        id: "23",
        full: "/art/2021/art_2021_23.jpg",
        thumb: "/art/2021/thumbs/art_2021_23.jpg",
      },
      {
        id: "24",
        full: "/art/2021/art_2021_24.jpg",
        thumb: "/art/2021/thumbs/art_2021_24.jpg",
      },
      {
        id: "25",
        full: "/art/2021/art_2021_25.jpg",
        thumb: "/art/2021/thumbs/art_2021_25.jpg",
      },
      {
        id: "26",
        full: "/art/2021/art_2021_26.jpg",
        thumb: "/art/2021/thumbs/art_2021_26.jpg",
      },
      {
        id: "27",
        full: "/art/2021/art_2021_27.jpg",
        thumb: "/art/2021/thumbs/art_2021_27.jpg",
      },
      {
        id: "28",
        full: "/art/2021/art_2021_28.jpg",
        thumb: "/art/2021/thumbs/art_2021_28.jpg",
      },
    ],
  },
  {
    title: "2022",
    files: [
      {
        id: "1",
        full: "/art/2022/art_2022_1.jpg",
        thumb: "/art/2022/thumbs/art_2022_1.jpg",
      },
      {
        id: "2",
        full: "/art/2022/art_2022_2.jpg",
        thumb: "/art/2022/thumbs/art_2022_2.jpg",
      },
      {
        id: "3",
        full: "/art/2022/art_2022_3.jpg",
        thumb: "/art/2022/thumbs/art_2022_3.jpg",
      },
      {
        id: "4",
        full: "/art/2022/art_2022_4.jpg",
        thumb: "/art/2022/thumbs/art_2022_4.jpg",
      },
      {
        id: "5",
        full: "/art/2022/art_2022_5.jpg",
        thumb: "/art/2022/thumbs/art_2022_5.jpg",
      },
      {
        id: "6",
        full: "/art/2022/art_2022_6.jpg",
        thumb: "/art/2022/thumbs/art_2022_6.jpg",
      },
    ],
  },
  {
    title: "2023",
    files: [
      {
        id: "1",
        full: "/art/2023/art_2023_1.jpg",
        thumb: "/art/2023/thumbs/art_2023_1.jpg",
      },
      {
        id: "2",
        full: "/art/2023/art_2023_2.jpg",
        thumb: "/art/2023/thumbs/art_2023_2.jpg",
      },
      {
        id: "3",
        full: "/art/2023/art_2023_3.jpg",
        thumb: "/art/2023/thumbs/art_2023_3.jpg",
      },
      {
        id: "4",
        full: "/art/2023/art_2023_4.jpg",
        thumb: "/art/2023/thumbs/art_2023_4.jpg",
      },
      {
        id: "5",
        full: "/art/2023/art_2023_5.jpg",
        thumb: "/art/2023/thumbs/art_2023_5.jpg",
      },
      {
        id: "6",
        full: "/art/2023/art_2023_6.jpg",
        thumb: "/art/2023/thumbs/art_2023_6.jpg",
      },
    ],
  },
  {
    title: "2025",
    files: [
      {
        id: "1",
        full: "/art/2025/art_2025_1.svg",
        thumb: "/art/2025/art_2025_1.svg",
      },
      {
        id: "2",
        full: "/art/2025/art_2025_2.jpg",
        thumb: "/art/2025/thumbs/art_2025_2.jpg",
      },
      {
        id: "3",
        full: "/art/2025/art_2025_3.svg",
        thumb: "/art/2025/art_2025_3.svg",
      },
      {
        id: "4",
        full: "/art/2025/art_2025_4.svg",
        thumb: "/art/2025/art_2025_4.svg",
      },
      {
        id: "5",
        full: "/art/2025/art_2025_5.svg",
        thumb: "/art/2025/art_2025_5.svg",
      },
      {
        id: "6",
        full: "/art/2025/art_2025_6.svg",
        thumb: "/art/2025/art_2025_6.svg",
      },
      {
        id: "7",
        full: "/art/2025/art_2025_7.jpg",
        thumb: "/art/2025/thumbs/art_2025_7.jpg",
      },
      {
        id: "8",
        full: "/art/2025/art_2025_8.jpg",
        thumb: "/art/2025/thumbs/art_2025_8.jpg",
      },
      {
        id: "9",
        full: "/art/2025/art_2025_9.jpg",
        thumb: "/art/2025/thumbs/art_2025_9.jpg",
      },
      {
        id: "10",
        full: "/art/2025/art_2025_10.svg",
        thumb: "/art/2025/art_2025_10.svg",
      },
      {
        id: "11",
        full: "/art/2025/art_2025_11.svg",
        thumb: "/art/2025/art_2025_11.svg",
      },
      {
        id: "12",
        full: "/art/2025/art_2025_12.svg",
        thumb: "/art/2025/art_2025_12.svg",
      },
    ],
  },
];
