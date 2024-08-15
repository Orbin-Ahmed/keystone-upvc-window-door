import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#F2F9FF",
        "primary-color": "#8ECB2C",
        "primray-hover": "#A7D74A",
      },
      screens: {
        "2md": "968px",
      },
    },
  },
  plugins: [],
};
export default config;
