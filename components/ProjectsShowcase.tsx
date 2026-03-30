'use client'

import { useMemo, useState } from 'react'

type FeaturedProject = {
  name: string
  client: string
  role: string
  period: string
  summary: string
  focus: string
  outcome: string
  stack: string[]
  notes: string[]
}

type ProjectsShowcaseProps = {
  projects: FeaturedProject[]
}

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [activeProjectName, setActiveProjectName] = useState(projects[0]?.name ?? '')

  const activeProject = useMemo(
    () => projects.find((project) => project.name === activeProjectName) ?? projects[0],
    [activeProjectName, projects]
  )

  return (
    <div className="surface-shell overflow-hidden rounded-[2rem]">
      <div className="surface-panel relative px-4 py-4 sm:px-6 sm:py-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,105,76,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(88,105,76,0.08),transparent_34%)]" />
        <div className="pointer-events-none absolute -right-10 top-10 h-28 w-28 rounded-full bg-[var(--color-accent-soft)] blur-3xl animate-soft-float" />

        <div className="relative grid gap-6 xl:grid-cols-[17rem_minmax(0,1fr)]">
          <div className="overflow-x-auto xl:overflow-visible">
            <div className="flex gap-3 xl:flex-col">
              {projects.map((project, index) => {
                const isActive = activeProject?.name === project.name

                return (
                  <button
                    key={project.name}
                    type="button"
                    onClick={() => setActiveProjectName(project.name)}
                    className={`min-w-[15rem] rounded-[1.35rem] border px-4 py-4 text-left transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] xl:min-w-0 ${
                      isActive
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-fg)] shadow-[0_18px_32px_-28px_rgba(31,29,24,0.24)]'
                        : 'border-[var(--color-border)] bg-[rgba(255,255,255,0.58)] text-[var(--color-muted-strong)] hover:-translate-y-[2px] hover:border-[var(--color-border-strong)] hover:bg-[rgba(255,255,255,0.84)] dark:bg-[rgba(255,255,255,0.02)]'
                    }`}
                  >
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {project.client}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-6 tracking-[-0.03em] text-[var(--color-fg)]">
                      {project.name}
                    </p>
                    <p className="mt-2 text-sm leading-6">{project.focus}</p>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(15rem,0.88fr)]">
              <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.74)] px-6 py-6 shadow-[0_26px_44px_-34px_rgba(31,29,24,0.22)] backdrop-blur-sm dark:bg-[rgba(255,255,255,0.03)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Spotlight
                </p>
                <h3 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em] text-[var(--color-fg)]">
                  {activeProject.name}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted-strong)] sm:text-base">
                  {activeProject.summary}
                </p>

                <div className="mt-6 grid gap-4 border-t border-[var(--color-border)] pt-5 sm:grid-cols-[auto_auto_auto]">
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Client
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--color-fg)]">
                      {activeProject.client}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Role
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--color-fg)]">
                      {activeProject.role}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Period
                    </p>
                    <p className="mt-2 text-sm font-medium text-[var(--color-fg)]">
                      {activeProject.period}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap">
                  {activeProject.stack.map((item) => (
                    <span key={item} className="luxury-tag mb-2 mr-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[rgba(251,251,248,0.84)] px-5 py-5 backdrop-blur-sm dark:bg-[rgba(255,255,255,0.02)]">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Focus
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--color-fg)]">
                    {activeProject.focus}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.74)] px-5 py-5 backdrop-blur-sm dark:bg-[rgba(255,255,255,0.03)]">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                    {activeProject.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] px-5 py-5 backdrop-blur-sm dark:bg-[rgba(255,255,255,0.03)]">
              <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    Delivery notes
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    What mattered most in this project once implementation started.
                  </p>
                </div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {projects.findIndex((project) => project.name === activeProject.name) + 1} /{' '}
                  {projects.length}
                </span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {activeProject.notes.map((note, index) => (
                  <div
                    key={note}
                    className="rounded-[1.3rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 dark:bg-[rgba(255,255,255,0.01)]"
                  >
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Track {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                      {note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
