/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./**/*.{vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg1: '#141414',
          bg2: '#1f1f1f',
          white1: '#f5f5f5',
          white2: '#ffffff',
          text2: '#ff7a51',
          border: '#ffffff',
          secondary: '#2d3748',
          text: '#ffffff',
          user: '#14532d',
          userB: '#020617'
        }
      }
    }
  },
  plugins: []
}
