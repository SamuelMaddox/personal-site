import { darkThemeConfig, lightThemeConfig } from "./Themes";

export default {
  themes: [lightThemeConfig, darkThemeConfig],
};

export type {
  Theme,
  ThemeName,
  ThemeMode,
  ThemeOpts,
  ThemePalette,
  ThemePaletteColor,
  ThemePaletteText,
  ThemePaletteGray,
  ThemeShadows,
  ThemeTransitions,
  ThemeTransitionsEasing,
  ThemeTransitionsDuration,
  ThemeTypography,
  ThemeTypographyGroup,
  ThemeZIndex,
} from "./Themes";
