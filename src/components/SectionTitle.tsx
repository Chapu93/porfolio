export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="fade-in underline-anim text-2xl font-semibold" data-fade>
      {children}
    </h2>
  )
}

