import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--bg)',
        inkElevated: 'var(--bg-elevated)',
        paper: 'var(--text)',
        muted: 'var(--text-muted)',
        gold: 'var(--accent)',
        linec: 'var(--border)',
      },
      fontFamily: {
        bengali: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif'],
        serifBengali: ['"Noto Serif Bengali"', 'serif'],
      },
    },
  },
  plugins: [typography],
};
