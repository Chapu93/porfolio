import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectFilters } from './ProjectFilters'

export function ProjectList() {
  const [tag, setTag] = useState<string | 'all'>('all')
  const filtered = useMemo(() => {
    if (tag === 'all') return projects
    return projects.filter((p) => p.tags.includes(tag))
  }, [tag])

  return (
    <div className="mt-6 grid gap-6">
      <ProjectFilters selected={tag} onChange={setTag} />
      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            description={p.description}
            stack={p.stack.join(', ')}
            delayMs={p.delayMs}
          />
        ))}
      </div>
    </div>
  )
}
