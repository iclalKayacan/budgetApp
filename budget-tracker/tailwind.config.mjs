/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Projenizdeki dosyaların yolunu burada belirtin
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // Ana renk (Mavi)
        background: "#F6F8FA", // Arka plan rengi
        textDark: "#1E293B", // Koyu metin rengi
        positive: "#22C55E", // Pozitif değişim (Yeşil)
        negative: "#EF4444", // Negatif değişim (Kırmızı)
        warning: "#F59E0B", // Uyarılar ve vurgu (Turuncu)
      },
    },
  },
  plugins: [],
};
