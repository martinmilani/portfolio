/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dracula-yellow': '#f1fa8c',
        'dracula-purple': '#bd93f9',
        'dracula-foreground': '#f8f8f2'
      },
    },
    
  },
  plugins: [],
};
