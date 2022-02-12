import { ThemePalette } from "./Palettes";
import { ThemeShadows } from "./Shadows";
import { ThemeTransitions } from "./Transitions";
import { ThemeTypography } from "./Typography";
import { ThemeZIndex } from "./ZIndex";

export enum ThemeName {
  lightTheme = "lightTheme",
  darkTheme = "darkTheme",
}

export enum ThemeMode {
  light,
  dark,
}

export interface ThemeOpts {
  borderRadius: number;
  palette: ThemePalette;
  shadows: ThemeShadows;
  transitions: ThemeTransitions;
  typography: ThemeTypography;
  zIndex: ThemeZIndex;
}

export class Theme {
  name: string;

  mode: ThemeMode;

  borderRadius: number;

  palette: ThemePalette;

  shadows: ThemeShadows;

  transitions: ThemeTransitions;

  typography: ThemeTypography;

  zIndex: ThemeZIndex;

  constructor(name: string, mode: ThemeMode, opts: ThemeOpts) {
    this.name = name;
    this.mode = mode;
    this.borderRadius = opts.borderRadius;
    this.palette = opts.palette;
    this.shadows = opts.shadows;
    this.transitions = opts.transitions;
    this.typography = opts.typography;
    this.zIndex = opts.zIndex;
  }
}
