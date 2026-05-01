import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1F2933',
        slateDeep: '#2F3A40',
        warmWhite: '#F7F5F0',
        softGray: '#EEF1EE',
        accentGreen: '#3E6B4E',
        moss: '#7A8F6A',
        sand: '#C8B79B',
        gold: '#B88A4A',
      },
      boxShadow: {
        premium: '0 20px 60px rgba(31, 41, 51, 0.12)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(31,41,51,0.12) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
