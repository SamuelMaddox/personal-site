# Create React App Sample Readme <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Step 0 - Prerequisite](#step-0---prerequisite)
  - [Step 1 - Clone Repository](#step-1---clone-repository)
  - [Step 2 - Install Dependencies](#step-2---install-dependencies)
  - [Step 3 - Start Local Server](#step-3---start-local-server)
  - [Step 4 - Open The Application](#step-4---open-the-application)
  - [Step 5 - Read the Documentation](#step-5---read-the-documentation)
- [Scripts](#scripts)
- [Code Management](#code-management)
  - [Branch Naming Convention](#branch-naming-convention)
  - [Pull Request Checklist](#pull-request-checklist)
- [File Structure](#file-structure)
  - [Sample File Structure](#sample-file-structure)
  - [File Structure Rules & Conventions](#file-structure-rules--conventions)
- [Testing](#testing)
- [Pre-commit Hooks](#pre-commit-hooks)
  - [About Pre-commit Hooks](#about-pre-commit-hooks)
  - [Bypassing Pre-commit Hooks](#bypassing-pre-commit-hooks)
- [ESLint and Prettier](#eslint-and-prettier)
  - [What is ESLint](#what-is-eslint)
  - [ESLint & Prettier Disable Conventions](#eslint--prettier-disable-conventions)
  - [Eslint Ignore Node](#eslint-ignore-node)
  - [What Is Prettier](#what-is-prettier)
  - [Prettier Ignore Node](#prettier-ignore-node)
- [Story Book](#story-book)
- [Material UI](#material-ui)
  - [Material UI Styles](#material-ui-styles)
  - [Material UI Themes](#material-ui-themes)
- [Emotion React CSS](#emotion-react-css)
- [React Router](#react-router)
- [Helmet](#helmet)
- [Advance](#advance)
  - [CI/CD Pipeline](#cicd-pipeline)
  - [React TypeScript Cheat Sheet](#react-typescript-cheat-sheet)
- [Extra Notes](#extra-notes)
  - [Debugging from VS Code](#debugging-from-vs-code)
  - [Recommended VS Code Extensions](#recommended-vs-code-extensions)
  - [Screen Dimensions Reference Table](#screen-dimensions-reference-table)
  - [Font Styling & REM Reference Table](#font-styling--rem-reference-table)
- [SCRUM Notes](#scrum-notes)
  - [Agile Manifesto](#agile-manifesto)
  - [Story Statuses](#story-statuses)
  - [Definition of Ready](#definition-of-ready)
  - [Definition of Done](#definition-of-done)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Step 0 - Prerequisite

- Install git using [these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
- Install Node 16+ using [Node Version Manager](https://github.com/nvm-sh/nvm)(Mac/Linux) or the [Node Windows Installer](https://nodejs.org/en/)(Windows 10/11)

### Step 1 - Clone Repository

Run the following command:

```terminal
git clone <Repository Link>
```

### Step 2 - Install Dependencies

```terminal
npm install -g yarn
yarn set version berry
yarn install
```

### Step 3 - Start Local Server

```terminal
yarn start
```

### Step 4 - Open The Application

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

### Step 5 - Read the Documentation

Be sure to read through the rest of this readme to understand all the tooling used to help developers build this application and keep our codebase clean.

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

## Code Management

### Branch Naming Convention

Branching follows the [gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

- `main`
- `hotfix-{version with patch number increased}`
- `release-{version with max or minor number increased}`
- `develop`
- `feature-{id}-{name}`
- `story-{id}-{name}`
- `task-{id}-{name}`

### Pull Request Checklist

- [ ] Story/Task acceptance criteria has been met.
- [ ] Browser console is not displaying errors, warnings, or unnecessary console logs.
- [ ] There is no commented out or unnecessary code.
- [ ] Names are semantic and meaningful.
- [ ] Code is clear and easy to understand.
- [ ] Code Follows the DRY (Don't Repeat Yourself) principle.
- [ ] Code follows SOLID principles:
  - [ ] **Single Responsibility Principle** - Every Component/Objects/Function should have only one responsibility
  - [ ] **Open Closed Principle** - Components/Objects/Functions should be open for extension, but closed for modification
  - [ ] **Liskov Substitution Principle** - Every subclass or derived class should be substitutable for their base or parent class.
  - [ ] **Interface Segregation Principle** - A client should never be forced to implement an interface that it doesn’t use.
  - [ ] **Dependency Inversion Principle** - High-level module must not depend on the low-level module, but they should depend on abstractions.
- [ ] Files follow the defined [File Structure](#file-structure).
- [ ] New ESLint Disable comments follow the [ESLint & Prettier Disable Conventions](#eslint--prettier-disable-conventions)
- [ ] Modules/Components have [Story Book](#story-book) stories written.
- [ ] CSS styles are defined using using [Material UI Styles](#material-ui-styles) or [Emotion](#emotion-react-css)
- [ ] CSS styles are using values from the [Material UI Themes](#material-ui-themes) where possible
- [ ] Internal inks are implemented using [React Router](#react-router)
- [ ] Pages have [Helmet](#helmet) tags set
- [ ] Tests are written to closely resemble how your web pages are interacted by the users.
- [ ] Tests avoid testing implementation details.
- [ ] Test coverage is above 80%.
- [ ] Linters are not throwing errors or warnings.
- [ ] Prettier has been ran.

## File Structure

### Sample File Structure

```txt
📁src
================================================================================
| 📁API
| | 📁FirstAPI
| | | 📄FirstAPI.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Components
| | 📁FirstComponent
| | | 📁Assets
| | | | 📄icon.svg
| | | 📁Utils
| | | | 📄FirstUtil.ts
| | 📄FirstComponent.test.tsx
| | 📄FirstComponent.tsx
| | 📄FirstComponent.styles.ts
| | 📄index.ts
| | 📄Types.ts
================================================================================
| 📁Config
| | 📁FirstCategoryConfig
| | | 📄OneFirstCategoryConfig.ts
| | | 📄TwoFirstCategoryConfig.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Contexts
| | 📁FirstContext
| | | 📄firstContext.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Font
| | 📁FontName
| | | 📄FontNameRegular.ttf
| | | 📄FontNameItalic.ttf
| | | 📄FontNameBold.ttf
| | | 📄FontNameBoldItalic.ttf
| | 📄FontName.css
================================================================================
| 📁Hooks
| | 📁FirstHook
| | | 📁Utils
| | | | 📄FirstUtil.ts
| | | 📄FirstHook.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Layouts
| | 📁MainLayout
| | | 📄MainLayout.test.tsx
| | | 📄MainLayout.tsx
| | | 📄MainLayout.styles.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Modules
| | 📁Layout
| | | 📁MainHeader
| | | | 📁Assets
| | | | | 📄pic.png
| | | | 📁Components
| | | | | ...
| | | | 📁Utils
| | | | | 📄FirstUtil.ts
| | | | 📄MainHeader.test.tsx
| | | | 📄MainHeader.tsx
| | | | 📄MainHeader.styles.ts
| | | | 📄index.ts
| | | | 📄Types.ts
================================================================================
| 📁Pages
| | 📁Common
| | | 📁HomePage
| | | | 📁Assets
| | | | | 📄pic.png
| | | | 📄HomePage.test.tsx
| | | | 📄HomePage.tsx
| | | | 📄HomePage.styles.ts
| | | | 📄index.ts
| | | | 📄Types.ts
================================================================================
| 📁SharedAssets
| | 📁GroupOne
| | | 📄pic.png
================================================================================
| 📁Types
| | 📁GroupOne
| | | 📁Classes
| | | | 📄FirstClassType.ts
| | | 📁Enums
| | | | 📄FirstEnumType.ts
| | | 📁Interfaces
| | | | 📄FirstInterfaceType.ts
================================================================================
| 📁Utils
| | 📁FirstUtil.ts
| | | 📄FirstUtil.ts
| | | 📄index.ts
| | | 📄Types.ts
| | 📄TimeConstants.ts
| 📄App.test.tsx
| 📄App.tsx
| 📄index.css
| 📄index.tsx
```

### File Structure Rules & Conventions

- Folders & Files in `/src` should use `PascalCase` for file names except for the following:

  - `/src/**/index.ext`
  - `/src/react-app-env.d.ts`
  - `/src/reportWebVitals.ts`
  - `/src/setupTests.ts`

- Folders in `/public` should use `PascalCase`, and files should use `camelCase`.

- The main code for a folder should be in a file sharing the same name as the folder. There should also be an `index.ts` file inside of that folder that is used to import then export the main code. This is to avoid having multiple files opened in your editor all named `index.ts` while also avoiding imports that look like `./ComponentName/ComponentName`.

- The top level `Components` folder should be for generic, used anywhere components (Like`HamburgerButton`, `SideNav`, `Input`). `Components` can have other `Components` as children.

- The top level`Modules` are really big (epic or feature level) components made up of smaller components. `Modules` can have other `Modules` and `Components` as children. The hope is that individual `Modules` should not be aware of other sibling `Modules`. This is why `API`, `Contexts`, and `Hooks` are not sub folders of individual modules. It's possible that `API`, `Contexts`, and `Hooks` might need to be shared across modules, and this is how they would handle the communication across sibling `Modules`.

- Types should be defined in the `/src/Types` directory. Exception, Emotion Styled Component Types can be saved in the same file as the styles are.

## Testing

TODO: (Talk about seeing test coverage in browser and console)

TODO: How to use the vscode debugger.

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

### ESLint & Prettier Disable Conventions

Please follow these 2 conventions When disabling a line or block of code:

**Convention 1** - Only disable the rule offending rule, not all of eslint. Example:

**Good** = `/* eslint disable no-console */`\
**Bad** = `/* eslint disable */`

**Convention 2** - Provide a note explaining why the rule is disabled

### Eslint Ignore Node

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

## Material UI

TODO: General MUI notes

### Material UI Styles

TODO: Styles Notes

### Material UI Themes

TODO: Theme Config

## Emotion React CSS

[See Emotion Documentation](https://emotion.sh/docs/introduction)

## React Router

[See React Router Documentation](https://reactrouter.com/docs/en/v6)

## Helmet

[See React Helmet Async Documentation](https://www.npmjs.com/package/react-helmet-async)

## Advance

### CI/CD Pipeline

TODO: See the Create React App documentation about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

TODO: notes on how to publish storybook as a static web application. https://storybook.js.org/docs/react/sharing/publish-storybook

### React TypeScript Cheat Sheet

Here is a link to the [React TypeScript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

## Extra Notes

### Debugging from VS Code

TODO: Debugging from VS Code

### Recommended VS Code Extensions

TODO: VS Code Extensions

### Screen Dimensions Reference Table

| Name         | Dimensions  |
| ------------ | ----------- |
| Small Phone  | 375 x 667   |
| Large Phone  | 428 x 926   |
| Small Tablet | 768 x 1024  |
| Large Tablet | 1024 x 1366 |
| Laptop       | 1280 x 720  |
| Desktop      | 1920 x 1080 |
| QHD          | 2560 x 1440 |

### Font Styling & REM Reference Table

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

## SCRUM Notes

### Agile Manifesto

**INDIVIDUALS AND INTERACTIONS** --- over processes and tools\
**WORKING SOFTWARE** --- over comprehensive documentation\
**CUSTOMER COLLABORATION** --- over contract negotiation\
**RESPONDING TO CHANGE** --- over following a plan

That is, while there is value in the items on the right, we value the items on the left more.

### Story Statuses

- New -> Refine -> Estimate -> Hold (For Dependencies) -> Ready -> Active -> In QA -> Demo -> Done

### Definition of Ready

- Includes a clear statement of the business value.
- There are no outstanding questions or decisions required by the business.
- Dependencies have been identified
- Has acceptance criteria defined.
- Has an estimate.

### Definition of Done

- Story meets all acceptance criteria.
- Code meets all criteria defined in the [Pull Request Checklist](#pull-request-checklist).
- Code has been peer reviewed by at least 2 other developers.
- Code has been deployed to QA.
- Code has been tested and signed off by QA.
- Story has been demoed to and signed off by the Product Owner (if it is a non technical story).
