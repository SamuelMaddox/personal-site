# Setup New React App <!-- omit in toc -->

- [Step 0 - Install Yarn](#step-0---install-yarn)
- [Step 1 - Create React App Using Yarn](#step-1---create-react-app-using-yarn)
- [Step 2 - Clean Up Extra Code & Files](#step-2---clean-up-extra-code--files)
- [Step 3 - Add launch.json](#step-3---add-launchjson)
- [Step 4 - Setup ESLint](#step-4---setup-eslint)
  - [Step 4-1 - Remove Default Config](#step-4-1---remove-default-config)
  - [Step 4-2 - Install ESLint Packages](#step-4-2---install-eslint-packages)
  - [Step 4-2 - Install Prettier](#step-4-2---install-prettier)
  - [Step 4-3 - Configure ESLint](#step-4-3---configure-eslint)
  - [Step 4-X](#step-4-x)
- [Step 5 Automatically Format](#step-5-automatically-format)
- [Step X - Add Remote Repository](#step-x---add-remote-repository)
- [Step X - Update Readme](#step-x---update-readme)
- [Step X - Update manifest.json](#step-x---update-manifestjson)

## Step 0 - Install Yarn

[https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

## Step 1 - Create React App Using Yarn

In the instructions below create a new React app using yarn. 

[https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

## Step 2 - Clean Up Extra Code & Files

> The following is a list of what to delete as of v4.0.3 of create-react-app

- In `/public/index.html` remove comments.
- In `/src/App.css` remove all styles and rename file to `app.css`.
- In `/src/App.js`
  - Rename file to `app.jsx`.
  - Remove jsx in the return statement and replace with `<></>`.
  - Remove `import logo from './logo.svg';`.
  - Rename import from `./App.css` to `./app.css`.
  - Add `import React from 'react';`.
- In `/src/App.test.js`
  - Rename file to `app.test.jsx`
  - Remove the test function
  - Rename import from `./App` to `./app`.
  - Add `import React from 'react';`.
- In `/src/index.css` remove all styles.
- In `/src/index.js` 
  - Rename file to `index.jsx`
  - Remove code/comments related to `reportWebVitals();`.
  - Update `import App from '/App';` to `/app`.
  - 
- Delete `/src/logo.svg` and `/src/reportWebVitals.js`.
- In `/package.json` remove the `"web-vitals": "^1.0.1"` package and run `yarn install`

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

## Step 4 - Setup ESLint

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
A: No

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

### Step 4-2 - Install Prettier

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

### Step 4-X
add lint scripts to package.json. then run `yarn lint` and `yarn lintfix`
add prettier scripts to package.json. 
## Step 5 Automatically Format

install hsuky, lint-staged, and prettier [https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically)

## Step X - Add Remote Repository

## Step X - Update Readme

add notes about lint scripts, pre commit hooks, ci pipeline including checks for github
## Step X - Update manifest.json

Replace values in `./public/manifest.json` `./public/index.html` to reflect the app we're building. Also replace the logos & favicon images found in `./public`
  