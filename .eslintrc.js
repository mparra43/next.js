module.exports = {
  root: true,
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  settings: {
    "import/ignore": ["react"],
  },
  rules: {
    "import/no-unresolved": [0, { caseSensitive: false }],
    "import/no-named-as-default": 0,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "ignore",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
