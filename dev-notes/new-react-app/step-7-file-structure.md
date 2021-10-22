# Step 7 - File Structure and Naming Conventions <!-- omit in toc -->

- [Example File Structure](#example-file-structure)
- [File Structure and Naming Conventions Notes](#file-structure-and-naming-conventions-notes)

## Example File Structure

```txt
📁src
|   📁API
|   |   📁Common
|   |   |   📄firstCommonAPI.ts
|   |   |   📄index.ts
|   |   📁Auth
|   |   |   📄authAPI.ts
|   |   |   📄index.ts
|   |   📄index.ts
|   📁Components
|   |   📁FirstComponent
|   |   |   📄index.ts
|   |   |   📄FirstComponent.tsx
|   |   |   📄FirstComponent.module.css
|   |   📄index.ts
|   📁Config
|   |   📄index.ts
|   |   📄firstConfig.ts
|   📁Contexts
|   |   📁Common
|   |   |   📄firstCommonContext.ts
|   |   |   📄index.ts
|   |   📁Auth
|   |   |   📄authContext.ts
|   |   |   📄index.ts
|   |   📄index.ts
|   📁Hooks
|   |   📁Common
|   |   |   📄firstCommonHook.ts
|   |   |   📄index.ts
|   |   📁Auth
|   |   |   📄authOneHook.ts
|   |   |   📄index.ts
|   |   📄index.ts
|   📁Modules
|   |   📁Common
|   |   |   📁MainHeader
|   |   |   |   📁MainNavComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄MainNavComponent.tsx
|   |   |   |   |   📄MainNavComponent.module.css
|   |   |   |   📄index.ts
|   |   |   |   📄MainHeaderModule.tsx
|   |   |   |   📄MainHeaderModule.module.css
|   |   |   📄index.ts
|   |   📁Auth
|   |   |   📁LoginForm
|   |   |   |   📁FirstComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstComponent.tsx
|   |   |   |   |   📄FirstComponent.module.css
|   |   |   |   📄index.ts
|   |   |   |   📄LoginModule.tsx
|   |   |   |   📄LoginModule.module.css
|   |   |   📁CreateAccountForm
|   |   |   |   📁FirstComponent
|   |   |   |   |   📄index.ts
|   |   |   |   |   📄FirstComponent.tsx
|   |   |   |   |   📄FirstComponent.module.css
|   |   |   |   📄index.ts
|   |   |   |   📄CreateAccountModule.tsx
|   |   |   |   📄CreateAccountModule.module.css
|   |   |   📄index.ts
|   |   📄index.ts
|   📁Pages
|   |   📁Common
|   |   |   📁ForbiddenPage
|   |   |   |   📄index.ts
|   |   |   |   📄ForbiddenPage.tsx
|   |   |   |   📄ForbiddenPage.module.css
|   |   |   📁NotFoundPage
|   |   |   |   📄index.ts
|   |   |   |   📄NotFoundPage.tsx
|   |   |   |   📄NOtFoundPage.module.css
|   |   |   📄index.ts
|   |   📁FirstGroup
|   |   |   📁FirstPage
|   |   |   |   📄index.ts
|   |   |   |   📄FirstPage.tsx
|   |   |   |   📄FirstPage.module.css
|   |   |   📄FirstGroupSwitch.tsx
|   |   |   📄index.ts
|   |   📄MainSwitch.tsx
|   |   📄index.ts
|   📁Utils
|   |   📄index.ts
|   📄App.css
|   📄App.tsx
|   📄index.css
|   📄index.tsx
```

## File Structure and Naming Conventions Notes

- Only folders and component/module files should use `PascalCase`. All other file names should be `camelCase`.

- The `index.ts` file inside of component folders is used to import then export the component from the `Component.tsx` file. This is to avoid having multiple files opened in your editor all named `index.tsx`.

- Modules are really big components made up of smaller components. The hope is that individual `Modules` should not be aware of other sibling `Modules` (though `Modules` can have other `Modules` as children). This is why `API`, `Contexts`, and `Hooks` are not sub folders of individual modules. It's possible that `API`, `Contexts`, and `Hooks` might need to be shared across modules, and this is how they woud handle the communcation across sibling `Modules`.

- The top level `Components` folder should be bare bones, used anywhere components. `HamburgerButton`, `SideNav` that takes a list of links, `Input`. `Modules` can contain sub components that can build upon these simple components.

- Files belonging to the following category types (`API`, `Config`, `Context`, `Page`) should have their file name end with that category type. `Component` and `Hook` files should **NOT** follow this convention. `Module` files can go either way. Examples
  - `authAPI.ts`
  - `authConfig.ts`
  - `authContext.tsx`
  - `loginPage.tsx`
