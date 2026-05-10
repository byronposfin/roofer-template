/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          dark: '#071A30',
          light: '#0F3354',
        },
        teal: {
          DEFAULT: '#14B8A6',
          hover: '#0D9488',
        },
        slate: {
          text: '#334155',
          muted: '#64748B',
        },
        offwhite: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
};
