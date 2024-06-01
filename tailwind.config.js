/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      robot: ["Roboto Mono", "Roboto", "sans-serif"],
    },
    minHeight: {
      "screen-50": "50vh",
      "screen-60": "60vh",
      "screen-70": "70vh",
      "screen-80": "80vh",
    },
    minWidth: {
      "screen-50": "50vh",
      "screen-60": "60vh",
      "screen-70": "70vh",
      "screen-80": "80vh",
    },
    spacing: {
      76: "19rem",
      78: "19.5rem",
      104: "26rem",
      152: "38rem",
      "1/10": "10%",
      "1.5/10": "15%",
      "2/10": "20%",
      "2.5/10": "25%",
      "3/10": "30%",
      "3.5/10": "35%",
      "4/10": "40%",
      "4.5/10": "45%",
      "5/10": "50%",
      "5.5/10": "55%",
      "6/10": "60%",
      "6.5/10": "65%",
      "7/10": "70%",
      "7.5/10": "75%",
      "8/10": "80%",
      "8.5/10": "85%",
      "9/10": "90%",
      "9.5/10": "95%",
    },
  },
};

// eslint-disable-next-line no-undef
export const plugins = [require("daisyui")];

export const daisyui = {
  themes: ["light", "dark"],
};
