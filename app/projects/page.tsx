import Link from '@/components/Link'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import ScrollReveal from '@/components/ScrollReveal'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

const featuredProjects = [
  {
    name: 'Resume Builder and talent search',
    client: 'Soft Skills',
    role: 'Senior Full Stack Engineer',
    period: '2022',
    summary:
      'Built the core resume builder services and a polished Angular experience for AI-assisted profile quality, search, and internal talent discovery.',
    focus: 'Product workflow and talent intelligence',
    outcome:
      'Made profile quality, resume authoring, and internal search more usable for everyday team workflows.',
    stack: ['.NET 6', 'Angular 15', 'Azure DevOps', 'OpenAI', 'Azure AD'],
    notes: [
      'Designed core resume services around a workflow that non-technical users could actually complete.',
      'Balanced AI-assisted quality checks with a practical authoring experience in Angular.',
      'Improved internal discovery by shaping search and profile structure together, not as separate features.',
    ],
  },
  {
    name: 'Tax engagement platform',
    client: 'EY',
    role: 'Senior Software Engineer',
    period: '2022',
    summary:
      'Delivered microservice-based backend capabilities for a tax consultancy platform with strong operational rigor, messaging, and cloud-native deployment.',
    focus: 'Cloud delivery for enterprise consulting workflows',
    outcome:
      'Strengthened backend reliability and messaging patterns for a platform carrying real operational pressure.',
    stack: ['.NET 6', 'Microservices', 'Docker', 'Kubernetes', 'Azure Service Bus'],
    notes: [
      'Built services that fit an ecosystem of cloud-native deployment and asynchronous coordination.',
      'Worked with operational discipline in mind, not just feature delivery.',
      'Shaped backend behavior around reliability, traceability, and maintainable rollout paths.',
    ],
  },
  {
    name: 'Industrial operations suite',
    client: 'Informatiq',
    role: 'Lead Developer',
    period: '2021',
    summary:
      'Led delivery of digital oil rig management solutions with a scalable services architecture and close collaboration with senior technical leadership.',
    focus: 'Operational systems with architecture depth',
    outcome:
      'Supported industrial operations through a system design that could handle complexity without losing clarity.',
    stack: ['.NET 6', 'Microservices', 'Cosmos DB', 'Docker', 'Azure DevOps'],
    notes: [
      'Designed services for an environment where operational accuracy matters as much as feature scope.',
      'Collaborated closely with senior architecture leadership to keep the platform coherent.',
      'Used scalable backend patterns to keep new capabilities from turning into delivery drag.',
    ],
  },
  {
    name: 'Long-term archival platform',
    client: 'Piql',
    role: 'Lead Developer',
    period: '2020',
    summary:
      'Shaped the application layer for secure long-term data archival, spanning backend services and modern front-end experiences across Vue generations.',
    focus: 'Durable product systems for long-horizon data',
    outcome:
      'Helped make a high-trust archival product easier to operate and evolve across backend and interface layers.',
    stack: ['.NET 5', 'Vue 2', 'Vue 3', 'Microservices', 'Cosmos DB'],
    notes: [
      'Worked across old and new front-end layers while keeping the product direction stable.',
      'Designed application behavior around trust, longevity, and practical administration needs.',
      'Kept the system moving forward without forcing a brittle all-at-once rewrite.',
    ],
  },
]

const summaryBand = [
  { label: 'Years shipping software', value: '8+' },
  { label: 'Enterprise domains', value: 'Tax, HR, energy, pharma' },
  { label: 'Core strength', value: 'Backend architecture with product sense' },
]

const additionalProjects = [
  {
    name: 'Employee mobility platform',
    role: 'Solution Architect',
    stack: '.NET Core, Angular, MSSQL, Worker Services, OData SAP integration',
  },
  {
    name: 'Expiry control system',
    role: 'Solution Architect',
    stack: '.NET Core, Razor Pages, ASP.NET Identity, Docker, Azure DevOps',
  },
  {
    name: 'POSM distribution and tracking',
    role: 'Lead Developer',
    stack: '.NET Core, Angular, Azure AD, MSSQL, SSIS',
  },
  {
    name: 'IDIM integrated solution',
    role: 'Lead Developer',
    stack: 'ASP.NET MVC, Razor Views, jQuery, database automation',
  },
  {
    name: 'Mobile sales force automation',
    role: 'Lead Developer',
    stack: 'C#, WCF, Oracle, SAP integration',
  },
  {
    name: 'Insurance lead management',
    role: 'Software Engineer',
    stack: 'ASP.NET MVC, Angular, .NET, Web API, MSSQL',
  },
]

export default function Projects() {
  return (
    <div className="pb-10">
      <section className="border-t border-[var(--color-border)] pb-14 pt-8 sm:pt-10">
        <ScrollReveal>
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <span className="eyebrow rounded-none bg-transparent px-0 py-0 text-[var(--color-accent-strong)]">
                Projects
              </span>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-none tracking-[-0.05em] text-[var(--color-fg)] sm:text-5xl lg:text-[3.55rem]">
                Case studies and selected project work.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                A focused view of project work across enterprise software, backend systems, and
                product-facing delivery.
              </p>
            </div>

            <Link href="https://rabbyhasan.com.bd/projects" className="secondary-button self-start">
              Full portfolio
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mt-8 grid gap-3 rounded-[1.75rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.58)] p-4 backdrop-blur-sm sm:grid-cols-3 sm:p-5 dark:bg-[rgba(255,255,255,0.02)]">
            {summaryBand.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] px-3 py-3 sm:px-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-semibold tracking-[-0.03em] text-[var(--color-fg)] sm:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="case-studies" className="mt-2">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Featured case studies</span>
            <h2 className="mt-4 font-serif text-4xl leading-none tracking-[-0.045em] text-[var(--color-fg)]">
              Selected case studies
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Click through the projects to inspect the role, stack, summary, and delivery notes.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ScrollReveal delay={100}>
            <ProjectsShowcase projects={featuredProjects} />
          </ScrollReveal>
        </div>
      </section>

      <section className="mt-12">
        <ScrollReveal delay={120}>
          <div className="surface-panel h-full px-6 py-7 sm:px-7">
            <span className="eyebrow">Additional work</span>
            <h2 className="mt-4 font-serif text-3xl leading-none tracking-[-0.04em] text-[var(--color-fg)]">
              Additional work
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              A broader project list across solution architecture, lead delivery, and enterprise
              software implementation.
            </p>
            <div className="mt-6 grid gap-3">
              {additionalProjects.map((project, index) => (
                <div
                  key={project.name}
                  className="rounded-[1.55rem] border border-[var(--color-border)] bg-[rgba(255,255,255,0.62)] px-4 py-4 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] hover:border-[var(--color-border-strong)] hover:bg-[rgba(255,255,255,0.82)] dark:bg-[rgba(255,255,255,0.02)]"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="sm:max-w-[78%]">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-fg)]">
                          {project.name}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted-strong)]">
                        {project.stack}
                      </p>
                    </div>
                    <span className="luxury-tag whitespace-nowrap">{project.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
