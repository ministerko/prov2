/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      filter: {
        'green-filter':
          'invert(34%) sepia(61%) saturate(1568%) hue-rotate(92deg) brightness(89%) contrast(85%)',
      },
      fontFamily: {
        mathjax: ['"Courier New"', 'monospace'],
      },
      fontSize: {
        '5xl': '3rem', // Adjust size as needed
      },
      fontWeight: {
        extrabold: '800',
      },
      colors: {
        green: '#10B981', // Tailwind's green-500
        g: '#00FF00',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
};
