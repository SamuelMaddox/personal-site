# Step 8 - Material UI

TODO: [Stylelint & Emotion](https://medium.com/swlh/keeping-your-css-in-js-clean-with-stylelint-8822c8c1543a)

(add to sample readme)

## Step 8-1 - Install Material UI

To install Material UI run the following command:

```shell
yarn add @mui/material @mui/icons-material @emotion/react @emotion/styled @fontsource/roboto
```

## Step 8-2 - Add Roboto Font

The Roboto font will not be automatically loaded by MUI and will need to be loaded manually.
Open the `./src/index.tsx` file and add the following:

```javascript
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
```

> NOTE: MUI default typography configuration only relies on 300, 400, 500, and 700 font weights.

## Step 8-3 - Add MUI's CssBasline

MUI provides a CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon.
Then open `./src/App.tsx` and wrap your app with the `<CssBaseline>` Component

```javascript
import CssBaseline from "@mui/material/CssBaseline";

export function App() {
  return <CssBaseline>{/* Your Application Component Here */}</CssBaseline>;
}
```
