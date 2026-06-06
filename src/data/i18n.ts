import type {
  Content,
  Locale,
  PortfolioContent,
  ResolvedExperience,
  ResolvedProject,
  ResolvedSkillGroup,
} from './types';
import { site } from './site';
import en from './content/en.json';
import es from './content/es.json';

const dictionaries: Record<Locale, Content> = {
  en: en as Content,
  es: es as Content,
};

export const locales: Locale[] = ['en', 'es'];
export const defaultLocale: Locale = 'en';

/**
 * Join language-neutral facts (`site.ts`) with translated copy
 * (`content/{locale}.json`) into a single object the components consume.
 * Entries are matched by their stable `id`.
 */
export function getContent(locale: Locale): PortfolioContent {
  const copy = dictionaries[locale] ?? dictionaries[defaultLocale];

  const experience: ResolvedExperience[] = site.experience
    .map((meta) => {
      const text = copy.experience.roles[meta.id];
      return { ...meta, ...text };
    })
    .sort((a, b) => b.start.localeCompare(a.start));

  const projects: ResolvedProject[] = site.projects.map((meta) => {
    const text = copy.projects.items[meta.id];
    return { ...meta, ...text };
  });

  const skillGroups: ResolvedSkillGroup[] = site.skillGroups.map((group) => ({
    ...group,
    title: copy.skills.groups[group.id],
  }));

  return { locale, site, copy, experience, projects, skillGroups };
}

/** Build the path for a given locale (used by the language toggle). */
export function localizedPath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
