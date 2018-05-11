# eslint-config-aerian

This is a sharable ESLint config which enforces a strict ES6+ style.

To install, run:

```sh
#npm
npm i -D eslint prettier eslint-config-aerian

#yarn
yarn add --dev eslint prettier eslint-config-aerian
```

To use it, create the following .eslintrc.json:

```json
{
    "extends": ["eslint-config-aerian"]
}
```

The base formatting uses Prettier, which parses and reformats your code. It runs this through ESLint, so you can run use `eslint . --fix` to apply Prettier formatting as well as ESLint rules.

As well as formatting from Prettier, these rules also enforce strict ES6+ practices. These are based on `eslint-config-es`. It enforces ES modules, rather than CommonJS or AMD.
