// ============================================
// 照片数据：加照片 = 往 src/assets/photos/ 丢图 + 这里加一条
// slug 用于详情页地址 /photos/<slug>/（建议英文/拼音）
// ============================================
export interface PhotoItem {
  slug: string;
  file: string;
  alt: string;
  caption: string;
  description: string;
  date: string;
}

export const photos: PhotoItem[] = [
  {
    slug: 'campus-dusk',
    file: './campus-dusk.jpg',
    alt: '黄昏时分的教学楼群与通信塔',
    caption: '铁塔与暮色',
    description:
      '晚自习前抓的窗外。那天晚霞把整片楼群都染成了橘色，通信塔立在中间像根定海神针。',
    date: '2026-09-22',
  },
  {
    slug: 'campus-street',
    file: './campus-street.jpg',
    alt: '夕阳下的放学路',
    caption: '放学路上',
    description: '放学路上的夕阳。逆着光走，整条街都是暖的。',
    date: '2026-09-22',
  },
  {
    slug: 'mooncake-3d',
    file: './mooncake-3d.jpg',
    alt: '3D 打印的国庆月饼与五角星',
    caption: '3D 打印的「国庆」',
    description:
      '国庆前用 3D 打印机做的一批月饼挂件和五角星，涂色涂到眼花。印字选了「国庆」和几句古诗，摆在桌布上正好一顿拍。',
    date: '2026-09-22',
  },
  {
    slug: 'sunset-window',
    file: './sunset-window.jpg',
    alt: '窗框里的城市晚霞',
    caption: '窗前晚霞',
    description: '宿舍窗框构图练习。等了很久太阳才落到正好的位置，一秒按掉快门。',
    date: '2026-10-24',
  },
];
