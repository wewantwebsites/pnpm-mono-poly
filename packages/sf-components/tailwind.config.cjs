/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  darkMode: ['class', '[data-mode="dark"]'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0ea5e9',
          secondary: '#7dd3fc',
          accent: '#ffffff',
          neutral: '#ffffff',
          'base-100': '#000000',
          info: '#a5b4fc',
          success: '#bef264',
          warning: '#fcd34d',
          error: '#f87171',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
