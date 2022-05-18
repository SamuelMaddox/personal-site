# Step 6 - Setup Pre-Commit Hooks <!-- omit in toc -->

- [Step 6-1 - Install and Setup Husky](#step-6-1---install-and-setup-husky)
- [Step 6-2 - Install and Setup Lint Staged](#step-6-2---install-and-setup-lint-staged)
- [Step 6-3 - Setup Pre-Commit Hooks](#step-6-3---setup-pre-commit-hooks)
- [Step 6-4 - Test Pre-Commit Hooks](#step-6-4---test-pre-commit-hooks)

## Step 6-1 - Install and Setup Husky

Install `husky` to use githooks as if they are npm scripts (instructions below came from [https://typicode.github.io/husky/#/?id=yarn-2](https://typicode.github.io/husky/#/?id=yarn-2)).

Install `husky` and enable git hooks.

```shell
yarn add husky
yarn husky install
```

To automatically have Git hooks enabled after a `yarn install`, edit the sripts section in the `package.json` file to include the following:

```json
{
  ...
   "scripts": {
     ...
     "postinstall": "husky install"
   }
}
```

## Step 6-2 - Install and Setup Lint Staged

Install `lint-staged` to run linter and prettier only on staged files.

```shell
yarn add lint-staged
```

Add the following configuration to the `package.json` file:

```json
{
  ...
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
      "yarn lint:check"
    ],
    "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "yarn prettier"
    ]
  },
  ...
}
```

## Step 6-3 - Setup Pre-Commit Hooks

Run the following commands to setup git pre-commit hooks

```shell
yarn husky add .husky/pre-commit "yarn lint-staged"
yarn husky add .husky/pre-commit "yarn test:nowatch"
```

## Step 6-4 - Test Pre-Commit Hooks

Temporarily add a `console.log('Hello')` to the `/src/index.tsx` file. Try to add and commit changes to git. The following warning should be displayed:

```shell
✖ yarn lint:check:
ESLint found too many warnings (maximum: 0).

/home/smaddox/software-projects/my-projects/haas-ui/src/app.tsx
  4:1  warning  Unexpected console statement  no-console

✖ 1 problem (0 errors, 1 warning)
```

Undo that change. Temporarily add the following to the `/src/app.test.ts`:

```javascript
...

test("Failing Test", () => {
  throw new Error("Failed");
});
```

Try to add and commit changes to git. The following warning should be displayed:

```shell
 FAIL  src/app.test.ts
  ✕ Failing Test (1 ms)
  ✎ todo write tests

  ● Failing Test

    Failed

      4 |
      5 | test("Failing Test", () => {
    > 6 |   throw new Error("Failed");
        |         ^
      7 | });
      8 |

      at Object.<anonymous> (src/app.test.ts:6:9)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 todo, 2 total
Snapshots:   0 total
Time:        0.967 s, estimated 1 s
Ran all test suites.
husky - pre-commit hook exited with code 1 (error)
```
