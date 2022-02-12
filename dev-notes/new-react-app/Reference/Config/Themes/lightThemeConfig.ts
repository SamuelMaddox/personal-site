import { Theme, ThemeMode, ThemeName } from "./types";
import { lightPalette } from "./Palettes";
import { blackShadows } from "./Shadows";
import { defaultTransitions } from "./Transitions";
import { defaultTypography } from "./Typography";
import { defaultZIndex } from "./ZIndex";

export default new Theme(ThemeName.lightTheme, ThemeMode.light, {
  borderRadius: 4,
  palette: lightPalette,
  shadows: blackShadows,
  transitions: defaultTransitions,
  typography: defaultTypography,
  zIndex: defaultZIndex,
});
