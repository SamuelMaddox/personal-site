# Step 1 - Create React App

> Create React App Instructions can be found at [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

Use the following command to create a react app that uses TypeScript (if you don't want to use TypeScript than omit `--template typescript` from the command):

```shell
yarn create react-app my-app --template typescript
```

Then install yarn 2 locally by navigating into the new project and running the following commands:

```shell
rm -rf node_modules
yarn set version berry
```

> NOTE: At the time this guide was created, Create React App was not compatible with yarn v2's Zero-Installs feature. The `.gitignore` and `.yarnrc.yml` files will need modified in order for the app to work properly with yarn v2.

Update the `.gitignore` to include files that should be ignored when not using the Zero-Installs feature of yarn v2 [https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)

```txt
# yarn
.yarn/*
!.yarn/patches
!.yarn/releases
!.yarn/plugins
!.yarn/sdks
!.yarn/versions
.pnp.*
```

Update the `.yarnrc.yml` file to include the `nodeLinker` property defined below:

```yml
nodeLinker: "node-modules"
```

Reinstall node_modules

```shell
yarn install
```
