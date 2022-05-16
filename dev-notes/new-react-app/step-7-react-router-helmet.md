# Step 7 - React Router & React Helmet <!-- omit in toc -->

- [Step 7-1 - Install React Router](#step-7-1---install-react-router)
- [Step 7-2 - Install React Helmet Async](#step-7-2---install-react-helmet-async)

## Step 7-1 - Install React Router

React Router is a collection of navigational components that compose declaratively with your application. To install react router run the following command:

If using TypeScript:

```shell
yarn add react-router-dom @types/react-router-dom
```

If NOT using TypeScript:

```shell
yarn add react-router-dom
```

## Step 7-2 - Install React Helmet Async

React Helmet Async is a reusable React component that will manage all of your changes to the document head.

To install react helmet async run the following command:

```shell
yarn add react-helmet-async
```

Then open `./src/App.tsx` and wrap your app with the `<HelmetProvider>` Component

```javascript
import { HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>{/* Your Application Component Here */}</HelmetProvider>
  );
}
```
