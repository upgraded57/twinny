/** @type {import('tailwindcss').Config} */
export default {
  compilerOptions: {
    // ...
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
    },
    // ...
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
