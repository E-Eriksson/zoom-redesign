/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-[url('images/zoomWorkplace.png')]",
    "bg-[url('images/zoomAi.png')]",
    "bg-[url('images/developer_ecosystem.png')]",
    "bg-[url('images/business.png')]",
  ],
  theme: {
    extend: {
      colors: {
        "blue-ribbon-50": "#edf6ff",
        "blue-ribbon-100": "#d7eaff",
        "blue-ribbon-200": "#b9dbff",
        "blue-ribbon-300": "#88c6ff",
        "blue-ribbon-400": "#50a6ff",
        "blue-ribbon-500": "#2881ff",
        "blue-ribbon-600": "#0b5cff",
        "blue-ribbon-700": "#0a49eb",
        "blue-ribbon-800": "#0f3bbe",
        "blue-ribbon-900": "#133795",
        "blue-ribbon-950": "#11235a",
      },
      content: {
        arrowDown: 'url("images/down-arrow.svg")',
      },
      backgroundImage: {
        devImg: "url('images/zoomAiCompanion.png')",
      },
    },
  },
  plugins: [],
};
