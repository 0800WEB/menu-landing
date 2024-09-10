/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseBg: "#FDF2E4",
        blackPrimary: "#212121",
        highlight: "#FF7300",
        whiteCustom: "#ffffff",
        colorIcon: "#212121",
      },
      borderRadius: {
        radiusButton: "50px",
      },
      boxShadow: {
        shadowButtons: "0 4px 0 4px rgba(0, 0, 0, 0.25)",
        shadowFood: "5px 20px 20px 0 rgba(0, 0, 0, 0.4)",
      },
      dropShadow: {
        shadowCustom1: "5px 20px 20px rgba(0, 0, 0, 0.4)",
      },
      letterSpacing: {
        'custom-3p': '3%' 
      },
    },
  },
  plugins: [],
};
