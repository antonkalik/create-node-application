import writeFile from "./writeFile";

export default function (basePath: string) {
  return writeFile<string>(
    `
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-empty-interface": "error",
    }
  },
  {
    ignores: ["node_modules/*", "dist/*"]
  },
];
    `,
    basePath,
    "eslint.config.js",
  );
}
