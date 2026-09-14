/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        },
        dark: {
          bg: '#0A0C10',
          surface: '#12151C',
          card: '#161920',
          border: '#1F2430',
          hover: '#1A1D26',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.15)',
        'gold-glow-lg': '0 0 35px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}
