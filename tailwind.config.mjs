/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sky: {
          50: '#f0f8fc',
          100: '#dcedf7',
          200: '#b3d9ee',
          300: '#82bfe1',
          400: '#4fa0d0',
          500: '#2E7FB8',
          600: '#25689a',
          700: '#1f527a',
          800: '#1a415f',
          900: '#153349',
        },
        cream: {
          50: '#fffaf5',
          100: '#fdf1e5',
          200: '#f7e0cc',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
