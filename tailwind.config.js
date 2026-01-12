/** @type {import('tailwindcss').Config} */
export default {
    content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
          extend: {
                  colors: {
                            'mint': '#9cb99c',
                            'dark-gray': '#1a1a1a',
                  },
                  fontFamily: {
                            'serif': ['Playfair Display', 'Georgia', 'serif'],
                            'sans': ['Inter', 'system-ui', 'sans-serif'],
                  },
                  animation: {
                            'fadeIn': 'fadeIn 0.3s ease-out',
                            'scroll': 'scroll 35s linear infinite',
                  },
                  keyframes: {
                            fadeIn: {
                                      '0%': { opacity: '0', transform: 'scale(0.95)' },
                                      '100%': { opacity: '1', transform: 'scale(1)' },
                            },
                            scroll: {
                                      '0%': { transform: 'translateX(0)' },
                                      '100%': { transform: 'translateX(-50%)' },
                            },
                  },
          },
    },
    plugins: [],
}
