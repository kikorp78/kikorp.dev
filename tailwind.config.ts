import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    maxHeight: {
      '5/6': '83.333333%'
    },
    colors: {
      primary: '#8c58f5',
      warning: '#f4b231',
      neutral: {
        100: '#e6e6e6',
        300: '#737373'
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
    },
    fontFamily: {
      sans: 'Inter, sans-serif',
      poppins: 'Poppins, Inter, sans-serif',
      whitney: 'Whitney, Inter, sans-serif'
    },
    boxShadow: {
      xxl: '0px 25px 50px -12px rgba(0, 0, 0, 0.25);',
      xl: '0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);',
      lg: '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);',
      md: '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1);',
      sm: '0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);',
      xs: '0px 1px 2px rgba(0, 0, 0, 0.05);'
    },
    backdropBlur: {
      xl: '20px',
      lg: '12px',
      md: '8px',
      sm: '4px'
    }
  },
  plugins: []
};

export default config;
