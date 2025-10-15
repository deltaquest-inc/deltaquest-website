'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { useTranslations, useLocale } from 'next-intl'
import projectsData from '@/data/projectsData'

export interface Project {
  slug?: string
  title: string
  description: string
  imgSrc?: string
  href: string
}

const extractSlugFromHref = (href?: string) => {
  if (!href) return undefined
  const parts = href.split('/').filter(Boolean)
  return parts.length ? parts[parts.length - 1] : undefined
}

type IncomingProject = {
  slug?: string
  title?: string
  description?: string
  imgSrc?: string
  href?: string
}

type Props = {
  projects?: IncomingProject[]
}

const localizeHref = (href: string, locale: string) => {
  if (href === '#' || href.startsWith('#')) return href
  if (href.startsWith('http') || href.startsWith('//')) return href

  const normalized = href.startsWith('/') ? href : `/${href}`

  if (normalized === `/${locale}` || normalized.startsWith(`/${locale}/`)) {
    return normalized
  }

  return `/${locale}${normalized}`.replace(/\/\/+/g, '/')
}

const ProjectsList = ({ projects: incomingProjects }: Props) => {
  const t = useTranslations('projects')
  const tProjectsData = useTranslations('projects.projectsData')
  const locale = useLocale()

  const raw = Array.isArray(incomingProjects)
    ? incomingProjects
    : Array.isArray(projectsData)
      ? projectsData
      : []
  const projects: Project[] = raw.map((project) => {
    const slug = project.slug ?? extractSlugFromHref(project.href)

    const title = slug
      ? (tProjectsData(`${slug}.title`) ?? project.title ?? '')
      : (project.title ?? '')

    const description = slug
      ? (tProjectsData(`${slug}.description`) ?? project.description ?? '')
      : (project.description ?? '')

    const hrefFromTranslation = slug ? tProjectsData(`${slug}.href`) : undefined
    const hrefResolved = hrefFromTranslation ?? project.href ?? '#'

    const hrefLocalized =
      typeof hrefResolved === 'string' ? localizeHref(hrefResolved, locale) : String(hrefResolved)

    return {
      ...project,
      slug,
      title,
      description,
      href: hrefLocalized,
    }
  })

  if (!projects.length) {
    return <p className="text-gray-500 dark:text-gray-400">{t('noProjects')}</p>
  }

  return (
    <div className="-m-4 flex flex-wrap">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug ?? project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="w-full p-4 sm:w-1/2 lg:w-1/3"
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectsList
