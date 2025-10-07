export type Project = {
  id: string
  title: string
  description: string
  stack: string[]
  tags: string[]
  delayMs?: number
}

export const projects: Project[] = [
  {
    id: 'landing',
    title: 'Landing Page',
    description: 'Página de presentación rápida y moderna con performance optimizada.',
    stack: ['React', 'Tailwind'],
    tags: ['frontend', 'ui'],
    delayMs: 0,
  },
  {
    id: 'ecommerce',
    title: 'E‑commerce',
    description: 'Catálogo, carrito y checkout; enfoque en UX y mantenibilidad.',
    stack: ['React', 'Node', 'DB'],
    tags: ['frontend', 'backend'],
    delayMs: 100,
  },
  {
    id: 'inventory',
    title: 'Inventario',
    description: 'Gestión de inventarios sin ventas; roles y reportes básicos.',
    stack: ['React', 'API REST', 'SQL'],
    tags: ['backend', 'data'],
    delayMs: 200,
  },
]

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort()

