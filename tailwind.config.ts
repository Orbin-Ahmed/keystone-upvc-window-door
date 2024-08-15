import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#F2F9FF",
        "background-secondary":
          "linear-gradient(230.07deg, #E2EDFB 7.51%, rgba(217, 217, 217, 0) 64.29%)",
        "primary-color": "#8ECB2C",
        "primray-hover": "#A7D74A",
        "secondary-text": "#60606B",
      },
      screens: {
        "2xs": "525px",
        "2md": "968px",
      },
    },
  },
  plugins: [],
};
export default config;
