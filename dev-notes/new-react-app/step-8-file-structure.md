# Step 8 - File Structure and Naming Conventions <!-- omit in toc -->

- [Step 8-1 - Understanding Project File Structure](#step-8-1---understanding-project-file-structure)
- [Step 8-2 - File Structure and Naming Conventions Notes](#step-8-2---file-structure-and-naming-conventions-notes)
- [Step 8-3 - Add Skeleton Code](#step-8-3---add-skeleton-code)

## Step 8-1 - Understanding Project File Structure

In the project add folders to match the following file structure:

```txt
📁src
|   📁API
|   |   📁Common
|   |   |   📄FirstCommonAPI.test.ts
|   |   |   📄FirstCommonAPI.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📁Auth
|   |   |   📄AuthAPI.test.ts
|   |   |   📄AuthAPI.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📄index.ts
|   |   📄Types.ts
|   📁Components
|   |   📁FirstComponent
|   |   |   📄index.ts
|   |   |   📄FirstComponent.test.tsx
|   |   |   📄FirstComponent.tsx
|   |   |   📄FirstComponent.module.css
|   |   |   📄Types.ts
|   |   📄index.ts
|   |   📄Types.ts
|   📁Config
|   |   📁FirstCategoryConfig
|   |   |   📄index.ts
|   |   |   📄OneFirstCategoryConfig.ts
|   |   |   📄TwoFirstCategoryConfig.ts
|   |   |   📄Types.ts
|   |   📄index.ts
|   |   📄LocalConfig.ts
|   |   📄DevelopConfig.ts
|   |   📄TestConfig.ts
|   |   📄ProdConfig.ts
|   |   📄Types.ts
|   📁Contexts
|   |   📁Common
|   |   |   📄firstCommonContext.test.ts
|   |   |   📄firstCommonContext.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📁Auth
|   |   |   📄AuthContext.test.ts
|   |   |   📄AuthContext.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📄index.ts
|   |   📄Types.ts
|   📁Font
|   |   📁FontName
|   |   |   📄FontName-Regular.ttf
|   |   |   📄FontName-Italic.ttf
|   |   |   📄FontName-Bold.ttf
|   |   |   📄FontName-BoldItalic.ttf
|   |   📄FontName.css
|   📁Hooks
|   |   📁Common
|   |   |   📄FirstCommonHook.test.ts
|   |   |   📄FirstCommonHook.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📁Auth
|   |   |   📄AuthOneHook.test.ts
|   |   |   📄AuthOneHook.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📄index.ts
|   |   📄Types.ts
|   📁Modules
|   |   📁Common
|   |   |   📁MainHeader
|   |   |   |   📁MainNavComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄MainNavComponent.test.tsx
|   |   |   |   |   📄MainNavComponent.tsx
|   |   |   |   |   📄MainNavComponent.module.css
|   |   |   |   |   📄Types.ts
|   |   |   |   📄index.ts
|   |   |   |   📄MainHeaderModule.test.tsx
|   |   |   |   📄MainHeaderModule.tsx
|   |   |   |   📄MainHeaderModule.module.css
|   |   |   |   📄Types.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📁Auth
|   |   |   📁LoginForm
|   |   |   |   📁FirstComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstComponent.test.tsx
|   |   |   |   |   📄FirstComponent.tsx
|   |   |   |   |   📄FirstComponent.module.css
|   |   |   |   |   📄Types.ts
|   |   |   |   📄index.ts
|   |   |   |   📄LoginModule.test.tsx
|   |   |   |   📄LoginModule.tsx
|   |   |   |   📄LoginModule.module.css
|   |   |   |   📄Types.ts
|   |   |   📁CreateAccountForm
|   |   |   |   📁FirstComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstComponent.test.tsx
|   |   |   |   |   📄FirstComponent.tsx
|   |   |   |   |   📄FirstComponent.module.css
|   |   |   |   |   📄Types.ts
|   |   |   |   📄index.ts
|   |   |   |   📄CreateAccountModule.test.tsx
|   |   |   |   📄CreateAccountModule.tsx
|   |   |   |   📄CreateAccountModule.module.css
|   |   |   |   📄Types.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📄index.ts
|   |   📄Types.ts
|   📁Pages
|   |   📁Common
|   |   |   📁ForbiddenPage
|   |   |   |   📄index.ts
|   |   |   |   📄ForbiddenPage.test.tsx
|   |   |   |   📄ForbiddenPage.tsx
|   |   |   |   📄ForbiddenPage.module.css
|   |   |   |   📄Types.ts
|   |   |   📁NotFoundPage
|   |   |   |   📄index.ts
|   |   |   |   📄NotFoundPage.test.tsx
|   |   |   |   📄NotFoundPage.tsx
|   |   |   |   📄NotFoundPage.module.css
|   |   |   |   📄Types.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📁FirstGroup
|   |   |   📁FirstPage
|   |   |   |   📄index.ts
|   |   |   |   📄FirstPage.test.tsx
|   |   |   |   📄FirstPage.tsx
|   |   |   |   📄FirstPage.module.css
|   |   |   |   📄Types.ts
|   |   |   📄index.ts
|   |   |   📄Types.ts
|   |   📄MainLayout.test.tsx
|   |   📄MainLayout.tsx
|   |   📄index.ts
|   |   📄Types.ts
|   📁GlobalTypes
|   |   📁GroupOne
|   |   |   📁Classes
|   |   |   |   📁FirstClassType
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstType.test.ts
|   |   |   |   |   📄FirstClassType.ts
|   |   |   📁Interfaces
|   |   |   |   📁FirstInterfaceType
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstInterfaceType.ts
|   |   |   📄index.ts
|   |   📄index.ts
|   📁Utils
|   |   📁FirstUtil
|   |   |   📄index.ts
|   |   |   📄firstUtil.test.ts
|   |   |   📄firstUtil.ts
|   |   📄index.ts
|   |   📄timeConstants.ts
|   |   📄Types.ts
|   📄App.css
|   📄App.test.tsx
|   📄App.tsx
|   📄index.css
|   📄index.tsx
```

## Step 8-2 - File Structure and Naming Conventions Notes

- Folders Files in `/src` should use `PascalCase` for file names except for the following:

  - `/src/**/index.ext`
  - `/src/react-app-env.d.ts`
  - `/src/reportWebVitals.ts`
  - `/src/setupTests.ts`

- Folders in `/public` should use `PascalCase`.

- Files in `/public` should use `camelCase`.

- The `index.ts` file inside of component folders is used to import then export the component from the `Component.tsx` file. This is to avoid having multiple files opened in your editor all named `index.tsx`.

- Modules are really big components made up of smaller components. The hope is that individual `Modules` should not be aware of other sibling `Modules` (though `Modules` can have other `Modules` as children). This is why `API`, `Contexts`, and `Hooks` are not sub folders of individual modules. It's possible that `API`, `Contexts`, and `Hooks` might need to be shared across modules, and this is how they woud handle the communcation across sibling `Modules`.

- The top level `Components` folder should be for bare bones, used anywhere components (LIke`HamburgerButton`, `SideNav`, `Input`). `Modules` can contain sub components that can build upon these simple components.

- Files belonging to the following category types (`API`, `Config`, `Context`, `Page`) should have their file name end with that category type. `Component` and `Hook` files should **NOT** follow this convention. `Module` files can go either way. Examples:

  - `AuthAPI.ts`
  - `AuthConfig.ts`
  - `AuthContext.tsx`
  - `LoginPage.tsx`

- Types can be stored in a `Types.ts` file or in a `Types` folder with an `index.ts` file depending on complexity. `Types` folders should grow to resemble the organization of the `/src/GlobalTypes` folder as more types in are defined. These files and folders should defined be defined in the location they are used. If they are used in multiple places they should be defined according to the preference order listed below and then exported (see the `./Reference/Config` directory for an example). If it feels like a type has a global scope then it can be defined in the `/src/GlobalTypes` directory.

  1. 📁API
  2. 📁Config
  3. 📁Context
  4. 📁Hooks
  5. 📁Modules
  6. 📁Components
  7. 📁Pages
  8. 📁Types

## Step 8-3 - Add Skeleton Code

- Copy the `./Reference/Pages` directory and paste it into the project as `./src/Pages`.

- Copy the `./Reference/Modules` directory and paste it into the project as `./src/Modules`.

- Copy the `./Reference/App.tsx` file and paste it into the project as `./src/App.tsx`.

- Copy the `./Reference/App.test.tsx` file and paste it into the project as `./src/App.test.tsx`.
