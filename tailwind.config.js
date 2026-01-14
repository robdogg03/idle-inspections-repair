/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        idle: {
          teal: '#5CC9BD',
          dark: '#333333',
          salmon: '#F08A6C',
          orange: '#F4B07B',
          bg: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      }
    }
  },
  plugins: [],
}
