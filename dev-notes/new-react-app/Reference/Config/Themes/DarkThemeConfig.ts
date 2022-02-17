import { Theme, ThemeMode, ThemeName } from "./types";
import { darkPalette } from "./Palettes";
import { whiteShadows } from "./Shadows";
import { defaultTransitions } from "./Transitions";
import { defaultTypography } from "./Typography";
import { defaultZIndex } from "./ZIndex";

export default new Theme(ThemeName.darkTheme, ThemeMode.dark, {
  borderRadius: 4,
  palette: darkPalette,
  shadows: whiteShadows,
  transitions: defaultTransitions,
  typography: defaultTypography,
  zIndex: defaultZIndex,
});
