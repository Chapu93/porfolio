export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact'

export interface ProjectCardProps {
  title: string
  description: string
  stack: string
  delayMs?: number
}

export interface NavLinkProps {
  to: SectionId
  children: React.ReactNode
  isActive?: boolean
}
