/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-1": "#FFFFFF",
        "background-2": "#FAFBFC",
        "background-3": "#F8FAFC",
        "background-4": "#F3F5F7",
        "border": "#EBEDEF",
        "primary-text": "#212121",
        "secondary-text": "#424242",
        "helper-text": "#757575",
        "icons": "#616161",
        "accent-400": "#5073FF",
        "accent-100": "#768EFF",
        "accent-25": "#E9ECFF",
        "tag-1": "#A1AFFF",
        "tag-2": "#9082E6",
      },
      fontFamily: {
        messina: ["'Messina Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
