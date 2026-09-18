/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F7FAF6',
          100: '#F3F7F2',
          200: '#E4EDE2',
          300: '#D0DFD0',
          400: '#A4C2A4',
          500: '#759E75',
          600: '#4A754A',
          700: '#2D522E',
          800: '#1D3B1E',
          900: '#122613',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FFF9E5',
          200: '#FFF0C2',
          300: '#FFE28A',
          400: '#F5D054',
          500: '#E5C158',
          600: '#D4AF37',
          700: '#B89326',
          800: '#8C6D14',
          900: '#5E4909',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        farmilo: ['Fraunces', 'Syne', 'Outfit', 'serif'],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(25, 45, 26, 0.06), 0 2px 6px -1px rgba(25, 45, 26, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(25, 45, 26, 0.12), 0 4px 12px -2px rgba(212, 175, 55, 0.2)',
      }
    },
  },
  plugins: [],
}
