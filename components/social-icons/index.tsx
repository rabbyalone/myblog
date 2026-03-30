import { Mail, Github, Facebook, Youtube, Linkedin, Twitter, Mastodon } from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]
  const iconSize = `${size * 0.25}rem`

  return (
    <a
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[rgba(255,255,255,0.42)] text-[var(--color-fg)] transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] dark:bg-[rgba(255,255,255,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)]"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={kind}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className="fill-current" style={{ width: iconSize, height: iconSize }} />
    </a>
  )
}

export default SocialIcon
