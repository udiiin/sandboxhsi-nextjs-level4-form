/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dmsans: ["var(--font-dmsans)"],
      },
      colors: {
        violet: "#170F49",
        blueribbon: "#4a3aff",
        whisper: "#EFF0F7",
        waterloo: "#6F6C90",
        mischka: "#D9DBE9",
        electricviolet: "#962DFF",
      },
    },
  },
  plugins: [],
};
