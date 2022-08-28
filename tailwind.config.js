/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./resources/**/*.blade.php",
  './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
  "./resources/**/*.js",
  "./resources/**/*.vue",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
