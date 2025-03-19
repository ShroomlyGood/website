/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'mushroom-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 8C17.85 8 8 17.85 8 30s9.85 22 22 22 22-9.85 22-22S42.15 8 30 8z\" fill=\"%23000000\" fill-opacity=\"0.1\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};