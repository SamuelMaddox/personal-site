import { ThemePalette } from "./ThemePalette";
import { ThemeShadows } from "./ThemeShadows";
import { ThemeTransitions } from "./ThemeTransitions";
import { ThemeTypography } from "./ThemeTypography";
import { ThemeZIndex } from "./ThemeZIndex";

export interface ThemeOpts {
  borderRadius: number;
  palette: ThemePalette;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  typography: ThemeTypography;
  zIndex: ThemeZIndex;
}
