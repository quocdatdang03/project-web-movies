/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "img-shadow": "0px 7px 29px 0px rgb(100 100 111 / 20%)",
        "btn-shadow-hover": "0px 0px 7px 15px #ff00004d",
        "btn-shadow": "0px 0px 3px 5px #ff00004d",
      },
    },
  },
  plugins: [],
};
