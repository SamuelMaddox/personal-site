# Setup New React App <!-- omit in toc -->

- [Step X - React Router](#step-x---react-router)
- [Step X - React Helmet](#step-x---react-helmet)
- [Step X - Config Skeleton](#step-x---config-skeleton)
- [Step X - Add Responsive Break Points](#step-x---add-responsive-break-points)
- [Step X - CSS Reset & Add Theme](#step-x---css-reset--add-theme)
- [Step X - Update manifest.json & Meta tags & Title tag](#step-x---update-manifestjson--meta-tags--title-tag)
- [Step X - Storybook](#step-x---storybook)
- [Step X - Update Readme](#step-x---update-readme)

============================

## Step X - React Router

404 page

code splitting

## Step X - React Helmet

https://github.com/nfl/react-helmet

## Step X - Config Skeleton

## Step X - Add Responsive Break Points

Do this using css variables maybe? how to share across css files

## Step X - CSS Reset & Add Theme

- css modules https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

- stylelint

dark/light mode 3 options, (browser setting | light | dark)

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
