const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        reveal: '2s ease-in-out 0s 1 normal none running reveal',
        gradient: 'gradient-animation 2s ease infinite',
      },
      backgroundColor: {
        wave: 'rgba(200, 223, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'top-wave': 'url(/top-wave.svg)',
        'bottom-wave': 'url(/bottom-wave.svg)',
        'footer-wave': 'url(/footer-wave.svg)',
      },
      colors: {
        wavegray: {
          DEFAULT: 'rgb(249, 250, 254)',
        },
        blue: {
          1000: 'rgb(8, 27, 75)',
        },
      },
      fontFamily: {
        sans: ['var(--font-lobster)'],
        mono: ['var(--font-roboto-mono)'],
      },
      keyframes: {
        reveal: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '100%',
          },
        },
      },
      maxWidth: {
        '2xs': '16rem',
      },
      translate: {
        '3px': '3px',
      },
    },
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
