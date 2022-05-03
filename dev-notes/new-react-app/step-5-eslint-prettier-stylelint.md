# Step 5 - ESLint, Prettier, & Stylelint <!-- omit in toc -->

- [Step 5-1 - Remove Default Config](#step-5-1---remove-default-config)
- [Step 5-2 - Install ESLint Packages](#step-5-2---install-eslint-packages)
- [Step 5-3 - Install Prettier Packages](#step-5-3---install-prettier-packages)
- [Step 5-4 - Configure ESLint](#step-5-4---configure-eslint)
- [Step 5-5 - Add `.prettierignore`](#step-5-5---add-prettierignore)
- [Step 5-6 - Install & Configure Stylelint](#step-5-6---install--configure-stylelint)
- [Step 5-7 - Add Linting, Prettier, and Stylelint Scripts](#step-5-7---add-linting-prettier-and-stylelint-scripts)
- [Step 5-8 - Test Linting](#step-5-8---test-linting)
- [Step 5-9 - Fix "Couldn't find config **\_\_**" bug](#step-5-9---fix-couldnt-find-config-__-bug)
- [Step 5-10 - Fix linting errors and warnings](#step-5-10---fix-linting-errors-and-warnings)

## Step 5-1 - Remove Default Config

Remove the following code from `/package.json`

```json
{
  ...
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  ...
}
```

## Step 5-2 - Install ESLint Packages

Run the following command to to install ESLint.

```shell
yarn add eslint
```

Then run the following command and provide the following answers to set up the configuration file for ESLint.

```shell
yarn run eslint --init
```

```txt
Q: How would you like to use ESLint?
A: To check syntax, find problems, and enforce code style

Q: What type of modules does your project use?
A: JavaScript modules (import/export)

Q: Which framework does your project use?
A: React

Q: Does your project use TypeScript?
A: (Yes | No)

Q: Where does your code run?
A: Browser

Q: How would you like to define a style for your project?
A: Use a popular style guide

Q: Which style guide do you want to follow?
A: Airbnb: https://github.com/airbnb/javascript

Q: What format do you want your config file to be in?
A: JSON

Q: Checking peerDependencies ... The config that you've selected requires the following dependencies: ... Would you like to install them now with npm?
A: No (Some dependencies might already be installed implicitly by create-react-app)
```

If you're using TypeScript and you ran the `create-react-app` script using the `--template typescript` flag then the it should have already implicitly installed `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`. This can be checked by running the following commands:

```shell
npm ls @typescript-eslint/eslint-plugin
npm ls @typescript-eslint/parser
```

Next, install the `eslint-config-airbnb` and it's peer dependencies ([eslint-config-airbnb documentation](https://www.npmjs.com/package/eslint-config-airbnb))

```shell
yarn add eslint-config-airbnb
```

Then run the following command to show the list of peer dependencies we may need to install.

```shell
npm info eslint-config-airbnb@latest peerDependencies
```

For each peer dependency, check to see if `create-react-app` has already implicitly installed them by running the following command:

```shell
npm ls <dependency>
```

> NOTE: As of 2/14/2022 all the peer dependencies where already implicitly installed

If the dependency is not already installed then install it using this command:

```shell
yarn add <dependency>@<version>
```

## Step 5-3 - Install Prettier Packages

Run the following command to install prettier

```shell
yarn add --exact prettier
```

Run the following command to install ESLint configuration for prettier.

```shell
yarn add eslint-config-prettier
```

## Step 5-4 - Configure ESLint

Open the `.eslintrc.json` config file.

First, convert the file to indent using 2 spaces.

1. In VSCode, open the command palette (`Ctrl-Shift-P`)
2. Run the command `Indent Using Spaces`
3. Select the value `2`.
4. Format the document by using the shortcut `Shift-Alt-F`, or open the command palette (`Ctrl-Shift-P`) and select `Format Document`

Next, replace the `"extends"` section with the following (Note that the order does matter):

If using TypeScript:

```json
{
  ...
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "react-app/jest",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  ...
}
```

If NOT using TypeScript:

```json
{
  ...
  "extends": [
   "eslint:recommended",
   "plugin:react/recommended",
   "react-app",
   "react-app/jest",
   "airbnb",
   "prettier"
  ],
  ...
}
```

Then, update the `rules` section to contain the following:

> NOTE: As of React 17 the new JSX transform will automatically import the necessary react/jsx-runtime functions, React will no longer need to be in scope when you use JSX. This is why we suppress the `"react/react-in-jsx-scope"` rule.

> NOTE: If using Typescript the eslint `"no-shadow"` will need disabled as it can report incorrect errors. it will be replaced by the `"@typescript-eslint/no-shadow"` rule.

If Using TypeScript:

```json
{
  ...
  "rules": {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        "allow": "as-needed",
        "extensions": [".jsx", "tsx"]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"]
  },
  ...
}
```

If NOT using TypeScript:

```json
{
  ...
  "rules": {
    ...
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "react/react-in-jsx-scope": "off"
  }
  ...
}
```

Finally, if your using TypeScript, add the following sections to the config file:

(Skip if your not using TypeScript)

```json
{
  ...
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "overrides": [
    {
      "files": ["**/*.ts?(x)"],
      "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"]
      }
    }
  ]
  ...
}
```

## Step 5-5 - Add `.prettierignore`

Create a `.prettierignore` at the project root and add the following:

```text
# dependencies
/node_modules
/.pnp
.pnp.js

# husky
.husky/*

# yarn
.yarn/*
.pnp.*
yarn.lock

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## Step 5-6 - Install & Configure Stylelint

Run the following command to install stylelint

```shell
yarn add stylelint stylelint-config-recommended
```

Then create a `.stylelintrc.json` file and add the following:

```json
{
  "extends": "stylelint-config-recommended"
}
```

## Step 5-7 - Add Linting, Prettier, and Stylelint Scripts

Add the following scripts to the `/package.json` under the `"scripts"` section.

```json
{
  ...
   "scripts": {
     ...
     "lint": "eslint --ext js,jsx,ts,tsx src",
     "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src",
     "lint:check": "eslint --max-warnings 0 --ext js,jsx,ts,tsx src",
     "stylelint": "stylelint src/**/*.css",
     "prettier": "prettier --write src",
     "prettier:check": "prettier --check src"
   }
}
```

## Step 5-8 - Test Linting

Temporarily add a `console.log('Hello')` to the `/src/index.tsx` file. Then run `yarn lint`. The following warning should be displayed:

```shell
/home/smaddox/software-projects/my-projects/haas-ui/src/index.tsx
  7:1  warning  Unexpected console statement  no-console
```

> NOTE: If you're using VSCode we recommend looking for the ESLint, Prettier, and Stylelint extensions

## Step 5-9 - Fix "Couldn't find config **\_\_**" bug

You may encounter a `Couldn't find config ____` error after running `yarn lint`. Due to `create-react-app` installing some of the eslint configs for us, it's possible that conflicting or duplicate ESLint config dependencies could have been installed when we were adding our custom configs. To fix this bug, delete the `node_modules` and `yarn.lock`, and then run `yarn install`

```shell
rm -rf node_modules yarn.lock
yarn install
```

If this doesn't fix the issue, then `eslint-config-airbnb` or one of it's peer dependencies were probably missed and needs to be installed.

## Step 5-10 - Fix linting errors and warnings

Run `yarn lint:fix`.

Next run `yarn lint` and fix all eslint errors and warnings.

Finally run `yarn stylelint` and fix all stylelint errors and warnings
