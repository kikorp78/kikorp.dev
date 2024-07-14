import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#8c58f5',
      warning: '#f4b231',
      text: 'var(--text)',
      'text-hover': 'var(--text-hover)',
      background: 'var(--background)',
      'background-hover': 'var(--background-hover)',
      border: 'var(--border)',
      projects: {
        ivycord: '#29e08e',
        marvo: '#4d7fff',
        spoke: '#b66bd4'
      },
      white: '#ffffff',
      black: '#000000'
    },
    fontSize: {
      'display-lg': ['52px', { lineHeight: '56px', letterSpacing: '0' }],
      'display-sm': ['44px', { lineHeight: '48px', letterSpacing: '0' }],
      'paragraph-lg': ['18px', { lineHeight: '28px', letterSpacing: '0' }],
      'paragraph-md': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
      'paragraph-sm': ['14px', { lineHeight: '20px', letterSpacing: '0' }],
      'paragraph-xs': ['12px', { lineHeight: '20px', letterSpacing: '0' }],
      'paragraph-xxs': ['10px', { lineHeight: '16px', letterSpacing: '0' }],
      'overline-lg': [
        '14px',
        { fontWeight: 700, lineHeight: '20px', letterSpacing: '0.15em' }
      ],
      'overline-sm': [
        '12px',
        { fontWeight: 700, lineHeight: '20px', letterSpacing: '0.15em' }
      ],
      'desktop-h1': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
      'desktop-h2': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
      'desktop-h3': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
      'desktop-h4': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
      'desktop-h5': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      'desktop-h6': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
      'mobile-h1': ['36px', { lineHeight: '44px', letterSpacing: '0' }],
      'mobile-h2': ['32px', { lineHeight: '40px', letterSpacing: '0' }],
      'mobile-h3': ['28px', { lineHeight: '36px', letterSpacing: '0' }],
      'mobile-h4': ['24px', { lineHeight: '32px', letterSpacing: '0' }],
      'mobile-h5': ['20px', { lineHeight: '28px', letterSpacing: '0' }],
      'mobile-h6': ['18px', { lineHeight: '24px', letterSpacing: '0' }]
    }
  },
  plugins: []
};

export default config;
