/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme-aware surfaces — values flip between light (:root) and
        // dark (.dark) via CSS variables defined in global.css.
        bg: {
          DEFAULT: 'rgb(var(--c-bg) / <alpha-value>)',
          soft: 'rgb(var(--c-bg-soft) / <alpha-value>)',
          elevated: 'rgb(var(--c-bg-elevated) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--c-surface) / <alpha-value>)',
          border: 'rgb(var(--c-surface-border) / <alpha-value>)',
          hover: 'rgb(var(--c-surface-hover) / <alpha-value>)',
        },
        // Blue accent scale — static across themes (used for fills/rings).
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          // Readable accent text — adapts per theme for contrast.
          fg: 'rgb(var(--c-accent-fg) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          muted: 'rgb(var(--c-ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--c-ink-faint) / <alpha-value>)',
          strong: 'rgb(var(--c-ink-strong) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.25), 0 12px 40px -12px rgba(59,130,246,0.45)',
        card: '0 8px 30px -12px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        float: 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
