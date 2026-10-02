/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0A09',
        stone: { DEFAULT: '#D3CFC5', 50: '#E9E6DF' },
        olive: '#7C724F',
        ochre: '#B89448',
        bronze: '#A3732F',
        earth: '#583525',
        paper: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.25rem, 9.5vw, 10.5rem)', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'display-l': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '0.95' }],
        statement: ['clamp(1.65rem, 3.4vw, 3.4rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        body: ['clamp(1rem, 1.1vw, 1.125rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        gutter: 'clamp(16px, 3vw, 48px)',
        section: 'clamp(6rem, 14vw, 12rem)',
      },
      transitionTimingFunction: { out: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      // escala de capas (sin z-index arbitrarios)
      zIndex: { layer: '20', float: '30', menu: '40', nav: '50', grain: '60', curtain: '90', preloader: '100' },
    },
  },
  plugins: [],
}
