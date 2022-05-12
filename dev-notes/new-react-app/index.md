# Setup New React App <!-- omit in toc -->

- [Testing](#testing)
- [Step X - Material UI](#step-x---material-ui)
- [Step X - CSS Reset & Add Theme](#step-x---css-reset--add-theme)
- [Step X - Update manifest.json & Meta tags & Title tag](#step-x---update-manifestjson--meta-tags--title-tag)
- [Step X - Storybook](#step-x---storybook)
- [Step X - Implement Auth](#step-x---implement-auth)
- [Step X - Setup CI Pipeline & GitHub Webhooks](#step-x---setup-ci-pipeline--github-webhooks)
- [Step X - Update Readme](#step-x---update-readme)

============================

## Testing

https://create-react-app.dev/docs/debugging-tests#debugging-tests-in-visual-studio-code

testing.

how to use react testing library. create example tests

how to test pages using helmet to set headers?

add mock service worker (msw) to mock APIs

look at testing in storybook https://storybook.js.org/docs/react/writing-tests/interaction-testing

import stories in jest testing: https://storybook.js.org/addons/@storybook/testing-react

## Step X - Material UI

Review How To Guides: https://mui.com/material-ui/guides/api/

This will probably replace CSS Reset and Theme

Notes on how to install Material UI: https://mui.com/material-ui/getting-started/installation/. Also look at the Globals subsection under Usage https://mui.com/material-ui/getting-started/usage/

I will need to look into MUI Icons. There are 3 options. Probably include notes on how to use in sample readme: https://mui.com/material-ui/icons/

Include Notes on how to change/add themes

How to set MUI Link component globaly to work with react router and next.js routing: https://mui.com/material-ui/guides/routing/

## Step X - CSS Reset & Add Theme

dark/light mode 3 options, (browser setting | light | dark)

Styles for font family and typography https://elementor.com/blog/guide-to-web-typography/?utm_source=google&utm_medium=cpc&utm_campaign=10759652828&utm_term=&gclid=CjwKCAjwtfqKBhBoEiwAZuesiG9xJo96zZReEQlkU_eSr3F-PCxTeC_mgc5BU2tEypUj5xfWdczX7BoCwIsQAvD_BwE

https://blog.bitsrc.io/3-ways-to-theme-react-components-9cfa631351e9

https://material.io/design/color/the-color-system.html#color-theme-creation

https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=F44336&secondary.color=FAFAFA

https://mui.com/customization/default-theme/

google material icons download

focusable styles based on slack https://codepen.io/zellwk/pen/JjPywVx

=============

CSS Varibles created for the them might not actually be needed sincing swtiching to styled components. might be able to pull directly from them context

## Step X - Update manifest.json & Meta tags & Title tag

Replace values in `./public/manifest.json` `./public/index.html` to reflect the app we're building. Also replace the logos & favicon images found in `./public`

https://developers.google.com/web/fundamentals/web-app-manifest/

## Step X - Storybook

https://storybook.js.org/

look into story book testing section of the documentation

## Step X - Implement Auth

Use AWS Cognito as an example

## Step X - Setup CI Pipeline & GitHub Webhooks

https://create-react-app.dev/docs/running-tests#continuous-integration

Have GitHub check for linting and testing before allowing merge

Maybe Look Into Sonar Cube?

Look into adding Visual Tests to storybooking https://storybook.js.org/docs/react/writing-tests/visual-testing.

Learn to Setup Sonar Qube

(Combine sonar and eslint) https://docs.sonarqube.org/latest/analysis/languages/javascript/

## Step X - Update Readme

======

- report web vitals

======

https in dev

https://create-react-app.dev/docs/using-https-in-development

======

CSS Variables and discuss themes

======

notes about environment variables

https://create-react-app.dev/docs/adding-custom-environment-variables/

======

proxy api requests & graphql

https://create-react-app.dev/docs/proxying-api-requests-in-development

https://create-react-app.dev/docs/loading-graphql-files

======

adding images, fonts, and files (as well as embed svg)

https://create-react-app.dev/docs/adding-images-fonts-and-files

======

How to add colors to pallet (add it to the pallet, then edit theme setter, then in css file initialize css variable with a gray scale value)

======

add notes about lint scripts, prettier scripts, stylelint, pre commit hooks, ci pipeline including checks for github, react router (https://reactrouter.com/web/guides/quick-start), react helmet (https://github.com/nfl/react-helmet), how to run debugger in vscode (first `yarn start`, then run debugger). also note how to bypass pre commit hooks

======

code splitting. react router docs has one way to do it. create react app also has their way to do it using react router

https://reactrouter.com/web/guides/code-splitting
https://create-react-app.dev/docs/code-splitting/#with-react-router
https://reactjs.org/docs/code-splitting.html#route-based-code-splitting

======

Typescript and PropTypes serve different purposes. Typescript validates types at compile time, whereas PropTypes are checked at runtime.

Typescript is useful when you are writing code: it will warn you if you pass an argument of the wrong type to your React components, give you autocomplete for function calls, etc.

PropTypes are useful when you test how the components interact with external data, for example when you load JSON from an API. PropTypes will help you debug (when in React's Development mode) why your component is failing by printing helpful messages like:

```txt
Warning: Failed prop type: Invalid prop `id` of type `number` supplied to `Table`, expected `string`
```
