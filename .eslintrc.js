module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true, // nodeをenvに追加することでmoduleなどのグローバル変数を使用可能にする
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended", // アクセシビリティ
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["sort-keys-custom-order", "react", "@typescript-eslint", "simple-import-sort", "import", "unused-imports"],
  rules: {
    // ソートする JS オブジェクトの場合
    "sort-keys-custom-order/object-keys": ["error", { orderedKeys: ["id", "name", "title"] }],
    // TS タイプのソート
    "sort-keys-custom-order/type-keys": ["error", { orderedKeys: ["id", "name", "title"] }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error", // importはファイルの先頭
    "import/newline-after-import": "error", // import後に改行
    "import/no-duplicates": "error", // 同じファイルのimportをマージ
    "unused-imports/no-unused-imports": "error",
    "react/prop-types": "error", // PropsのTypeを強制
    "no-undef": "error", // 未定義の変数をエラー
    "no-var": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
