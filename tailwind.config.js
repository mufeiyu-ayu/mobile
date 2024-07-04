/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./**/*.{vue}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '',
          secondary: '#f0f0f0',
          text: '#333333'
        },
        dark: {
          bg1: '#141414',
          bg2: '#1f1f1f',
          white1: '#f5f5f5',
          secondary: '#2d3748',
          text: '#ffffff'
        }
      }
    }
  },
  plugins: []
}
