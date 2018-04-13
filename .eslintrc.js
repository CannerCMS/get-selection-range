module.exports = {
  extends: [
    "eslint:recommended"
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  plugins: [
    "react",
    "flowtype"
  ],
  rules: {
    "no-implicit-coercion": 0,
    "max-len": 0
  }
};
