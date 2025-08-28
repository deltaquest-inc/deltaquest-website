'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

export interface Project {
  title: string
  description: string
  imgSrc?: string
  href: string
}

interface ProjectsListProps {
  projects: Project[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  if (!projects || projects.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400">
        Currently, there are no projects to display.
      </p>
    )
  }

  return (
    <div className="-m-4 flex flex-wrap">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
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
