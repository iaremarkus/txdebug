import type from "@tailwindcss/typography";
import fluid, { extract, fontSize, screens } from "fluid-tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [fluid, type],
};
export default config;
