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
      items: ['AWS', 'GCP', 'Azure', 'Docker', 'GitHub', 'GitLab', 'Azure DevOps', 'Jenkins', 'Vercel', 'Cloudflare', 'NGINX', 'Pulumi'],
    },
    {
      id: 'testing',
      items: ['Jest', 'Pytest', 'Cypress', 'Karma', 'Jasmine', 'Supertest', 'Unittest', 'Sinon'],
    },
    {
      id: 'tools',
      items: ['Git', 'VS Code', 'PyCharm', 'Jira', 'Postman', 'Storybook', 'DataDog', 'Agile / Scrum', 'HighCharts', 'D3.js'],
    },
  ],

  /**
   * Core technologies, ordered by depth of experience. Rendered as a logo
   * grid in the Tech Stack section. `slug` maps to `/public/tech/<slug>.svg`
   * (logos sourced from Devicon, MIT).
   */
  techStack: [
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'Python', slug: 'python' },
    { name: 'FastAPI', slug: 'fastapi' },
    { name: 'React', slug: 'react' },
    { name: 'Angular', slug: 'angular' },
    { name: 'Node.js', slug: 'nodejs' },
    { name: 'Next.js', slug: 'nextjs' },
    { name: 'Nest.js', slug: 'nestjs' },
    { name: 'Vue.js', slug: 'vuejs' },
    { name: 'Django', slug: 'django' },
    { name: 'GraphQL', slug: 'graphql' },
    { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'HTML5', slug: 'html5' },
    { name: 'CSS3', slug: 'css3' },
    { name: 'Astro', slug: 'astro' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'MySQL', slug: 'mysql' },
  ],

  /**
   * Day-to-day tooling (version control, cloud, CI/CD, testing, editors).
   * Rendered as a logo grid in the Tools section. `slug` maps to
   * `/public/tools/<slug>.svg` (logos sourced from Devicon, MIT).
   */
  tools: [
    { name: 'Git', slug: 'git' },
    { name: 'GitLab', slug: 'gitlab' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Google Cloud', slug: 'gcp' },
    { name: 'Azure', slug: 'azure' },
    { name: 'Jenkins', slug: 'jenkins' },
    { name: 'Cloudflare', slug: 'cloudflare' },
    { name: 'NGINX', slug: 'nginx' },
    { name: 'Jest', slug: 'jest' },
    { name: 'Cypress', slug: 'cypress' },
    { name: 'Pytest', slug: 'pytest' },
    { name: 'Postman', slug: 'postman' },
    { name: 'Jira', slug: 'jira' },
    { name: 'Storybook', slug: 'storybook' },
    { name: 'VS Code', slug: 'vscode' },
    { name: 'PyCharm', slug: 'pycharm' },
  ],

  /**
   * Companies, clients and providers worked with. Logos resolve in one of
   * two modes (see Companies.astro / PUBLIC_COMPANY_LOGO_SOURCE):
   *   - "hosted":  self-hosted SVG at /public/companies/<slug>.svg
   *   - "runtime": fetched from a logo service using `domain`
   * `domain` is also used as the hosted-logo fallback target.
   */
  companies: [
    { name: 'Billtrust', slug: 'billtrust', domain: 'billtrust.com', url: 'https://www.billtrust.com' },
    { name: 'Capitol AI', slug: 'capitol-ai', domain: 'capitol.ai', url: 'https://capitol.ai' },
    { name: 'Olive Tree Holdings', slug: 'olive-tree', domain: 'olivetreeholdings.com' },
    { name: 'EPAM Systems', slug: 'epam', domain: 'epam.com', url: 'https://www.epam.com' },
    { name: 'Perficient', slug: 'perficient', domain: 'perficient.com', url: 'https://www.perficient.com' },
    { name: 'SisteCrédito', slug: 'sistecredito', domain: 'sistecredito.com', url: 'https://www.sistecredito.com' },
    { name: 'Educatic', slug: 'educatic' },
    { name: 'Kinesso', slug: 'kinesso', domain: 'kinesso.com', url: 'https://www.kinesso.com' },
    { name: 'Marathon Oil', slug: 'marathon-oil', domain: 'marathonoil.com', url: 'https://www.marathonoil.com' },
    { name: 'TaxAlign', slug: 'taxalign', domain: 'taxalign.co.uk' },
    { name: 'Cielo Travel', slug: 'cielo-travel', domain: 'cielo.travel', url: 'https://cielo.travel' },
    { name: 'Evidenza', slug: 'evidenza', domain: 'evidenza.ai' },
  ],

  experience: [
    {
      id: 'billtrust',
      company: 'Billtrust',
      period: 'Feb 2024 — Present',
      start: '2024-02',
      url: 'https://www.billtrust.com',
      tech: ['Angular', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'GraphQL', 'Apollo', 'Docker', 'AWS', 'Snowflake', 'MongoDB', 'Jenkins', 'Cypress', 'HighCharts'],
    },
    {
      id: 'capitol-ai',
      company: 'Capitol AI',
      period: 'Dec 2023 — Feb 2024',
      start: '2023-12',
      url: 'https://capitol.ai',
      tech: ['React', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'WebSockets', 'Docker', 'PostgreSQL', 'Vercel', 'Cloudflare'],
    },
    {
      id: 'olive-tree',
      company: 'Olive Tree Holdings',
      period: 'Jun 2023 — Nov 2023',
      start: '2023-06',
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Django', 'Docker', 'GCP', 'Pulumi', 'PostgreSQL'],
    },
    {
      id: 'epam',
      company: 'EPAM Systems',
      period: 'Nov 2021 — May 2023',
      start: '2021-11',
      url: 'https://www.epam.com',
      tech: ['Node.js', 'Nest.js', 'Express.js', 'TypeScript', 'React', 'Angular', 'Python', 'FastAPI', 'Snowflake', 'SAP HANA', 'Jest', 'Azure DevOps'],
    },
    {
      id: 'perficient',
      company: 'Perficient',
      period: 'Apr 2021 — Nov 2021',
      start: '2021-04',
      url: 'https://www.perficient.com',
      tech: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Python', 'Flask', 'NgRx', 'RxJS', 'D3.js', 'SCSS', 'MySQL', 'Jenkins'],
    },
    {
      id: 'sistecredito',
      company: 'SisteCrédito',
      period: 'Jul 2020 — Apr 2021',
      start: '2020-07',
      url: 'https://www.sistecredito.com',
      tech: ['Angular', 'TypeScript', 'Python', 'Flask', 'SQLAlchemy', 'Azure', 'SCSS', 'MySQL', 'MongoDB'],
    },
    {
      id: 'educatic',
      company: 'Educatic',
      period: 'Feb 2020 — Jul 2020',
      start: '2020-02',
      tech: ['Python', 'Flask', 'React', 'Angular', 'Scikit-learn', 'Pandas', 'NumPy', 'Plotly', 'NGINX', 'MySQL', 'MS SQL Server'],
    },
    {
      id: 'freelance',
      company: 'Freelance',
      period: 'Aug 2018 — Dec 2020',
      start: '2018-08',
      tech: ['React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Nest.js', 'Python', 'FastAPI', 'Flask', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Oracle'],
    },
  ],

  projects: [
    {
      id: 'payment-analytics',
      company: 'Billtrust',
      tech: ['Angular', 'FastAPI', 'GraphQL', 'Snowflake', 'HighCharts', 'AWS'],
    },
    {
      id: 'ai-creativity',
      company: 'Capitol AI',
      tech: ['React', 'Next.js', 'FastAPI', 'WebSockets', 'PostgreSQL', 'Vercel'],
    },
    {
      id: 'real-estate',
      company: 'Olive Tree Holdings',
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
      tech: ['React', 'Angular', 'Flask', 'NgRx', 'D3.js', 'MySQL'],
    },
    {
      id: 'payment-gateway',
      company: 'SisteCrédito',
      tech: ['Angular', 'Flask', 'SQLAlchemy', 'Python', 'MySQL'],
    },
    {
      id: 'dropout-prediction',
      company: 'Educatic',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Plotly', 'React'],
    },
  ],
};
