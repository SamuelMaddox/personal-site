import { ThemePaletteGray } from "./Gray";

export interface ThemePaletteColor {
  main: string;
  alt1: string;
  alt2: string;
  contrastText?: string;
}

export interface ThemePaletteText {
  primary: string;
  secondary: string;
}

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
