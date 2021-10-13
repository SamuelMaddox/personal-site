# Step 7 - File Structure

NOTE: `index.ts` inside of component folders is used to import then export the component from the named `Component.tsx` file. This is to avoid `index.tsx` hell when editing multiple components in an editor.

```txt
+---src
|   +---Components
|   |   +---ComponentOne
|   |   |   index.ts
|   |   |   ComponentOne.tsx
|   |   |   ComponentOne.module.css
|   |   index.ts
|   +---Modules
|   |   +---ModuleOne
|   |   |   +---ComponentOne
|   |   |   |   index.ts
|   |   |   |   ComponentOne.tsx
|   |   |   |   ComponentOne.module.css
|   |   |   index.ts
|   |   |   ModuleOne.tsx
|   |   |   ModuleOne.module.css
|   |   index.ts
|   +---Pages
|   |   +---Common
|   |   |   +---PageForbidden
|   |   |   |   index.ts
|   |   |   |   PageForbidden.tsx
|   |   |   |   PageForbidden.module.css
|   |   |   +---PageNotFound
|   |   |   |   index.ts
|   |   |   |   PageNotFound.tsx
|   |   |   |   PageNOtFound.module.css
|   |   |   CommonSwitch.tsx
|   |   |   index.ts
|   |   +---GroupOne
|   |   |   +---PageOne
|   |   |   |   index.ts
|   |   |   |   PageOne.tsx
|   |   |   |   PageOne.module.css
|   |   |   GroupOneSwitch.tsx
|   |   |   index.ts
|   |   MainSwitch.tsx
|   |   index.ts
|   app.css
|   app.tsx
|   index.css
|   index.tsx
```
