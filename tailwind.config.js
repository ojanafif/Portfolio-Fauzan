/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#22d3ee',
        dark: '#020617',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in',
        'slide-right': 'slideRight 1s ease-out',
        'slide-left': 'slideLeft 1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'}
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}

