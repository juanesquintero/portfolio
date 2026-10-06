import type { CompanyItem } from './types';

/**
 * Logo source flag:
 *   PUBLIC_COMPANY_LOGO_SOURCE=runtime -> fetch real logos at view time (default)
 *   PUBLIC_COMPANY_LOGO_SOURCE=hosted  -> always use self-hosted SVG monograms
 * In runtime mode each <img> walks a fallback chain on error (see
 * LogoFallback.astro): explicit logo URLs -> logo service -> the company's
 * site favicon -> self-hosted monogram.
 */
const source = import.meta.env.PUBLIC_COMPANY_LOGO_SOURCE === 'hosted' ? 'hosted' : 'runtime';

/** Ordered list of logo URLs to try for a company (first that loads wins). */
export function companyLogoSrcs(company: CompanyItem): string[] {
  // A real self-hosted logo always wins over the logo services.
  if (company.logo) return [company.logo];

  const hosted = `/companies/${company.slug}.svg`;
  if (source !== 'runtime') return [hosted];

  const srcs: string[] = [];
  if (company.logoUrls) srcs.push(...company.logoUrls);
  if (company.domain) {
    srcs.push(`https://logo.clearbit.com/${company.domain}?size=128`);
    srcs.push(`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`);
  }
  srcs.push(hosted);
  return srcs;
}
