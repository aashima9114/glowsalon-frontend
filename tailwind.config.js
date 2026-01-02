/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salon: {
          primary: '#6D28D9', // Vibrant Purple
          secondary: '#DB2777', // Hot Pink
          accent: '#FBBF24', // Golden Yellow (for stars/highlights)
          light: '#F3F4F6', // Very light gray for section breaks
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // We will use Poppins for that modern look
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}