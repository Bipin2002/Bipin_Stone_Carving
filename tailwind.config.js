/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#848484",
        backgroundcolor: "#000000",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1s ease-out both",
        "fade-in-down": "fade-in-down 1s ease-out both",
        "zoom-in": "zoom-in 1s ease-out both",
        zoomSlow: "zoomSlow 20s ease-in-out infinite alternate",
        glowPulse: "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0px #facc15" },
          "50%": { boxShadow: "0 0 20px #facc15" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "zoom-in": {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        zoomSlow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255, 255, 0, 0.6)" },
          "50%": { boxShadow: "0 0 25px rgba(255, 215, 0, 1)" },
        },
      },
    },
  },
  plugins: [],
};
