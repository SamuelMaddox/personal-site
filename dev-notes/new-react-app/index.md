# Setup New React App <!-- omit in toc -->

- [Testing](#testing)
- [Step X - CSS Reset & Add Theme](#step-x---css-reset--add-theme)
- [Step X - Update manifest.json & Meta tags & Title tag](#step-x---update-manifestjson--meta-tags--title-tag)
- [Step X - Storybook](#step-x---storybook)
- [Step X - Implement Auth](#step-x---implement-auth)
- [Step X - Setup CI Pipeline & GitHub Webhooks](#step-x---setup-ci-pipeline--github-webhooks)
- [Step X - Update Readme](#step-x---update-readme)
  - [Screen Dimensions Reference Table](#screen-dimensions-reference-table)
  - [Font Size Rem Reference Table](#font-size-rem-reference-table)

============================

## Testing

https://create-react-app.dev/docs/debugging-tests#debugging-tests-in-visual-studio-code

testing.

test coverage reporting = yarn test -- --coverage (is there a better way to show this? should this be a script in package json and added to setup documentation? I think this creates a coverage directory in the project that is ignored by git, that contains html file to view coverage. I did add a script for coverage in package.json all this needs covered in project readme)

https://create-react-app.dev/docs/running-tests#coverage-reporting

## Step X - CSS Reset & Add Theme

- css modules https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

(This needs tested). The Contains Attribute Selector `div[class*="post-"]` might work to style child components.

dark/light mode 3 options, (browser setting | light | dark)

Styles for font family and typography https://elementor.com/blog/guide-to-web-typography/?utm_source=google&utm_medium=cpc&utm_campaign=10759652828&utm_term=&gclid=CjwKCAjwtfqKBhBoEiwAZuesiG9xJo96zZReEQlkU_eSr3F-PCxTeC_mgc5BU2tEypUj5xfWdczX7BoCwIsQAvD_BwE

https://blog.bitsrc.io/3-ways-to-theme-react-components-9cfa631351e9

https://material.io/design/color/the-color-system.html#color-theme-creation

https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=F44336&secondary.color=FAFAFA

https://mui.com/customization/default-theme/

google material icons download

focusable styles based on slack https://codepen.io/zellwk/pen/JjPywVx

## Step X - Update manifest.json & Meta tags & Title tag

Replace values in `./public/manifest.json` `./public/index.html` to reflect the app we're building. Also replace the logos & favicon images found in `./public`

https://developers.google.com/web/fundamentals/web-app-manifest/

## Step X - Storybook

https://storybook.js.org/

## Step X - Implement Auth

Use AWS Cognito as an example

## Step X - Setup CI Pipeline & GitHub Webhooks

https://create-react-app.dev/docs/running-tests#continuous-integration

Have GitHub check for linting and testing before allowing merge

Maybe Look Into Sonar Cube?

## Step X - Update Readme

typescript cheat sheet https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

======

- report web vitals

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

How to add colors to pallet (add it to the pallet, then edit them setter, then in css file initialize css variable with a gray scale value)

======

add notes about lint scripts, prettier scripts, stylelint, pre commit hooks, ci pipeline including checks for github, react router (https://reactrouter.com/web/guides/quick-start), react helmet (https://github.com/nfl/react-helmet), how to run debugger in vscode (first `yarn start`, then run debugger). also note how to bypass pre commit hooks

======

code splitting. react router docs has one way to do it. create react app also has their way to do it using react router

https://reactrouter.com/web/guides/code-splitting
https://create-react-app.dev/docs/code-splitting/#with-react-router
https://reactjs.org/docs/code-splitting.html#route-based-code-splitting

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

### Screen Dimensions Reference Table

| Name         | Dimensions  |
| ------------ | ----------- |
| Small Phone  | 375 x 667   |
| Large Phone  | 428 x 926   |
| Small Tablet | 768 x 1024  |
| Large Tablet | 1024 x 1366 |
| Laptop       | 1280 x 720  |
| Desktop      | 1920 x 1080 |
| QHD          | 3440 x 1440 |

### Font Size Rem Reference Table

https://grtcalculator.com/

Rem Size = (Desired Font size) / (HTML Font Size)

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
