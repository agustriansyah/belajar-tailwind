/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        montserrat: ['Montserrat'],
        inter: ['Inter'],
        krub: ['Krub'],
      },
      spacing : {
        13: '3.25rem',
      },
      colors: {
        wpu: '#bada55',
        kopi: '#c0ffee',
        'dark-color': '#2b2b2b',
        'black-transparent-50': 'rgba(0, 0, 0, 0.5)',
        'black-transparent-0': 'rgba(0, 0, 0, 0)',
      },
      screens: {
        '2xl': '1320px',
      },
      animation: {
        typing: 'typing 3.5s steps(12) infinite',
        spin: 'spin 0.5s linear',
        bounce1: 'bounce1 1.1s infinite',
        bounce2: 'bounce2 1.2s infinite',
      },
      keyframes: {
      typing: {
        '40%, 60%': {
          left: '100%',
        },

        '100%': {
          left: '0%',
        },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      bounce1: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
      bounce2: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
      boxShadow:{
      'custom-inset': 'inset 0 2px 10px rgba(0,0,0, .3), inset 2px 0 8px rgba(0,0,0, .3), inset 0 -4px 4px rgba(0,0,0, .3)',
    }
    },
  },
  plugins: [
  ],
}

