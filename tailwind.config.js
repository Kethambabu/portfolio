/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#050508",
        cardDark: "#0b0c16",
        borderDark: "rgba(255, 255, 255, 0.08)",
        accentCyan: "#00f0ff",
        accentBlue: "#3b82f6",
        accentPurple: "#8b5cf6"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
