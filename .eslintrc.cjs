/* eslint-disable prettier/prettier */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
    overrides: [
        {
            extends: ["plugin:@typescript-eslint/disable-type-checked"],
            files: [
                "./vite.config.js",
                "scripts/convert-img.js",
            ],
        },
    ],
    rules: {},
};
