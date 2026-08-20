/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6fd',
          100: '#d9ecfa',
          200: '#b3d8f5',
          300: '#82bfee',
          400: '#4b9fe0',
          500: '#1d78c9',
          600: '#155fa3',
          700: '#124c82',
          800: '#123f69',
          900: '#123457',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
