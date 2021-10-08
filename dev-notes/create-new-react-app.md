# Setup New React App <!-- omit in toc -->

- [Step 0 - Install Yarn](#step-0---install-yarn)
- [Step 1 - Create React App Using Yarn](#step-1---create-react-app-using-yarn)
- [Step 2 - Add Remote Repository](#step-2---add-remote-repository)
- [Step 3 - Clean Up Extra Code & Files](#step-3---clean-up-extra-code--files)
- [Step 4 - Setup Debugger in VSCode](#step-4---setup-debugger-in-vscode)
- [Step 5 - Setup ESLint & Prettier](#step-5---setup-eslint--prettier)
  - [Step 5-1 - Remove Default Config](#step-5-1---remove-default-config)
  - [Step 5-2 - Install ESLint Packages](#step-5-2---install-eslint-packages)
  - [Step 5-3 - Install Prettier Packages](#step-5-3---install-prettier-packages)
  - [Step 5-4 - Configure ESLint](#step-5-4---configure-eslint)
  - [Step 5-5 - Add `.prettierignore`](#step-5-5---add-prettierignore)
  - [Step 5-6 - Add Linting & Prettier Scripts](#step-5-6---add-linting--prettier-scripts)
  - [Step 5-7 - Test Linting](#step-5-7---test-linting)
  - [Step 5-8 - Fix "Couldn't find config **\_\_**" bug](#step-5-8---fix-couldnt-find-config-__-bug)
  - [Step 5-9 - Fix linting errors and warnings](#step-5-9---fix-linting-errors-and-warnings)
- [Step 6 - Setup Pre-Commit Hooks](#step-6---setup-pre-commit-hooks)
  - [Step 6-1 - Install and Setup Husky](#step-6-1---install-and-setup-husky)
  - [Step 6-2 - Install and Setup Lint Staged](#step-6-2---install-and-setup-lint-staged)
  - [Step 6-3 - Setup Pre-Commit Hooks](#step-6-3---setup-pre-commit-hooks)
  - [Step 6-4 - Test Pre-Commit Hooks](#step-6-4---test-pre-commit-hooks)
- [Step X - React Router](#step-x---react-router)
- [Step X - React Helmet](#step-x---react-helmet)
- [Step X - Add Responsive Break Points](#step-x---add-responsive-break-points)
- [Step X - CSS Reset & Add Theme](#step-x---css-reset--add-theme)
- [Step X - Update manifest.json & Meta tags & Title tag](#step-x---update-manifestjson--meta-tags--title-tag)
- [Step X - Storybook](#step-x---storybook)
- [Step X - Update Readme](#step-x---update-readme)

## Step 0 - Install Yarn

Install or update the most recent version of yarn v1 globally. Note: Installation of yarn v2 will happen locally after running the create react app. Reference the following yarn install guide for updates to the process. [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

Run the following command to install / update yarn globally.

```shell
npm install -g yarn
```

## Step 1 - Create React App Using Yarn

> Create React App Instructions can be found at [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

Use the following command to create a react app that uses TypeScript (if you don't want to use TypeScript than ommit `--template typescript` from the command):

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

Update the `.yarnrc.yml` file to include the `nodeLinker` property defined below:

```yml
nodeLinker: "node-modules"
```

Reinstall node_modules

```shell
yarn install
```

## Step 2 - Add Remote Repository

Create an empty remote repository in GitHub. Then run the following commands:

```shell
git remote add origin git@github.com:<username>/<repo_name>.git
git branch -M master
git push -u origin master
```

## Step 3 - Clean Up Extra Code & Files

> The following is a list of what to clean up & delete as of v4.0.3 of create-react-app
>
> NOTE: As of React 17 the new JSX transform will automatically import the necessary react/jsx-runtime functions, React will no longer need to be in scope when you use JSX. This is why we remove `import React from 'react'`

- In `/public/index.html` remove comments.
- In `/src/App.css` remove all styles and rename file to `app.css`.
- In `/src/App.js`

  - Rename file to `app.jsx` or `app.tsx`.
  - Remove all code and replace with the following:

    If using TypeScript:

    ```javascript
    import { ReactElement } from "react";
    import "./app.css";

    function App(): ReactElement {
      return <h1>Hello World!</h1>;
    }

    export default App;
    ```

    If NOT using TypeScript:

    ```javascript
    import "./app.css";

    function App() {
      return <h1>Hello World!</h1>;
    }

    export default App;
    ```

  - If TypeScript is being used, add the `ReactElement` return type to the function component
  - Remove jsx in the return statement and replace with `<></>`.

- In `/src/App.test.js`

  - Rename file to `app.test.js` or `app.test.ts`.
  - Remove all code and replace with the following:

    ```javascript
    import {} from "@testing-library/react";

    test.todo("write tests");
    ```

- In `/src/index.css` remove all styles.
- In `/src/index.js`
  - Rename file to `index.jsx` or `index.tsx`.
  - Remove comments related to `reportWebVitals();`.
  - Update `import App from "./App";` to `./app`.
- Delete `/src/logo.svg`.
- In `reportWebVitals.ts` add a return type of `void` to the `reportWebVitals()` arrow function
- In `/package.json`

  - Update the scripts section to include the following:

    ```json
    {
      ...
      "scripts": {
        ...
        "test:nowatch": "react-scripts test --watchAll=false",
      }
    }
    ```

## Step 4 - Setup Debugger in VSCode

Adding a launch.js file will allow debugging from vscode [https://create-react-app.dev/docs/setting-up-your-editor/#debugging-in-the-editor](https://create-react-app.dev/docs/setting-up-your-editor/#debugging-in-the-editor)

Create a `.vscode` folder at the project root and add a `launch.json` file to that folder. Then add the following configuration:

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

## Step 5 - Setup ESLint & Prettier

### Step 5-1 - Remove Default Config

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

### Step 5-2 - Install ESLint Packages

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

> NOTE: As of 10/5/2021 all the peer dependencies where already implicitly installed

If the dependency is not already installed then install it using this command:

```shell
yarn add <dependency>@<version>
```

### Step 5-3 - Install Prettier Packages

Run the following command to install prettier

```shell
yarn add --exact prettier
```

Run the following command to install ESLint configuration for prettier.

```shell
yarn add eslint-config-prettier
```

### Step 5-4 - Configure ESLint

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
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "react-app",
    "react-app/jest",
    "airbnb",
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

> NOTE: As of React 17 the new JSX transform will automatically import the necessary react/jsx-runtime functions, React will no longer need to be in scope when you use JSX. This is why we supress the `"react/react-in-jsx-scope"` rule.

If Using TypeScript:

```json
{
  ...
    "rules": {
    ...
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
    "react/jsx-filename-extension": ["error", {
      "allow": "as-needed",
      "extensions": [".jsx", "tsx"]
    }],
    "react/react-in-jsx-scope": "off"
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

### Step 5-5 - Add `.prettierignore`

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

### Step 5-6 - Add Linting & Prettier Scripts

Add the following scripts to the `/package.json` under the `"scripts"` section.

```json
{
  ...
   "scripts": {
     ...
     "lint": "eslint --ext js,jsx,ts,tsx src",
     "lint:fix": "eslint --fix --ext js,jsx,ts,tsx src",
     "lint:check": "eslint --max-warnings 0 --ext js,jsx,ts,tsx src",
     "prettier": "prettier --write src",
     "prettier:check": "prettier --check src"
   }
}
```

### Step 5-7 - Test Linting

Temporarily add a `console.log('Hello')` to the `/src/index.tsx` file. Then run `yarn lint`. The following warning should be displayed:

```shell
/home/smaddox/software-projects/my-projects/haas-ui/src/index.tsx
  7:1  warning  Unexpected console statement  no-console
```

> NOTE: If you're using VSCode we recomend looking for the ESLint and Prettier extensions

### Step 5-8 - Fix "Couldn't find config **\_\_**" bug

You may encounter a `Couldn't find config ____` error after running `yarn lint`. Due to `create-react-app` installing some of the eslint configs for us, it's possible that conflicting or duplicate ESLint config dependencies could have been installed when we were adding our custom configs. To fix this bug, delete the `node_modules` and `yarn.lock`, and then run `yarn install`

```shell
rm -rf node_modules yarn.lock
yarn install
```

If this doesn't fix the issue, then `eslint-config-airbnb` or one of it's peer dependencies were probably missed and needs to be installed.

### Step 5-9 - Fix linting errors and warnings

Run `yarn lint:fix`. Then run `yarn lint` and fix all errors and warnings.

## Step 6 - Setup Pre-Commit Hooks

### Step 6-1 - Install and Setup Husky

Install `husky` to use githooks as if they are npm scripts (instructions below came from [https://typicode.github.io/husky/#/?id=yarn-2](https://typicode.github.io/husky/#/?id=yarn-2)).

Install `husky` and enable git hooks.

```shell
yarn add husky
yarn husky install
```

To automatically have Git hooks enabled after install, edit the sripts section in the `package.json` file to include the following:

```json
{
  ...
   "scripts": {
     ...
     "postinstall": "husky install"
   }
}
```

### Step 6-2 - Install and Setup Lint Staged

Install `lint-staged` to run linter and prettier only on staged files.

```shell
yarn add lint-staged
```

Add the following configuration to the `package.json` file:

```json
{
  ...
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "yarn lint:check",
      "yarn prettier"
    ]
  },
  ...
}
```

### Step 6-3 - Setup Pre-Commit Hooks

Run the following commands to setup git pre-commit hooks

```shell
yarn husky add .husky/pre-commit "yarn lint-staged"
yarn husky add .husky/pre-commit "yarn test:nowatch"
```

### Step 6-4 - Test Pre-Commit Hooks

Temporarily add a `console.log('Hello')` to the `/src/index.tsx` file. Try to add and commit changes to git. The following warning should be displayed:

```shell
✖ yarn lint:check:
ESLint found too many warnings (maximum: 0).

/home/smaddox/software-projects/my-projects/haas-ui/src/app.tsx
  4:1  warning  Unexpected console statement  no-console

✖ 1 problem (0 errors, 1 warning)
```

Undo that change. Temporarily add the following to the `/src/app.test.ts`:

```javascript
...

test("Failing Test", () => {
  throw new Error("Failed");
});
```

Try to add and commit changes to git. The following warning should be displayed:

```shell
 FAIL  src/app.test.ts
  ✕ Failing Test (1 ms)
  ✎ todo write tests

  ● Failing Test

    Failed

      4 |
      5 | test("Failing Test", () => {
    > 6 |   throw new Error("Failed");
        |         ^
      7 | });
      8 |

      at Object.<anonymous> (src/app.test.ts:6:9)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 todo, 2 total
Snapshots:   0 total
Time:        0.967 s, estimated 1 s
Ran all test suites.
husky - pre-commit hook exited with code 1 (error)
```

## Step X - React Router

## Step X - React Helmet

https://github.com/nfl/react-helmet

## Step X - Add Responsive Break Points

Do this using css variables maybe? how to share across css files

## Step X - CSS Reset & Add Theme

Styles for font family and typography (https://elementor.com/blog/guide-to-web-typography/?utm_source=google&utm_medium=cpc&utm_campaign=10759652828&utm_term=&gclid=CjwKCAjwtfqKBhBoEiwAZuesiG9xJo96zZReEQlkU_eSr3F-PCxTeC_mgc5BU2tEypUj5xfWdczX7BoCwIsQAvD_BwE)

https://create-react-app.dev/docs/adding-css-reset/

https://blog.bitsrc.io/3-ways-to-theme-react-components-9cfa631351e9

https://material.io/design/color/the-color-system.html#color-theme-creation

https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=F44336&secondary.color=FAFAFA

https://mui.com/customization/default-theme/

## Step X - Update manifest.json & Meta tags & Title tag

Replace values in `./public/manifest.json` `./public/index.html` to reflect the app we're building. Also replace the logos & favicon images found in `./public`

https://developers.google.com/web/fundamentals/web-app-manifest/

## Step X - Storybook

https://storybook.js.org/

## Step X - Update Readme

typescript cheat sheet https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

======

File naming convention and project file structure

======

https in dev

https://create-react-app.dev/docs/using-https-in-development

======

notes about environment variables and css modules

https://create-react-app.dev/docs/adding-custom-environment-variables/

https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

======

proxy api requests & graphql

https://create-react-app.dev/docs/proxying-api-requests-in-development

https://create-react-app.dev/docs/loading-graphql-files

======

adding images, fonts, and files (as well as embed svg)

https://create-react-app.dev/docs/adding-images-fonts-and-files

======

code splitting

https://create-react-app.dev/docs/code-splitting

======

add notes about lint scripts, prettier scripts, pre commit hooks, ci pipeline including checks for github, react helmet, how to run debugger in vscode (first `yarn start`, then run debugger)

======

A JavaScript comment of `// prettier-ignore` will exclude the next node in the abstract syntax tree from formatting.

For example:

```js
matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);

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

you can bypase `pre-commit` hooks useing git `--no-verify` option. Ex:

```shell
`git commit -m "yolo" --no-verify`
```

======

Typescript and PropTypes serve different purposes. Typescript validates types at compile time, whereas PropTypes are checked at runtime.

Typescript is useful when you are writing code: it will warn you if you pass an argument of the wrong type to your React components, give you autocomplete for function calls, etc.

PropTypes are useful when you test how the components interact with external data, for example when you load JSON from an API. PropTypes will help you debug (when in React's Development mode) why your component is failing by printing helpful messages like:

```
Warning: Failed prop type: Invalid prop `id` of type `number` supplied to `Table`, expected `string`
```

======
