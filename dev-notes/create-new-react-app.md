# Setup New React App <!-- omit in toc -->

- [Step 0 - Install Yarn](#step-0---install-yarn)
- [Step 1 - Create React App Using Yarn](#step-1---create-react-app-using-yarn)
- [Step 2 - Clean Up Extra Code & Files](#step-2---clean-up-extra-code--files)
- [Step X - Update manifest.json](#step-x---update-manifestjson)

## Step 0 - Install Yarn

[https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

## Step 1 - Create React App Using Yarn

In the instructions below create a new React app using yarn. 

[https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

## Step 2 - Clean Up Extra Code & Files

> The following is a list of what to delete as of v4.0.3 of create-react-app

- In `./public/index.html` remove comments.
- In `./src/App.css` remove all styles and rename file to `app.css`.
- In `./src/App.js` remove jsx in the return statement and replace with `<></>`. Also rename file to `app.js`.
- In `./src/App.test.js` remove the test function and rename file to `app.test.js`
- In `./src/index.css` remove all styles.
- In `./src/index.js` remove code/comments related to `reportWebVitals();`. Update `import App from './App';` to `./app`.
- Delete `./src/logo.svg` and `./src/reportWebVitals.js`.
- In `./package.json` remove the `"web-vitals": "^1.0.1"` package and run `yarn install`

## Step X - Update manifest.json

Replace values in `./public/manifest.json` `./public/index.html` to reflect the app we're building. Also replace the logos & favicon images found in `./public`
  