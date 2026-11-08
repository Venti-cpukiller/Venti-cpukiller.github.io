// ============================================
// 照片墙数据：加照片 = 往 src/assets/photos/ 丢图 + 这里加一条
// file 填 './文件名.jpg'，日期随你写（展示用）
// ============================================
export interface PhotoItem {
  file: string;
  alt: string;
  caption: string;
  date: string;
}

export const photos: PhotoItem[] = [
  {
    file: './campus-dusk.jpg',
    alt: '黄昏时分的教学楼群与通信塔',
    caption: '铁塔与暮色',
    date: '2026-09-22',
  },
  {
    file: './campus-street.jpg',
    alt: '夕阳下的放学路',
    caption: '放学路上',
    date: '2026-09-22',
  },
  {
    file: './mooncake-3d.jpg',
    alt: '3D 打印的国庆月饼与五角星',
    caption: '3D 打印的「国庆」',
    date: '2026-09-22',
  },
  {
    file: './sunset-window.jpg',
    alt: '窗框里的城市晚霞',
    caption: '窗前晚霞',
    date: '2026-10-24',
  },
];
