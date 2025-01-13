/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", // Beyaz
        foreground: "#343A40", // Koyu Gri
        primary: "#007BFF", // Mavi
        success: "#28A745", // Yeşil
        danger: "#DC3545", // Kırmızı
        neutral: "#F8F9FA", // Açık Gri
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
