# Step 3 - Clean Up Code

> The following is a list of what to clean up & delete as of v5.0.1 of create-react-app
>
> NOTE: As of React 17 the new JSX transform will automatically import the necessary react/jsx-runtime functions, React will no longer need to be in scope when you use JSX. This is why we remove `import React from 'react'`

- In `/public/index.html` remove comments.
- Delete `/src/App.css`.
- In `/src/App.jsx` remove all code and replace with the following:

  If using TypeScript:

  ```javascript
  import { ReactElement } from "react";

  export function App(): ReactElement {
    return <h1>Hello World!</h1>;
  }
  ```

  If NOT using TypeScript:

  ```javascript
  export function App() {
    return <h1>Hello World!</h1>;
  }
  ```

- In `/src/App.test.jsx` remove all code and replace with the following:

  ```javascript
  import { render } from "@testing-library/react";
  import { App } from "./App";

  describe("=== App ===", () => {
    it("Should render without crashing", () => {
      render(<App />);
    });
  });
  ```

- In `/src/index.css` remove all styles and add the comment `/* Save File For Later Use */`.

- In `/src/index.jsx` remove all code and replace with the following:

  ```javascript
  import React from "react";
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import { App } from "./App";
  import { reportWebVitals } from "./reportWebVitals";

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();
  ```

- Delete `/src/logo.svg`.

- In `reportWebVitals.ts`

  - Remove the default export and instead make reportWebVitals a named export `export const reportWebVitals = ...`
  - If using TypeScript, add a return type of `void` to the `reportWebVitals()` arrow function

- In `/package.json` update the scripts section to include the following:

  ```json
  {
    ...
    "scripts": {
      ...
      "test:coverage": "react-scripts test --coverage",
      "test:verbose": "react-scripts test --verbose",
      "test:nowatch": "react-scripts test --watchAll=false",
    }
  }
  ```
