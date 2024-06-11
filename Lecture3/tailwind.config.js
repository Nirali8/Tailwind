/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      'oswald': ['Oswald']
    },
    fontSize: {
      'large': ['40px', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }]
      }
    },
    fontWeight: {
      hairline: '100',
    },
    
  },
  plugins: [],
}

