module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  semi: true,
  printWidth: 110,
  arrowParens: "always",
  importOrder: [
    "^@turbo/(.*)$",
    "^@lib/(.*)$",
    "^@components/(.*)$",
    "^@(server|trpc)/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  // importOrderSortSpecifiers: true,
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
};
