interface Project {
  slug: string
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    slug: 'media-1p-ads',
    title: 'メディア向け1st Party Ads開発',
    description: `米国市場向けの1st Party Adsシステムの設計と実装をリード。
  高速な広告配信システムの構築とパフォーマンス最適化を担当。`,
    imgSrc: '/static/images/billboard.png',
    href: '/blog/media-1p-ads',
  },
  {
    slug: 'logistics-redesign',
    title: '国際物流プラットフォームの刷新',
    description: `国際物流プラットフォームのフルスタックアーキテクチャを刷新。
  UX/UIの改善と技術スタックの最適化を実施し、よりスケーラブルなシステムへ。`,
    imgSrc: '/static/images/container-ship.png',
    href: '/blog/logistics-redesign',
  },
]

export default projectsData
