{
  "env": {
    "browser": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "func-names": ["error", "never"]
  },
  "plugins": [
    "react-hooks"
  ]
}
