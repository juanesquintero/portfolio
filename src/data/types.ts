/**
 * Shared TypeScript contracts for the portfolio content.
 *
 * Language-neutral facts (dates, tech stacks, URLs) live in `site.ts`.
 * Translatable copy lives in `content/en.json` and `content/es.json`,
 * which must both satisfy the `Content` interface — `astro check` will
 * flag any structural drift between the two languages.
 */

export type Locale = 'en' | 'es';

/* ------------------------------------------------------------------ */
/* Language-neutral data (src/data/site.ts)                           */
/* ------------------------------------------------------------------ */

export interface SocialLink {
  label: string;
  url: string;
  /** key used to pick the inline SVG icon in SocialLinks.astro */
  icon: 'email' | 'linkedin' | 'github' | 'gitlab';
}

/** Stable, language-neutral facts about one job. Joined to copy by `id`. */
export interface ExperienceMeta {
  id: string;
  company: string;
  /** human-readable date range, identical across languages */
  period: string;
  /** sortable start date, ISO-ish, newest first */
  start: string;
  tech: string[];
  /** optional company website */
  url?: string;
}

/** Stable facts about one featured project. Joined to copy by `id`. */
export interface ProjectMeta {
  id: string;
  company: string;
  tech: string[];
}

export interface SkillGroupMeta {
  id: string;
  /** skill names are brand/tech terms — not translated */
  items: string[];
}

/** One entry in a logo grid (Tech Stack or Tools). */
export interface TechItem {
  /** display name, e.g. "Next.js" */
  name: string;
  /** maps to `/public/<tech|tools>/<slug>.svg` */
  slug: string;
}

/** A related link shown in the company dialog. */
export interface CompanyLink {
  /** optional label; falls back to the localized "Visit website" */
  label?: string;
  url: string;
}

/** A company / client / provider for the logo wall. */
export interface CompanyItem {
  name: string;
  /** maps to `/public/companies/<slug>.svg` (hosted logo / runtime fallback) */
  slug: string;
  /** domain used by the runtime logo service, e.g. "epam.com" */
  domain?: string;
  /** explicit logo image URLs, tried first (in order) in runtime mode */
  logoUrls?: string[];
  /** one or more related links shown in the company dialog */
  links?: CompanyLink[];
}

export interface SiteData {
  name: string;
  email: string;
  phone: string;
  location: string;
  cvPath: string;
  socials: SocialLink[];
  skillGroups: SkillGroupMeta[];
  techStack: TechItem[];
  tools: TechItem[];
  companies: CompanyItem[];
  experience: ExperienceMeta[];
  projects: ProjectMeta[];
}

/* ------------------------------------------------------------------ */
/* Translatable copy (src/data/content/*.json)                        */
/* ------------------------------------------------------------------ */

export interface NavContent {
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  downloadCv: string;
}

export interface HeroContent {
  greeting: string;
  role: string;
  tagline: string;
  ctaProjects: string;
  ctaContact: string;
  ctaCv: string;
  stats: { value: string; label: string }[];
}

export interface AboutContent {
  heading: string;
  eyebrow: string;
  paragraphs: string[];
  focusHeading: string;
  focus: string[];
  softSkills: string[];
  languagesHeading: string;
  languages: { name: string; level: string }[];
}

export interface SkillsContent {
  heading: string;
  eyebrow: string;
  intro: string;
  /** group title keyed by SkillGroupMeta.id */
  groups: Record<string, string>;
}

export interface TechStackContent {
  heading: string;
  eyebrow: string;
  intro: string;
}

export interface ToolsContent {
  heading: string;
  eyebrow: string;
  intro: string;
}

export interface CompanyCopy {
  description: string;
}

export interface CompaniesContent {
  heading: string;
  eyebrow: string;
  intro: string;
  /** "Visit website" link label shown in the company dialog */
  visit: string;
  /** copy keyed by CompanyItem.slug */
  items: Record<string, CompanyCopy>;
}

export interface ExperienceCopy {
  title: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface ExperienceContent {
  heading: string;
  eyebrow: string;
  present: string;
  /** copy keyed by ExperienceMeta.id */
  roles: Record<string, ExperienceCopy>;
}

export interface ProjectCopy {
  title: string;
  blurb: string;
  industries: string[];
  highlights: string[];
}

export interface ProjectsContent {
  heading: string;
  eyebrow: string;
  intro: string;
  /** copy keyed by ProjectMeta.id */
  items: Record<string, ProjectCopy>;
}

export interface ContactContent {
  heading: string;
  eyebrow: string;
  intro: string;
  emailCta: string;
}

export interface FooterContent {
  rights: string;
  builtWith: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  techStack: TechStackContent;
  tools: ToolsContent;
  companies: CompaniesContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: FooterContent;
  langToggle: { en: string; es: string };
}

/* ------------------------------------------------------------------ */
/* Merged view consumed by components                                 */
/* ------------------------------------------------------------------ */

export interface ResolvedExperience extends ExperienceMeta, ExperienceCopy {}
export interface ResolvedProject extends ProjectMeta, ProjectCopy {}
export interface ResolvedSkillGroup extends SkillGroupMeta {
  title: string;
}

/** Everything a page needs, after joining copy with facts. */
export interface PortfolioContent {
  locale: Locale;
  site: SiteData;
  copy: Content;
  experience: ResolvedExperience[];
  projects: ResolvedProject[];
  skillGroups: ResolvedSkillGroup[];
}
