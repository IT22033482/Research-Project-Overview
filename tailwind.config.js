

/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // Orange — primary brand (vibrant)
        peach: {
          light: '#FFCDC3',  // soft warm tint (from FF9A86)
          mid: '#FF8D00',    // vibrant orange — primary CTA
          deep: '#FF7400',   // deep orange — hover/emphasis
        },
        // Pastel accents (user-specified hexes mapped to .mid)
        blush: {
          light: '#FFC5C5',
          mid: '#FF8A8A',
        },
        sky: {
          light: '#C5DFF5', // softer (from 8CC0EB)
          mid: '#7BD3EA',   // vibrant sky
          alt: '#8CC0EB',   // alt soft blue
        },
        butter: {
          light: '#FEEEC9',
          mid: '#FCDC94',
        },
        mint: {
          light: '#D0F6DE',
          mid: '#A1EEBD',
        },
        lavender: {
          light: '#DFD6FD',
          mid: '#BEADFA',
        },
        coral: {
          light: '#FFCDC3',
          mid: '#FF9A86',
        },
        cream: '#FFF9F2',
        charcoal: '#3A3A4A',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(58, 58, 74, 0.08)',
        'float': '0 15px 35px -5px rgba(255, 141, 0, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.03)',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #FF9A86 0%, #FF8A8A 50%, #BEADFA 100%)',
        'gradient-roadmap': 'linear-gradient(135deg, #FF8D00 0%, #BEADFA 100%)',
      }
    },
  },
  plugins: [],
}

