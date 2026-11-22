/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0F2B3A', soft: '#1C3D4E' },
        enamel: '#F6F9FA',
        mist: '#E7F0F3',
        line: '#D3DFE4',
        slate: '#4D6170',
        brand: {
          50: '#EAF3FB',
          100: '#D4E7F7',
          300: '#7FB3E2',
          500: '#1D6FB8',
          600: '#175C9A',
          700: '#124A7D',
        },
        mint: { DEFAULT: '#CFEBE1', ink: '#1D5E4E' },
      },
      fontFamily: {
        display: ['"Newsreader Variable"', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk Variable"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { prose: '62ch' },
    },
  },
  plugins: [],
};
