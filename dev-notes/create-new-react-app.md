# Setup New React App <!-- omit in toc -->

- [Step 0 - Install Yarn](#step-0---install-yarn)
- [Step 1 - Create React App Using Yarn](#step-1---create-react-app-using-yarn)
- [Step 2 - Clean Up Extra Code & Files](#step-2---clean-up-extra-code--files)
- [Step 3 - Add launch.json](#step-3---add-launchjson)
- [Step 4 - Setup ESLint & Prettier](#step-4---setup-eslint--prettier)
  - [Step 4-1 - Remove Default Config](#step-4-1---remove-default-config)
  - [Step 4-2 - Install ESLint Packages](#step-4-2---install-eslint-packages)
  - [Step 4-2 - Install Prettier Packages](#step-4-2---install-prettier-packages)
  - [Step 4-3 - Configure ESLint](#step-4-3---configure-eslint)
  - [Step 4-4 - Add Linting & Prettier Scripts](#step-4-4---add-linting--prettier-scripts)
  - [Step 4-4 - Add .prettierignore](#step-4-4---add-prettierignore)
- [Step 5 - Setup Pre-Commit Hooks](#step-5---setup-pre-commit-hooks)
  - [Step 5-1 - Install and Setup Husky](#step-5-1---install-and-setup-husky)
  - [Step 5-2 - Install and Setup Lint Staged](#step-5-2---install-and-setup-lint-staged)
  - [Step 5-3 - Setup Pre-Commit Hooks](#step-5-3---setup-pre-commit-hooks)
- [Step X - Add Remote Repository](#step-x---add-remote-repository)
- [Step X - Add Theme](#step-x---add-theme)
- [Step X - Update Readme](#step-x---update-readme)
- [Step X - Update manifest.json](#step-x---update-manifestjson)

## Step 0 - Install Yarn

Install or update the most recent version of yarn v1 globally. Note: Installation of yarn v2 will happen locally after running the create react app. Reference the following yarn install guide for updates to the process. [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

Run the following command to install / update yarn globally.

```shell
npm install -g yarn
```

## Step 1 - Create React App Using Yarn

> Create React App Instructions can be found at [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

Use the following command to create a react app that uses typescript (if you don't want to use typescript than ommit `--template typescript` from the command):

```shell
yarn create react-app my-app --template typescript
```

Then install yarn 2 locally by navigating into the new project and running the following commands:

```shell
rm -rf node_modules
yarn set version berry
```

> NOTE: At the time this guide was created, Create React App was not compatible with yarn v2's Zero-Installs feature. The `.gitignore` and `.yarnrc.yml` files will need modified in order for the app to work properly with yarn v2.

Update the `.gitignore` to include files that should be ignored when not using the Zero-Installs feature of yarn v2 [https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

(At the time this guide was created Create React App was not compatible with yarn v2's Zero-Installs feature.)

```txt
# yarn
.yarn/*
!.yarn/patches
!.yarn/releases
!.yarn/plugins
!.yarn/sdks
!.yarn/versions
.pnp.*
```

Update the `.yarnrc.yml` file to contain the `nodeLinker` property defined below:

```yml
yarnPath: ".yarn/releases/yarn-berry.cjs"
nodeLinker: "node-modules"
```

Reinstall node_modules

```shell
yarn install
```

## Step 2 - Clean Up Extra Code & Files

> The following is a list of what to delete as of v4.0.3 of create-react-app

- In `/public/index.html` remove comments.
- In `/src/App.css` remove all styles and rename file to `app.css`.
- In `/src/App.js`
  - Rename file to `app.jsx`.
  - Remove jsx in the return statement and replace with `<></>`.
  - Remove `import logo from "./logo.svg";`.
  - Rename import from `./App.css` to `./app.css`.
  - Add `import React from "react";`.
- In `/src/App.test.js`
  - Rename file to `app.test.jsx`
  - Remove the test function
  - Rename import from `./App` to `./app`.
  - Add `import React from "react";`.
- In `/src/index.css` remove all styles.
- In `/src/index.js`
  - Rename file to `index.jsx`
  - Remove code/comments related to `reportWebVitals();`.
  - Update `import App from "/App";` to `/app`.
- Delete `/src/logo.svg` and `/src/reportWebVitals.js`.
- In `/package.json`
  - Remove the `"web-vitals": "^1.0.1"` package
  - Add `"test:nowatch": "react-scripts test --watchAll=false",` under the `"scripts"` section
  - Run `yarn install`

## Step 3 - Add launch.json

Adding a launch.js file will allow debugging from vscode [https://create-react-app.dev/docs/setting-up-your-editor/#debugging-in-the-editor](https://create-react-app.dev/docs/setting-up-your-editor/#debugging-in-the-editor)

Create a `/launch.json` file and add the following to it

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

## Step 4 - Setup ESLint & Prettier

### Step 4-1 - Remove Default Config

Remove the following code from `/package.json`

```json
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
```

### Step 4-2 - Install ESLint Packages

Run the following command to to install ESLint.

````shell
yarn add eslint
````

Then run to initialize it providing the following answers:

```shell
npx eslint --init
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

Q: Would you like to install them now with npm?
A: No
```

Double check the following by referencing the [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) documentation.

Run the following command to list peer dependancies:

```shell
npm info "eslint-config-airbnb@latest" peerDependencies
```

Then run the following command for each peer dependency (I tend to install the latest version of the major version listed):

```shell
yarn add <dependency>@<version>
```

### Step 4-2 - Install Prettier Packages

Run the following command to install prettier

```shell
yarn add --exact prettier
```

Run the following command to install ESLint configuration for prettier.

```shell
yarn add eslint-config-prettier
```

### Step 4-3 - Configure ESLint

In the `/eslintrc.json` file replace the `"extends"` section with the following (Note that the order does matter):

```json
"extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app",
    "react-app/jest",
    "airbnb",
    "prettier"
],
```

### Step 4-4 - Add Linting & Prettier Scripts

Add the following scripts to the `/package.json` under the `"scripts"` section.

```json
"scripts": {
  ...
  "lint": "eslint src/*",
  "lint:fix": "eslint src/* --fix",
  "lint:check": "eslint src/* --max-warnings 0",
  "prettier": "prettier --write src",
  "prettier:check": "prettier --check src"
}
```

### Step 4-4 - Add .prettierignore

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


## Step 5 - Setup Pre-Commit Hooks

### Step 5-1 - Install and Setup Husky

Install `husky` to use githooks as if they are npm scripts (instructions below came from [https://typicode.github.io/husky/#/?id=yarn-2](https://typicode.github.io/husky/#/?id=yarn-2)).

Install `husky` and enable git hooks.

```shell
yarn add husky
yarn husky install
```

To automatically have Git hooks enabled after install, edit the sripts section the the  `/package.json` to include the following:

```json
"scripts": {
  ...
  "postinstall": "husky install"
}
```

### Step 5-2 - Install and Setup Lint Staged

Install `lint-staged` to run linter and prettier only on staged files.

```shell
yarn add lint-staged
```

```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "yarn lint:check",
    "yarn prettier"
  ]
},
```

### Step 5-3 - Setup Pre-Commit Hooks

Run the following commands to setup git pre-commit hooks

```
yarn husky add .husky/pre-commit "yarn lint-staged"
yarn husky add .husky/pre-commit "yarn test:nowatch"
```

## Step X - Add Remote Repository

Run the following commands to add remote repository (replacing `<username>` and `<repo_name>`):

```shell
git remote add origin git@github.com:<username>/<repo_name>.git
git branch -M master
git push -u origin master
```

## Step X - Add Theme

https://blog.bitsrc.io/3-ways-to-theme-react-components-9cfa631351e9

https://material.io/design/color/the-color-system.html#color-theme-creation

https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=F44336&secondary.color=FAFAFA

https://mui.com/customization/default-theme/



## Step X - Update Readme

typescript cheat sheet https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

add notes about lint scripts, prettier scripts, pre commit hooks, ci pipeline including checks for github

A JavaScript comment of `// prettier-ignore` will exclude the next node in the abstract syntax tree from formatting.

For example:

```js
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)

// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

will be transformed to:

```js
matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

you can bypase `pre-commit`  hooks useing git `--no-verify` option. Ex:

```shell
`git commit -m "yolo" --no-verify`
```

## Step X - Update manifest.json

Replace values in `./public/manifest.json` `./public/index.html` to reflect the app we're building. Also replace the logos & favicon images found in `./public`
