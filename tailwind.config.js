module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],  // Include all .jsx and .js files inside the src folder
  theme: {
    extend: {
      fontFamily: {
        'megrim': ['Megrim', 'cursive'],  // Add fallback cursive
        'alice': ['Alice', 'serif'],      // Add fallback serif
      },
    },
  },
  plugins: [],
}
