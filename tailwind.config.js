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
          },
    },
    plugins: [],
}
