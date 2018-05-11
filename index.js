module.exports = {
    extends: [
        "es/2015/client",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
        "prettier/react"
    ],
    plugins: ["jest", "prettier", "import"],
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2018,
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    env: {
        browser: true,
        "jest/globals": true
    },
    rules: {
        "babel/object-curly-spacing": "always",
        "react/jsx-indent": false,
        "sort-imports": 0,
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "no-console": 0,
        "import/no-commonjs": "error",
        "import/no-amd": "error",
        "import/no-duplicates": "error",
        "import/no-dynamic-require": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-mutable-exports": "error"
    }
};
