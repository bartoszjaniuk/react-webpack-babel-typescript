module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "testing-library",
    "import",
    "react",
    "jsx-a11y",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "react-prop-types": "off",
    "react-jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "no-console": "warn",
    "no-debugger": "warn",
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          ["parent", "internal"],
          ["index", "sibling"],
          "object",
          "type",
        ],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        project: ["./tsconfig.json", "./*/tsconfig.json"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
