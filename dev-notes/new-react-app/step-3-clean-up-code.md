# Step 3 - Clean Up Code

> The following is a list of what to clean up & delete as of v4.0.3 of create-react-app
>
> NOTE: As of React 17 the new JSX transform will automatically import the necessary react/jsx-runtime functions, React will no longer need to be in scope when you use JSX. This is why we remove `import React from 'react'`

- In `/public/index.html` remove comments.
- In `/src/App.css` remove all styles and add the comment `/* Save For Later Use */`.
- In `/src/App.js`

  - Rename file to `App.jsx` or `App.tsx`.
  - Remove all code and replace with the following:

    If using TypeScript:

    ```javascript
    import { ReactElement } from "react";
    import "./App.css";

    function App(): ReactElement {
      return <h1>Hello World!</h1>;
    }

    export default App;
    ```

    If NOT using TypeScript:

    ```javascript
    import "./App.css";

    function App() {
      return <h1>Hello World!</h1>;
    }

    export default App;
    ```

  - If TypeScript is being used, add the `ReactElement` return type to the function component
  - Remove jsx in the return statement and replace with `<></>`.

- In `/src/App.test.js`

  - Remove all code and replace with the following:

    ```javascript
    import {} from "@testing-library/react";

    test.todo("write tests");
    ```

- In `/src/index.css` remove all styles and add the comment `/* Save For Later Use */`.
- In `/src/index.js`
  - Rename file to `index.jsx` or `index.tsx`.
  - Remove comments related to `reportWebVitals();`.
- Delete `/src/logo.svg`.
- In `reportWebVitals.ts` add a return type of `void` to the `reportWebVitals()` arrow function
- In `/package.json`

  - Update the scripts section to include the following:

    ```json
    {
      ...
      "scripts": {
        ...
        "test:nowatch": "react-scripts test --watchAll=false",
      }
    }
    ```
