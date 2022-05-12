# Step 8 - File Structure and Naming Conventions <!-- omit in toc -->

- [Step 8-1 - Understanding Project File Structure](#step-8-1---understanding-project-file-structure)
- [Step 8-2 - File Structure and Naming Conventions Notes](#step-8-2---file-structure-and-naming-conventions-notes)
- [Step 8-3 - Add Skeleton Code](#step-8-3---add-skeleton-code)

## Step 8-1 - Understanding Project File Structure

In the project add folders to match the following file structure:

```txt
📁src
================================================================================
| 📁API
| | 📁FirstAPI
| | | 📄FirstAPI.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Components
| | 📁FirstComponent
| | | 📁Assets
| | | | 📄icon.svg
| | | 📁Utils
| | | | 📄FirstUtil.ts
| | 📄FirstComponent.test.tsx
| | 📄FirstComponent.tsx
| | 📄FirstComponent.styled.ts
| | 📄index.ts
| | 📄Types.ts
================================================================================
| 📁Config
| | 📁FirstCategoryConfig
| | | 📄OneFirstCategoryConfig.ts
| | | 📄TwoFirstCategoryConfig.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Contexts
| | 📁FirstContext
| | | 📄firstContext.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Font
| | 📁FontName
| | | 📄FontNameRegular.ttf
| | | 📄FontNameItalic.ttf
| | | 📄FontNameBold.ttf
| | | 📄FontNameBoldItalic.ttf
| | 📄FontName.css
================================================================================
| 📁Hooks
| | 📁FirstHook
| | | 📁Utils
| | | | 📄FirstUtil.ts
| | | 📄FirstHook.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Layouts
| | 📁MainLayout
| | | 📄MainLayout.test.tsx
| | | 📄MainLayout.tsx
| | | 📄MainLayout.styled.ts
| | | 📄index.ts
| | | 📄Types.ts
================================================================================
| 📁Modules
| | 📁Layout
| | | 📁MainHeader
| | | | 📁Assets
| | | | | 📄pic.png
| | | | 📁Components
| | | | | ...
| | | | 📁Utils
| | | | | 📄FirstUtil.ts
| | | | 📄MainHeader.test.tsx
| | | | 📄MainHeader.tsx
| | | | 📄MainHeader.styled.ts
| | | | 📄index.ts
| | | | 📄Types.ts
================================================================================
| 📁Pages
| | 📁Common
| | | 📁HomePage
| | | | 📁Assets
| | | | | 📄pic.png
| | | | 📄HomePage.test.tsx
| | | | 📄HomePage.tsx
| | | | 📄HomePage.styled.ts
| | | | 📄index.ts
| | | | 📄Types.ts
================================================================================
| 📁SharedAssets
| | 📁GroupOne
| | | 📄pic.png
================================================================================
| 📁Types
| | 📁GroupOne
| | | 📁Classes
| | | | 📄FirstClassType.ts
| | | 📁Enums
| | | | 📄FirstEnumType.ts
| | | 📁Interfaces
| | | | 📄FirstInterfaceType.ts
================================================================================
| 📁Utils
| | 📁FirstUtil.ts
| | | 📄FirstUtil.ts
| | | 📄index.ts
| | | 📄Types.ts
| | 📄TimeConstants.ts
| 📄App.test.tsx
| 📄App.tsx
| 📄index.css
| 📄index.tsx
```

## Step 8-2 - File Structure and Naming Conventions Notes

- Folders & Files in `/src` should use `PascalCase` for file names except for the following:

  - `/src/**/index.ext`
  - `/src/react-app-env.d.ts`
  - `/src/reportWebVitals.ts`
  - `/src/setupTests.ts`

- Folders in `/public` should use `PascalCase`, and files should use `camelCase`.

- The main code for a folder should be in a file sharing the same name as the folder. There should also be an `index.ts` file inside of that folder that is used to import then export the main code. This is to avoid having multiple files opened in your editor all named `index.ts` while also avoiding imports that look like `./ComponentName/ComponentName`.

- The top level `Components` folder should be for generic, used anywhere components (Like`HamburgerButton`, `SideNav`, `Input`). `Components` can have other `Components` as children.

- The top level `Modules` are really big (epic or feature level) components made up of smaller components. `Modules` can have other `Modules` and `Components` as children. The hope is that individual `Modules` should not be aware of other sibling `Modules`. This is why `API`, `Contexts`, and `Hooks` are not sub folders of individual modules. It's possible that `API`, `Contexts`, and `Hooks` might need to be shared across modules, and this is how they would handle the communication across sibling `Modules`.

- Types should be defined in the `/src/Types` directory. Exception, Styled Component Types can be saved in the same file as the styles are.

## Step 8-3 - Add Skeleton Code

- Copy the sample code found in `./Reference` into the projects `./src` directory.
