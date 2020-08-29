module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: '#20c997',
      }
    },
    container: (theme) => ({
      center: true,
    }),
  },
  variants: {},
  plugins: [],
}
