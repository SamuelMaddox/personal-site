# Setup New React App <!-- omit in toc -->

- [Step X - Material UI](#step-x---material-ui)
- [Step X - CSS Reset & Add Theme](#step-x---css-reset--add-theme)
- [Step X - Storybook](#step-x---storybook)
- [Testing](#testing)
- [Step X - Update manifest.json & Meta tags & Title tag](#step-x---update-manifestjson--meta-tags--title-tag)
- [Step X - Implement Auth](#step-x---implement-auth)
- [Step X - Setup CI Pipeline & GitHub Webhooks](#step-x---setup-ci-pipeline--github-webhooks)
- [Step X - Update Readme](#step-x---update-readme)

============================

## Step X - Material UI

Review How To Guides: https://mui.com/material-ui/guides/api/

This will probably replace CSS Reset and Theme

Notes on how to install Material UI: https://mui.com/material-ui/getting-started/installation/. Also look at the Globals subsection under Usage https://mui.com/material-ui/getting-started/usage/

I will need to look into MUI Icons. There are 3 options. Probably include notes on how to use in sample readme: https://mui.com/material-ui/icons/

Include Notes on how to change/add themes, including adding custom fonts

How to set MUI Link component globaly to work with react router and next.js routing: https://mui.com/material-ui/guides/routing/

remove all mention of styled components in sample readme

is there an emotion vscode extension similiar to styled components? all that documentation will need updated

## Step X - CSS Reset & Add Theme

dark/light mode 3 options, (browser setting | light | dark)

## Step X - Storybook

https://storybook.js.org/

look into story book testing section of the documentation

## Testing

https://create-react-app.dev/docs/debugging-tests#debugging-tests-in-visual-studio-code

testing.

how to use react testing library. create example tests

how to test pages using helmet to set headers?

add mock service worker (msw) to mock APIs

look at testing in storybook https://storybook.js.org/docs/react/writing-tests/interaction-testing

import stories in jest testing: https://storybook.js.org/addons/@storybook/testing-react

Look into adding Visual Tests to storybooking https://storybook.js.org/docs/react/writing-tests/visual-testing.

## Step X - Update manifest.json & Meta tags & Title tag

Replace values in `./public/manifest.json` `./public/index.html` to reflect the app we're building. Also replace the logos & favicon images found in `./public`

https://developers.google.com/web/fundamentals/web-app-manifest/

## Step X - Implement Auth

Use AWS Cognito as an example

## Step X - Setup CI Pipeline & GitHub Webhooks

https://create-react-app.dev/docs/running-tests#continuous-integration

Have GitHub check for linting and testing before allowing merge

Learn to Setup Sonar Qube

(Combine sonar and eslint) https://docs.sonarqube.org/latest/analysis/languages/javascript/

branch naming:

- `main`
- `hotfix-{version with patch number increased}`
- `release-{version with max or minor number increased}`
- `develop`
- `feature-{id}-{name}`
- `story-{id}-{name}`
- `task-{id}-{name}`

pipeline should auto update version number in package.json and tag the commit when merging release branches and hotfix branches into main. it can pull the version from the branch name, ex: `release-1.2.3`

add notes on report web vitals https://create-react-app.dev/docs/measuring-performance/

## Step X - Update Readme

https in dev

https://create-react-app.dev/docs/using-https-in-development

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

check that all sample readme links still work.

Search all documentation for `TODO:`. Double check that all of it makes sense

Look through bookmarks for anything else to add/document
