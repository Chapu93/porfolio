import { allTags } from '../data/projects'

export function ProjectFilters({ selected, onChange }: { selected: string | 'all'; onChange: (v: string | 'all') => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {(['all', ...allTags] as const).map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(tag)}
          className={`rounded-full border px-3 py-1 text-sm transition-colors ${
            selected === tag
              ? 'border-orange-600 bg-orange-50 text-orange-700 dark:border-orange-600 dark:bg-orange-900/20 dark:text-orange-300'
              : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800'
          }`}
          aria-pressed={selected === tag}
        >
          {tag === 'all' ? 'Todos' : `#${tag}`}
        </button>
      ))}
    </div>
  )
}

