/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'appear': 'appear 1s'
      },
      keyframes: {
        'appear': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' }
        }
      },
      width: {
        'md': '627px'
      }
    },
    fontFamily: {
      'title': ['Fraunces', 'serif'],
      'body': ['Montserrat', 'sans-serif']
    },
    colors: {
      'cyan': {
        DEFAULT: 'hsl(158, 36%, 37%)',
        'hover': 'hsl(158, 36%, 20%)',
        'active': 'hsl(158, 36%, 10%)'
      },
      'cream': 'hsl(30, 38%, 92%)',
      'title': 'hsl(212, 21%, 14%)',
      'body': 'hsl(228, 12%, 48%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    letterSpacing: {
      'ultra': '0.5em'
    }
  },
  plugins: [],
}

