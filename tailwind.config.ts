import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
    fontFamily: {
      helvetica_light: ["Helvetica LT Std Light", "sans-serif"],
      helvetica_bold: ["Helvetica LT Std Bold", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
