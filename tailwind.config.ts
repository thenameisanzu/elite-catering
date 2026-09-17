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
        canvas: "#F2F1EB",
        linen: "#F2F1EB",
        sand: "#EEE7DA",
        almond: "#EEE7DA",
        ivory: "#F2F1EB",
        sage: {
          light: "#AFC8AD",
          DEFAULT: "#88AB8E",
          deep: "#5B7B61",
        },
        forest: {
          DEFAULT: "#384B3D",
          deep: "#1D2820",
        },
        ink: "#1E2520",
        brass: {
          DEFAULT: "#B4884C",
          light: "#D6B378",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
