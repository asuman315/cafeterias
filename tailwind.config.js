module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    },
    colors: {
      'primary-1': 'hsl(196, 80%, 50%)',
      'primary-2': 'hsl(196, 100%, 97%)',
      'primary-3': 'hsl(196, 54%, 14%)',
      'primary-4': 'hsl(196, 74%, 84%)',
      'white': '#fff',
      'dark-red': '#7f1d1d',
      'light-red': '#fef2f2',
      'dark-green': '#14532d',
      'light-green': '#f0fdf4',
      'black': '#000',
    },
    gridTemplateColumns: {
      'autofill-sm': 'repeat(auto-fill, minmax(150px, 1fr))',
      'autofill-md': 'repeat(auto-fill, minmax(190px, 1fr))',
      'autofill-lg': 'repeat(auto-fit, minmax(230px, 1fr))',
      'autofill-details': 'repeat(auto-fit, minmax(250px, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      'grid-sm': 'repeat(2, 2fr)',
      'grid-thumbs': 'repeat(auto-fill, minmax(80px, 1fr))',
      'grid-checkout-pg': 'repeat(5, 1fr)',
      '2': 'repeat(2, 1fr)',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      zoomInOut: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.8)' }
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      zoomInOut: 'zoomInOut 1s ease-in-out infinite',
      bounce: 'bounce 1s ease-in-out infinite',
    },
    extend: {},
  },
  plugins: [],
};