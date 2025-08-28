import projectsData from '@/data/projectsData'

import { genPageMetadata } from 'app/seo'
import ProjectsList from '@/components/ProjectsList'

export const metadata = genPageMetadata({
  title: 'ポートフォリオ',
  description: 'デルタクエスト株式会社の過去のITプロジェクトをご紹介します。',
})

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          ポートフォリオ
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          デルタクエスト株式会社が手がけたプロジェクトの一部をご紹介します。
        </p>
      </div>
      <div className="container py-12">
        <ProjectsList
          projects={projectsData.map((project) => ({
            ...project,
            href: project.href ?? '#',
          }))}
        />
      </div>
    </div>
  )
}
