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
        paper: "#f2f2f3",
        surface: "#e9e9ea",
        ink: "#1d1f20",
        divider: "rgba(29,31,32,.16)",
        accent: {
          100: "#eef6ff",
          200: "#d6ebff",
          300: "#b5d9fd",
          400: "#94bce3",
          500: "#749dc4",
          600: "#597ea3",
          700: "#416180",
          800: "#2c455d",
          900: "#1d2d3d",
          DEFAULT: "#5980a6",
        },
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        heading: ["var(--font-barlow-condensed)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 1px 2px rgba(43,43,45,.14)",
        md: "0 3px 10px rgba(43,43,45,.16)",
        lg: "0 12px 32px rgba(43,43,45,.22)",
      },
    },
  },
  plugins: [],
};
export default config;
