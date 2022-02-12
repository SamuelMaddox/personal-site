# Step 9 - CSS Reset & Theme <!-- omit in toc -->

- [Step 9-1 - Add CSS Reset](#step-9-1---add-css-reset)
- [Step 9-2 - Install Roboto Fonts](#step-9-2---install-roboto-fonts)
- [Step 9-2 - Themes](#step-9-2---themes)

## Step 9-1 - Add CSS Reset

Create React App uses PostCSS Normalize for adding a CSS Reset ([https://create-react-app.dev/docs/adding-css-reset/](https://create-react-app.dev/docs/adding-css-reset/)

Open the `/src/index.css` file, and at the top add the following:

```css
@import-normalize;
```

> NOTE: If you see an "Unknown at rule @import-normalize css(unknownAtRules)" warning in VSCode, go into the VSCode settings and change the `css.lint.unknownAtRules` setting to ignore.

## Step 9-2 - Install Roboto Fonts

Download and add `Roboto`, `Roboto Slab`, and `Roboto Mono` font families from google fonts:

- [Google Fonts Roboto](https://fonts.google.com/specimen/Roboto)

- [Google Fonts Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)

- [Google Fonts Rboto Mono](https://fonts.google.com/specimen/Roboto+Mono)

Save these fonts in the `./src/Fonts/{fontName}` directory of the project. Then creat a css file for each font named `./src/Fonts/{fontName}.css` and add font styles to them. For an example reference the `./Reference/Fonts` directory. Finally, import the font css files into the `./src/index.css` file. For an example reference the `./Reference/index.css` file

TODO: look into google icons only download https://fonts.google.com/icons. Maybe implement an icon component with an enum for all possible icons

## Step 9-2 - Themes

Copy the `./Reference/Config/Themes` directory and paste it into `./src/Config` directory of the project. Then modify the `./src/Config/index.ts` file of the project to export the `lightThemeConfig` and `darkThemeConfig`, and all the theme types from the `./src/Config/Themes` directory. For an example see the `./Reference/Config/index.ts` file.

Feel free to modify the theme as needed. Then add css variables for every theme property in the `./src/index.css` file of the project. For an example see the `./Reference/index.css` file. Provide a default value for every css variable created. Prefer using gray scale colors where necissary so if components start loading before the theme it'll give of the apparence that things are still loading.

TODO: Notes about setting/changing theme programatically using the theme configs (this part still needs implemented in the app)
