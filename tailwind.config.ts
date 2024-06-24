import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-gray-0": "#424549",
        "custom-gray-1": "#36393e",
        "custom-gray-2": "#282b30",
        "custom-gray-3": "#1e2124",
        "custom-blue": "#009FFD",
        "font-color": "#FFFFFF",
      }
    },
  },
  plugins: [],
};
export default config;
