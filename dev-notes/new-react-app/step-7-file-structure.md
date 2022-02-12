# Step 7 - File Structure and Naming Conventions <!-- omit in toc -->

- [Example File Structure](#example-file-structure)
- [File Structure and Naming Conventions Notes](#file-structure-and-naming-conventions-notes)

## Example File Structure

In the project add folders to match the following file structure:

```txt
📁src
|   📁API
|   |   📁Common
|   |   |   📄firstCommonAPI.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📁Auth
|   |   |   📄authAPI.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📄index.ts
|   |   📄types.ts
|   📁Components
|   |   📁FirstComponent
|   |   |   📄index.ts
|   |   |   📄FirstComponent.tsx
|   |   |   📄FirstComponent.module.css
|   |   |   📄types.ts
|   |   📄index.ts
|   |   📄types.ts
|   📁Config
|   |   📁FirstCategoryConfig
|   |   |   📄index.ts
|   |   |   📄oneFirstCategoryConfig.ts
|   |   |   📄twoFirstCategoryConfig.ts
|   |   |   📄types.ts
|   |   📄index.ts
|   |   📄localConfig.ts
|   |   📄developConfig.ts
|   |   📄testConfig.ts
|   |   📄prodConfig.ts
|   |   📄types.ts
|   📁Font
|   |   📁FontName
|   |   |   📄Fontname-Regular.ttf
|   |   |   📄Fontname-Italic.ttf
|   |   |   📄Fontname-Bold.ttf
|   |   |   📄Fontname-BoldItalic.ttf
|   |   📄fontname-fonts.css
|   📁Contexts
|   |   📁Common
|   |   |   📄firstCommonContext.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📁Auth
|   |   |   📄authContext.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📄index.ts
|   |   📄types.ts
|   📁Hooks
|   |   📁Common
|   |   |   📄firstCommonHook.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📁Auth
|   |   |   📄authOneHook.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📄index.ts
|   |   📄types.ts
|   📁Modules
|   |   📁Common
|   |   |   📁MainHeader
|   |   |   |   📁MainNavComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄MainNavComponent.tsx
|   |   |   |   |   📄MainNavComponent.module.css
|   |   |   |   |   📄types.ts
|   |   |   |   📄index.ts
|   |   |   |   📄MainHeaderModule.tsx
|   |   |   |   📄MainHeaderModule.module.css
|   |   |   |   📄types.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📁Auth
|   |   |   📁LoginForm
|   |   |   |   📁FirstComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstComponent.tsx
|   |   |   |   |   📄FirstComponent.module.css
|   |   |   |   |   📄types.ts
|   |   |   |   📄index.ts
|   |   |   |   📄LoginModule.tsx
|   |   |   |   📄LoginModule.module.css
|   |   |   |   📄types.ts
|   |   |   📁CreateAccountForm
|   |   |   |   📁FirstComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstComponent.tsx
|   |   |   |   |   📄FirstComponent.module.css
|   |   |   |   |   📄types.ts
|   |   |   |   📄index.ts
|   |   |   |   📄CreateAccountModule.tsx
|   |   |   |   📄CreateAccountModule.module.css
|   |   |   |   📄types.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📄index.ts
|   |   📄types.ts
|   📁Pages
|   |   📁Common
|   |   |   📁ForbiddenPage
|   |   |   |   📄index.ts
|   |   |   |   📄ForbiddenPage.tsx
|   |   |   |   📄ForbiddenPage.module.css
|   |   |   |   📄types.ts
|   |   |   📁NotFoundPage
|   |   |   |   📄index.ts
|   |   |   |   📄NotFoundPage.tsx
|   |   |   |   📄NOtFoundPage.module.css
|   |   |   |   📄types.ts
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📁FirstGroup
|   |   |   📁FirstPage
|   |   |   |   📄index.ts
|   |   |   |   📄FirstPage.tsx
|   |   |   |   📄FirstPage.module.css
|   |   |   |   📄types.ts
|   |   |   📄FirstGroupSwitch.tsx
|   |   |   📄index.ts
|   |   |   📄types.ts
|   |   📄MainSwitch.tsx
|   |   📄index.ts
|   |   📄types.ts
|   📁Types
|   |   📄index.ts
|   |   📄oneSharedType.ts
|   |   📄twoSharedType.ts
|   |   📄threeSharedType.ts
|   📁Utils
|   |   📄index.ts
|   |   📄timeConstants.ts
|   |   📄types.ts
|   📄App.css
|   📄App.tsx
|   📄index.css
|   📄index.tsx
```

## File Structure and Naming Conventions Notes

- Only folders and component/module files should use `PascalCase`. All other file names should be `camelCase`.

- The `index.ts` file inside of component folders is used to import then export the component from the `Component.tsx` file. This is to avoid having multiple files opened in your editor all named `index.tsx`.

- Modules are really big components made up of smaller components. The hope is that individual `Modules` should not be aware of other sibling `Modules` (though `Modules` can have other `Modules` as children). This is why `API`, `Contexts`, and `Hooks` are not sub folders of individual modules. It's possible that `API`, `Contexts`, and `Hooks` might need to be shared across modules, and this is how they woud handle the communcation across sibling `Modules`.

- The top level `Components` folder should be for bare bones, used anywhere components (LIke`HamburgerButton`, `SideNav`, `Input`). `Modules` can contain sub components that can build upon these simple components.

- Files belonging to the following category types (`API`, `Config`, `Context`, `Page`) should have their file name end with that category type. `Component` and `Hook` files should **NOT** follow this convention. `Module` files can go either way. Examples:

  - `authAPI.ts`
  - `authConfig.ts`
  - `authContext.tsx`
  - `loginPage.tsx`

- A `types.ts` files should be created to store interfaces, classes, enums, etc... Types should defined be defined in the location they are used. If they are used in multiple places they should be defined according to the preference order listed below and then exported (see the `./Reference/Config` directory for an example). If it feels like a type has a global scope then it can be defined in the `/src/Types` directory.

  1. 📁API
  2. 📁Config
  3. 📁Context
  4. 📁Hooks
  5. 📁Modules
  6. 📁Components
  7. 📁Pages
  8. 📁Types
