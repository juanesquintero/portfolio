import type { SiteData } from './types';

/**
 * Language-neutral facts. These are NOT translated — dates, tech stacks,
 * company names, URLs and contact details are identical in every language.
 * Translatable copy referencing these entries by `id` lives in
 * `src/data/content/{en,es}.json`.
 */
export const site: SiteData = {
  name: 'Juan Quintero',
  email: 'juanestquintero@gmail.com',
  phone: '+57 317 336 8759',
  location: 'Medellín, Colombia',
  cvPath: '/cv/Juan-Quintero-CV.pdf',
  cvVariants: {
    full: '/cv/Juan-Quintero-CV-Full.pdf',
    onePage: '/cv/Juan-Quintero-CV-OnePage.pdf',
  },

  socials: [
    { label: 'Email', url: 'mailto:juanestquintero@gmail.com', icon: 'email' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/juanes-quintero/', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/juanesquintero', icon: 'github' },
    { label: 'GitLab', url: 'https://gitlab.com/juanesquintero', icon: 'gitlab' },
  ],

  skillGroups: [
    {
      id: 'frontend',
      items: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js', 'Vue.js', 'RxJS', 'NgRx', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      id: 'backend',
      items: ['Node.js', 'Python', 'FastAPI', 'Flask', 'Django', 'Nest.js', 'Express.js', 'GraphQL', 'Apollo', 'REST APIs', 'WebSockets', 'SQLAlchemy'],
    },
    {
      id: 'databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Snowflake', 'MS SQL Server', 'Oracle', 'Firebase'],
    },
    {
      id: 'cloud',
      items: ['AWS', 'GCP', 'Azure', 'Docker', 'GitHub', 'GitLab', 'Azure DevOps', 'Jenkins', 'Vercel', 'Cloudflare', 'NGINX', 'Pulumi', 'Stripe'],
    },
    {
      id: 'testing',
      items: ['Jest', 'Pytest', 'Cypress', 'Karma', 'Jasmine', 'Supertest', 'Unittest', 'Sinon'],
    },
    {
      id: 'tools',
      items: ['Git', 'Claude Code', 'GitHub Copilot', 'Jira', 'Postman', 'Storybook', 'DataDog', 'Agile / Scrum', 'HighCharts', 'D3.js'],
    },
  ],

  /**
   * Core technologies, ordered by depth of experience. Rendered as a logo
   * grid in the Tech Stack section. `slug` maps to `/public/tech/<slug>.svg`
   * (logos sourced from Devicon, MIT, and Simple Icons, CC0). Items without
   * a `slug` render as a text badge.
   */
  techStack: [
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Python', slug: 'python' },
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextjs' },
    { name: 'Node.js', slug: 'nodejs' },
    { name: 'FastAPI', slug: 'fastapi' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Claude Code', slug: 'claude-code' },
    { name: 'GitHub Copilot', slug: 'github-copilot', invert: true },
    { name: 'Angular', slug: 'angular' },
    { name: 'Flask', slug: 'flask', invert: true },
    { name: 'NestJS', slug: 'nestjs' },
    { name: 'Express.js', slug: 'express', invert: true },
    { name: 'GraphQL', slug: 'graphql' },
    { name: 'REST APIs' },
    { name: 'MySQL', slug: 'mysql' },
    { name: 'Snowflake', slug: 'snowflake' },
    { name: 'AWS', slug: 'aws', invert: true },
    { name: 'GCP', slug: 'gcp' },
    { name: 'Vercel', slug: 'vercel', invert: true },
    { name: 'Vue.js', slug: 'vuejs' },
    { name: 'Django', slug: 'django' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css3' },
    { name: 'Astro', slug: 'astro' },
  ],

  /**
   * Day-to-day tooling (version control, cloud, CI/CD, testing, platforms).
   * Rendered as a logo grid in the Tools section. `slug` maps to
   * `/public/tools/<slug>.svg` (logos sourced from Devicon, MIT, and
   * Simple Icons, CC0).
   */
  tools: [
    { name: 'Git', slug: 'git' },
    { name: 'GitLab', slug: 'gitlab' },
    { name: 'Azure', slug: 'azure' },
    { name: 'Jenkins', slug: 'jenkins' },
    { name: 'Cloudflare', slug: 'cloudflare' },
    { name: 'NGINX', slug: 'nginx' },
    { name: 'Stripe', slug: 'stripe' },
    { name: 'Jest', slug: 'jest' },
    { name: 'Cypress', slug: 'cypress' },
    { name: 'Pytest', slug: 'pytest' },
    { name: 'Postman', slug: 'postman' },
    { name: 'Jira', slug: 'jira' },
    { name: 'Storybook', slug: 'storybook' },
  ],

  /**
   * Companies, clients and providers worked with. Logos resolve in one of
   * two modes (see Companies.astro / PUBLIC_COMPANY_LOGO_SOURCE):
   *   - "hosted":  self-hosted SVG at /public/companies/<slug>.svg
   *   - "runtime": fetched from a logo service using `domain`
   * `domain` is also used as the hosted-logo fallback target.
   */
  companies: [
    {
      name: 'Cielo Travel',
      slug: 'cielo-travel',
      domain: 'cielo.travel',
      logo: '/companies/cielo-travel.png',
      links: [{ url: 'https://cielo.travel' }],
    },
    {
      name: 'Toptal',
      slug: 'toptal',
      domain: 'toptal.com',
      logo: '/companies/toptal.png',
      links: [{ url: 'https://www.toptal.com/developers/resume/juan-quintero' }],
    },
    {
      name: 'Evidenza',
      slug: 'evidenza',
      domain: 'evidenza.ai',
      logo: '/companies/evidenza.png',
      links: [{ url: 'https://www.evidenza.ai/' }],
    },
    {
      name: 'Taxalign',
      slug: 'taxalign',
      domain: 'taxalign.com',
      logo: '/companies/taxalign.png',
      links: [{ url: 'https://taxalign.com' }, { label: 'form.taxalign.com', url: 'https://form.taxalign.com/' }],
    },
    { name: 'Billtrust', slug: 'billtrust', domain: 'billtrust.com', logo: '/companies/billtrust.png', links: [{ url: 'https://www.billtrust.com' }] },
    { name: 'Capitol AI', slug: 'capitol-ai', domain: 'capitol.ai', logo: '/companies/capitol-ai.png', links: [{ url: 'https://capitol.ai' }] },
    {
      name: 'Olive Tree Holdings',
      slug: 'olive-tree',
      domain: 'olivetreeholdings.com',
      logoUrls: [
        'https://media.licdn.com/dms/image/v2/D560BAQGyOKR766mjZg/company-logo_200_200/company-logo_200_200/0/1699477252825/olive_tree_holdings_logo?e=2147483647&v=beta&t=WiuzSoqiyAw-LiwmZJW_tUu1Gj9AA9-hJkAwwZvKjio',
        'https://media.glassdoor.com/sqll/1829490/olive-tree-holdings-squareLogo-1658357391465.png',
      ],
      links: [{ url: 'https://www.olivetreeholdings.com/' }],
    },
    { name: 'EPAM Systems', slug: 'epam', domain: 'epam.com', links: [{ url: 'https://www.epam.com/' }] },
    { name: 'Perficient', slug: 'perficient', domain: 'perficient.com', links: [{ url: 'https://www.perficient.com/' }] },
    { name: 'SC Computing (SisteCrédito)', slug: 'sistecredito', domain: 'sistecredito.com', links: [{ url: 'https://www.sistecredito.com/' }] },
    {
      name: 'Educatic',
      slug: 'educatic',
      domain: 'educatic.com.co',
      logoUrls: ['https://aprende.educatic.com.co/cas/images/logos/aprende/logoLogin.png'],
      links: [{ url: 'https://educatic.com.co' }],
    },
    {
      name: 'Kinesso',
      slug: 'kinesso',
      domain: 'kinesso.com',
      links: [
        { label: 'Kinesso', url: 'https://jp.kinesso.com/' },
        { label: 'Matterkind', url: 'https://www.matterkind.com/' },
      ],
    },
    {
      name: 'Marathon Oil',
      slug: 'marathon-oil',
      domain: 'marathonoil.com',
      logo: '/companies/marathon-oil.png',
      links: [
        { label: 'ConocoPhillips', url: 'https://www.conocophillips.com/' },
        { label: 'Marathon Petroleum', url: 'https://www.marathonpetroleum.com/' },
      ],
    },
  ],

  education: {
    url: 'https://udemedellin.edu.co/',
    logo: '/companies/university-of-medellin.png',
    period: 'Aug 2016 — Mar 2021',
  },

  experience: [
    {
      id: 'cielo-travel',
      company: 'Cielo Travel',
      period: 'Mar 2026 — Present',
      start: '2026-03',
      url: 'https://cielo.travel',
      logo: '/companies/cielo-travel.png',
      tech: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    },
    {
      id: 'toptal',
      company: 'Toptal',
      period: 'Sep 2024 — Present',
      start: '2024-09',
      url: 'https://www.toptal.com/developers/resume/juan-quintero',
      logo: '/companies/toptal.png',
      tech: [],
      clientProjects: [
        {
          id: 'evidenza',
          client: 'Evidenza Inc.',
          period: 'May 2025 — Jun 2025',
          url: 'https://www.evidenza.ai/',
          logo: '/companies/evidenza.png',
          tech: ['TypeScript', 'Node.js', 'PptxGenJS', 'npm'],
        },
        {
          id: 'taxalign',
          client: 'Taxalign Limited',
          period: 'Mar 2025 — Apr 2025',
          url: 'https://taxalign.com',
          productUrl: 'https://form.taxalign.com/',
          logo: '/companies/taxalign.png',
          tech: ['Next.js', 'React', 'Node.js', 'Framer', 'Stripe', 'HubSpot CRM', 'Companies House API'],
        },
      ],
    },
    {
      id: 'billtrust',
      company: 'Billtrust',
      period: 'Feb 2024 — Mar 2026',
      start: '2024-02',
      url: 'https://www.billtrust.com/',
      logo: '/companies/billtrust.png',
      productUrl: 'https://app.billtrust.com/',
      tech: ['Angular', 'TypeScript', 'PrimeNG', 'HighCharts', 'Python', 'FastAPI', 'Node.js', 'GraphQL', 'Apollo', 'Snowflake', 'MongoDB', 'Docker', 'AWS', 'Jenkins', 'Cypress', 'Datadog'],
    },
    {
      id: 'capitol-ai',
      company: 'Capitol AI',
      period: 'Dec 2023 — Feb 2024',
      start: '2023-12',
      url: 'https://www.capitol.ai/',
      logo: '/companies/capitol-ai.png',
      productUrl: 'https://www.capitol.ai/',
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Docker', 'Vercel', 'Cloudflare', 'Storybook'],
    },
    {
      id: 'olive-tree',
      company: 'Olive Tree Holdings',
      period: 'Jun 2023 — Nov 2023',
      start: '2023-06',
      url: 'https://www.olivetreeholdings.com/',
      logo: '/companies/olive-tree.svg',
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'Docker', 'GCP', 'Pulumi', 'Bitbucket'],
    },
    {
      id: 'epam',
      company: 'EPAM Systems',
      period: 'Nov 2021 — May 2023',
      start: '2021-11',
      url: 'https://www.epam.com/',
      logo: '/companies/epam.svg',
      tech: ['Node.js', 'NestJS', 'Express.js', 'InversifyJS', 'TypeScript', 'React', 'Angular', 'NgRx', 'RxJS', 'Python', 'FastAPI', 'Jest', 'Supertest', 'Snowflake', 'SAP HANA', 'Azure DevOps', 'Grafana'],
    },
    {
      id: 'perficient',
      company: 'Perficient',
      period: 'Apr 2021 — Nov 2021',
      start: '2021-04',
      url: 'https://www.perficient.com/',
      logo: '/companies/perficient.svg',
      productUrl: 'https://kinesso.com/',
      tech: ['JavaScript', 'TypeScript', 'React', 'Angular', 'NgRx', 'RxJS', 'D3.js', 'SCSS', 'Python', 'Flask', 'MySQL', 'Karma', 'Jasmine', 'Jenkins'],
    },
    {
      id: 'sc-computing',
      company: 'SC Computing',
      period: 'Jul 2020 — Apr 2021',
      start: '2020-07',
      url: 'https://www.sistecredito.com/',
      logo: '/companies/sistecredito.svg',
      productUrl: 'https://www.sistecredito.com/',
      tech: ['Angular', 'TypeScript', 'Sass', 'Python', 'Flask', 'SQLAlchemy', 'MySQL', 'MongoDB', 'Azure', 'Docker'],
    },
    {
      id: 'educatic',
      company: 'Educatic',
      period: 'Feb 2020 — Jul 2020',
      start: '2020-02',
      url: 'https://educatic.com.co/',
      logo: '/companies/educatic.svg',
      tech: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'React', 'Angular', 'MySQL', 'SQL Server', 'NGINX', 'Gunicorn'],
    },
    {
      id: 'freelance',
      company: 'Independent clients',
      period: 'Aug 2018 — Dec 2020',
      start: '2018-08',
      tech: ['React', 'Vue.js', 'Angular', 'Node.js', 'Express.js', 'NestJS', 'Python', 'Flask', 'FastAPI', 'PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Docker', 'AWS'],
    },
  ],

  projects: [
    {
      id: 'cielo-logistics',
      company: 'Cielo Travel',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'React', 'Stripe'],
    },
    {
      id: 'evidenza-pptx',
      company: 'Evidenza Inc.',
      via: 'Toptal',
      url: 'https://www.evidenza.ai/',
      tech: ['TypeScript', 'Node.js', 'PptxGenJS'],
    },
    {
      id: 'taxalign-onboarding',
      company: 'Taxalign Limited',
      via: 'Toptal',
      url: 'https://form.taxalign.com/',
      tech: ['Next.js', 'React', 'Node.js', 'Stripe', 'HubSpot CRM'],
    },
    {
      id: 'payment-analytics',
      company: 'Billtrust',
      url: 'https://app.billtrust.com/',
      tech: ['Angular', 'FastAPI', 'GraphQL', 'Snowflake', 'HighCharts', 'AWS'],
    },
    {
      id: 'ai-creativity',
      company: 'Capitol AI',
      url: 'https://www.capitol.ai/',
      tech: ['React', 'Next.js', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Vercel'],
    },
    {
      id: 'real-estate',
      company: 'Olive Tree Holdings',
      subtitle: 'Mako (Project M)',
      tech: ['Next.js', 'Django', 'GCP', 'Pulumi', 'Docker'],
    },
    {
      id: 'enterprise-migration',
      company: 'EPAM Systems',
      tech: ['Node.js', 'Nest.js', 'Angular', 'Snowflake', 'SAP HANA', 'Azure DevOps'],
    },
    {
      id: 'advertising-console',
      company: 'Perficient',
      url: 'https://kinesso.com/',
      tech: ['React', 'Angular', 'Flask', 'NgRx', 'D3.js', 'MySQL'],
    },
    {
      id: 'payment-gateway',
      company: 'SC Computing (SisteCrédito)',
      url: 'https://www.sistecredito.com/',
      tech: ['Angular', 'Flask', 'SQLAlchemy', 'Python', 'MySQL'],
    },
    {
      id: 'dropout-prediction',
      company: 'Educatic',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Plotly', 'React'],
    },
  ],
};
