import { Theme } from "../../Types/Config/Themes/Classes/Theme";
import { ThemeMode } from "../../Types/Config/Themes/Enums/ThemeMode";
import { ThemeName } from "../../Types/Config/Themes/Enums/ThemeName";
import { darkPalette } from "./Palettes/DarkPalette";
import { whiteShadows } from "./Shadows/WhiteShadows";
import { defaultTransitions } from "./Transitions/DefaultTransitions";
import { defaultTypography } from "./Typography/DefaultTypography";
import { defaultZIndex } from "./ZIndex/DefaultZIndex";

export const darkThemeConfig = new Theme(ThemeName.darkTheme, ThemeMode.dark, {
  borderRadius: 4,
  palette: darkPalette,
  shadows: whiteShadows,
  transitions: defaultTransitions,
  typography: defaultTypography,
  zIndex: defaultZIndex,
});
