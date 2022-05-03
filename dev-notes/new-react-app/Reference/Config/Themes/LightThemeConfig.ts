import { Theme } from "../../Types/Config/Themes/Classes/Theme";
import { ThemeMode } from "../../Types/Config/Themes/Enums/ThemeMode";
import { ThemeName } from "../../Types/Config/Themes/Enums/ThemeName";
import { lightPalette } from "./Palettes/LightPalette";
import { blackShadows } from "./Shadows/BlackShadows";
import { defaultTransitions } from "./Transitions/DefaultTransitions";
import { defaultTypography } from "./Typography/DefaultTypography";
import { defaultZIndex } from "./ZIndex/DefaultZIndex";

export const lightThemeConfig = new Theme(
  ThemeName.lightTheme,
  ThemeMode.light,
  {
    borderRadius: 4,
    palette: lightPalette,
    shadows: blackShadows,
    transitions: defaultTransitions,
    typography: defaultTypography,
    zIndex: defaultZIndex,
  }
);
