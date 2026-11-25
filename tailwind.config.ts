import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sacred: {
          50: "#FCF9EE",
          100: "#F7F0D5",
          200: "#EDDEAA",
          300: "#E2C97E",
          400: "#D8B756",
          500: "#C5A028",
          600: "#9E7D17",
          700: "#765C0D",
          800: "#4F3C08",
          900: "#2B2003",
          gold: "#D4AF37",
          lightGold: "#F9E498",
          amber: "#FFBF00"
        },
        celestial: {
          950: "#040814",
          900: "#091124",
          850: "#0F1C38",
          800: "#15264D",
          700: "#1E356A",
          600: "#2A4B91",
          500: "#3D69C6",
          400: "#608BE5",
          300: "#8EAEF0",
          200: "#C2D4FA",
          100: "#E6EDFD",
          50: "#F4F7FE"
        },
        water: {
          900: "#06202B",
          800: "#0A3649",
          700: "#0E4E6A",
          600: "#13698E",
          500: "#1A8BB9",
          400: "#34AEDB",
          300: "#66C7EA",
          200: "#A3DFF4",
          100: "#D7F2FA",
          50: "#EEFAFD"
        }
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    },
  },
  plugins: [],
};

export default config;
