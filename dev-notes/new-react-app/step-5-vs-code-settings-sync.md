# Step 5 - VS Code Shared Settings & Debugger Setup <!-- omit in toc -->

- [Shared Settings](#shared-settings)
- [Shared Launch.json](#shared-launchjson)

## Shared Settings

There are some VS Code settings related to code formatting that can be shared at a repository level with fellow developers.

`.vscode` folder at the project root and add a

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "files.trimTrailingWhitespace": true,
  "files.eol": "\n"
}
```

## Shared Launch.json

Adding a launch.js file will allow debugging from vscode. See the create react app docs about [debugging in the editor](https://create-react-app.dev/docs/setting-up-your-editor/#debugging-in-the-editor) for more information

Create a `.vscode/launch.json` file surat the project root. Then add the following configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```
