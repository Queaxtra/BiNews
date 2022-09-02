/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,svelte,ts}", "./src/**/*.{html,js,svelte,ts}", "./src/**/**/*.{html,js,svelte,ts}", "./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
