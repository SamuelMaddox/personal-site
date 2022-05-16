# Step 9 - Storybook <!-- omit in toc -->

- [Step 10-1 - Install Storybook](#step-10-1---install-storybook)
- [Step 10-2 - Install Storybook ESLint Plugin](#step-10-2---install-storybook-eslint-plugin)
- [Step 10-3 - Cleanup Storybook Code](#step-10-3---cleanup-storybook-code)
- [Step 10-4 - Setup Storybook Preview](#step-10-4---setup-storybook-preview)
- [Step 10-5 - Setup a11y addon](#step-10-5---setup-a11y-addon)
- [Step 10-6 - Run Storybook](#step-10-6---run-storybook)

## Step 10-1 - Install Storybook

Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application. For more information see the [Storybook Documentation](https://storybook.js.org/docs/react/get-started/install)

To install storybook run the following command:

```shell
npx sb init
```

Before installation is complete you'll be prompted with the following question:

```txt
Do you want to run the 'eslintPlugin' fix on your project? >
```

Type `n` for no. We'll setup the linter manually.

## Step 10-2 - Install Storybook ESLint Plugin

To install the Storybook ESLint Plugin run the following command:

```shell
yarn add eslint-plugin-storybook
```

In the `.eslintrc.json` add `plugin:storybook/recommended` to the `extends` section after all other plugins but before `prettier`.

```json
{
  ...
  "extends": [
    ...
    "plugin:storybook/recommended",
    "prettier"
  ],
  ...
}
```

## Step 10-3 - Cleanup Storybook Code

Remove the `/src/stories` directory and all of it's files.

In the package.json do the following:

- Move the devDependencies up into the dependencies section.
- Remove the eslintConfig section from the package.json.
- Configure jest to ignore stories by modifying the test:coverage script to the following:

```json
{
  ...
  "scripts": {
    "test:coverage": "react-scripts test --coverage --collectCoverageFrom='[\"!src/**/*.stories.*\"]'",
  },
  ...
}
```

In the `.eslintrc.json` add the following to the `overrides` sections:

```json
{
  ...
  "overrides": [
    { ... },
    //👇👇👇 ADD THIS CODE 👇👇👇
    {
      "files": [
        "**/*.stories.*"
      ],
      "rules": {
        "import/no-anonymous-default-export": "off",
        "react/function-component-definition": "off",
        "react/jsx-props-no-spreading": "off"
      }
    }
    //👆👆👆 ADD THIS CODE 👆👆👆
  ]
}

```

## Step 10-4 - Setup Storybook Preview

Update the `.storybook/preview.js` file to include the following:

```js
export const parameters = {
  ...
  layout: 'centered',
  backgrounds: {
    values: [
      { name: 'light', value: '#f8f8f8'},
      { name: 'dark', value: '#333333'}
    ]
  },
  viewport: {
    viewport: {
    viewports: {
      smallPhone: {
        name: "Small Phone",
        styles: {
          width: "375px",
          height: "667px",
        },
      },
      largePhone: {
        name: "Large Phone",
        styles: {
          width: "428px",
          height: "926px",
        },
      },
      smallTablet: {
        name: "Small Tablet",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      largeTablet: {
        name: "Large Tablet",
        styles: {
          width: "1024px",
          height: "1366px",
        },
      },
      laptop: {
        name: "Laptop",
        styles: {
          width: "1280px",
          height: "720px",
        },
      },
      desktop: {
        name: "Desktop",
        styles: {
          width: "1920px",
          height: "1080px",
        },
      },
      qhd: {
        name: "QHD",
        styles: {
          width: "2560px",
          height: "1440px",
        },
      },
    },
  },
  }
}
```

## Step 10-5 - Setup a11y addon

Storybook’s official a11y addon runs accessibility audits while you’re developing components to give you a fast feedback loop. It's powered by Deque's axe-core, which automatically catches up to 57% of WCAG issues. See https://storybook.js.org/docs/react/writing-tests/accessibility-testing for more details

To install the a11y addon run the following command:

```shell
yarn add @storybook/addon-a11y
```

Then update your Storybook configuration (in `.storybook/main.js`) to include the accessibility addon:

```js
// .storybook/main.js

module.exports = {
  stories:[],
  addons:[
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y', //👈 The a11y addon goes here
};
```

## Step 10-6 - Run Storybook

To use storybook run the following command:

```shell
yarn storybook
```

If you copied the `MainHeader` module from the ./Reference directory into your project then you should see a few stories pop up in your browser. Otherwise story book will show that there are no stories.
