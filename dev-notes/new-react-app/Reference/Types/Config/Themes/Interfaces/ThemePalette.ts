import { ThemePaletteColor } from "./ThemePaletteColor";
import { ThemePaletteGray } from "./ThemePaletteGray";
import { ThemePaletteText } from "./ThemePaletteText";

export interface ThemePalette {
  background: ThemePaletteColor;
  primary: ThemePaletteColor;
  secondary: ThemePaletteColor;
  error: ThemePaletteColor;
  warning: ThemePaletteColor;
  info: ThemePaletteColor;
  success: ThemePaletteColor;
  disabled: ThemePaletteColor;
  text: ThemePaletteText;
  gray: ThemePaletteGray;
}
