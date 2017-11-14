module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "comma-dangle": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "args": "none"
      }
    ],
    "quotes": [
      "error",
      "single"
    ]
  }
};
