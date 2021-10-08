# Step 4 - VSCode Debugger

Adding a launch.js file will allow debugging from vscode [https://create-react-app.dev/docs/setting-up-your-editor/#debugging-in-the-editor](https://create-react-app.dev/docs/setting-up-your-editor/#debugging-in-the-editor)

Create a `.vscode` folder at the project root and add a `launch.json` file to that folder. Then add the following configuration:

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
