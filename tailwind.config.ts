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
        "background-gradient-color-1": "#E2EDFB",
        "primary-color": "#8ECB2C",
        "primray-hover": "#A7D74A",
        "primary-text": "#1D2E3B",
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
