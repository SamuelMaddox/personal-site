# Create React App Sample Readme <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Step 1 - Clone Repository](#step-1---clone-repository)
  - [Step 2 - Install NPM Packages](#step-2---install-npm-packages)
  - [Step 3 - Start Local Server](#step-3---start-local-server)
  - [Step 4 - Open Application](#step-4---open-application)
  - [Step 5 - Read the Documentation](#step-5---read-the-documentation)
- [Scripts](#scripts)
- [Testing](#testing)
- [CI/CD Pipeline](#cicd-pipeline)
- [Pre-commit Hooks](#pre-commit-hooks)
  - [About Pre-commit Hooks](#about-pre-commit-hooks)
  - [Bypassing Pre-commit Hooks](#bypassing-pre-commit-hooks)
- [ESLint and Prettier](#eslint-and-prettier)
  - [What is ESLint](#what-is-eslint)
  - [ESLint Disable](#eslint-disable)
  - [What Is Prettier](#what-is-prettier)
  - [Prettier Ignore Node](#prettier-ignore-node)
- [Story Book](#story-book)
- [Styled Components](#styled-components)
- [React Router](#react-router)
- [Theme Config](#theme-config)
- [File Structure](#file-structure)
- [Recommended VS Code Extensions](#recommended-vs-code-extensions)
- [React TypeScript Cheat Sheet](#react-typescript-cheat-sheet)
- [Screen Dimensions Reference Table](#screen-dimensions-reference-table)
- [Font Styling & REM Reference Table](#font-styling--rem-reference-table)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Step 1 - Clone Repository

Run the following command:

```terminal
git clone <Repository Link>
```

### Step 2 - Install NPM Packages

```terminal
yarn install
```

### Step 3 - Start Local Server

```terminal
yarn start
```

### Step 4 - Open Application

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

### Step 5 - Read the Documentation

Be sure to read through the rest of this readme to understand all the tooling used to help aid in this apps development.

## Scripts

**`yarn start`** - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

**`yarn build`** - Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

**`yarn test`** - Launches the test runner in the interactive watch mode.

**`yarn test:coverage`** - Launches the test runner in the interactive watch mode and includes test coverage information.

**`yarn test:verbose`** - Launches the test runner in the interactive watch mode and displays individual test results with the test suite hierarchy.

**`yarn test:nowatch`** - Launches the test runner once and exits. Tests will **NOT** rerun when something changes.

**`yarn lint`** - Run ESLint.

**`yarn lint:fix`** - Run ESLint and fix automatically fixable problems.

**`yarn lint:check`** - Run ESLint and exit with an error status if there are any warnings.

**`yarn stylelint`** - Run linter for css styles.

**`yarn prettier`** - Format files to conform to the Prettier Style Guide.

**`yarn prettier:check`** - Check if files conforms to the Prettier Style Guide without making changes. Exits with an error status if files require re-formatting.

**`yarn postinstall`** - This script is called by yarn after a `yarn install`. This will setup the cloned repository to use husky pre-commit hooks.

**`yarn storybook`** - Start Storybook locally. Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

**`yarn build-storybook`** - Build Storybook as a static web application.

## Testing

TODO: (Talk about seeing test coverage in browser and console)

TODO: How to use the vscode debugger.

## CI/CD Pipeline

TODO: See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Pre-commit Hooks

### About Pre-commit Hooks

TODO: What scripts are ran during pre-commit hooks

### Bypassing Pre-commit Hooks

you can bypass `pre-commit` hooks using the `--no-verify` option. Example:

```shell
`git commit -m "yolo" --no-verify`
```

## ESLint and Prettier

### What is ESLint

TODO: What is ESLint

### ESLint Disable

Please follow these 2 conventions When disabling a line or block of code:

**Convention 1** - Only disable the rule offending rule, not all of eslint. Example:

**Good** = `/* eslint disable no-console */`\
**Bad** = `/* eslint disable */`

**Convention 2** - Provide a note explaining why the rule is disabled

To disable a line of code do the following:

```js
// eslint-disable-next-line no-console
console.log("bar");
```

To disable a block of code do the following:

```js
/* eslint-disable no-console */

console.log("bar");

/* eslint-enable no-console */
```

### What Is Prettier

Prettier is used to format our code to conform to a consistent style.

### Prettier Ignore Node

In some cases prettier will reformat code that we don't want reformated. We can use `// prettier-ignore` to exclude the next node from formatting. For example:

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

## Story Book

This project uses Storybook to help isolate React Components for development. See [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction) for more information.

TODO: quick notes for how to run/use storybook

TODO: notes on how to publish storybook as a static web application. https://storybook.js.org/docs/react/sharing/publish-storybook

## Styled Components

TODO: Style Components

## React Router

TODO: React Router

## Theme Config

TODO: Theme Config

## File Structure

TODO: File Structure

## Recommended VS Code Extensions

TODO: VS Code Extensions

## React TypeScript Cheat Sheet

Here is a link to the [React TypeScript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

## Screen Dimensions Reference Table

| Name         | Dimensions  |
| ------------ | ----------- |
| Small Phone  | 375 x 667   |
| Large Phone  | 428 x 926   |
| Small Tablet | 768 x 1024  |
| Large Tablet | 1024 x 1366 |
| Laptop       | 1280 x 720  |
| Desktop      | 1920 x 1080 |
| QHD          | 2560 x 1440 |

## Font Styling & REM Reference Table

Use the [Golden Ratio Typography Calculator](https://grtcalculator.com/) to get recommendations on line height and content width given a font size.

REM Size can be calculated using the following equation: `Rem Size = (Desired Font size) / (HTML Font Size)`

**Example:** Assuming an HTML font size of 16px, then `12px / 16px = 0.75rem`

| REM Size | Pixel Size | Point Size |
| -------- | ---------- | ---------- |
| 0.75rem  | 12px       | 9pt        |
| 0.875rem | 14px       | 11pt       |
| 1.0rem   | 16px       | 12pt       |
| 1.125rem | 18px       | 14pt       |
| 1.25rem  | 20px       | 15pt       |
| 1.375rem | 22px       | 17pt       |
| 1.5rem   | 24px       | 18pt       |
| 1.625rem | 26px       | 20pt       |
| 1.75rem  | 28px       | 21pt       |
| 1.875rem | 30px       | 23pt       |
| 2.0rem   | 32px       | 24pt       |
| 2.125rem | 34px       | 26pt       |
| 2.25rem  | 36px       | 27pt       |
| 2.375rem | 38px       | 29pt       |
| 2.5rem   | 40px       | 30pt       |
| 2.625rem | 42px       | 32pt       |
| 2.75rem  | 44px       | 33pt       |
| 2.875rem | 46px       | 35pt       |
| 3.0rem   | 48px       | 36pt       |
