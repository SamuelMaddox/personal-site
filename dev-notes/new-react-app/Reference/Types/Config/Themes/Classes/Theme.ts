import { ThemeMode } from "../Enums/ThemeMode";
import { ThemeOpts } from "../Interfaces/ThemeOpts";
import { ThemePalette } from "../Interfaces/ThemePalette";
import { ThemeShadows } from "../Interfaces/ThemeShadows";
import { ThemeTransitions } from "../Interfaces/ThemeTransitions";
import { ThemeTypography } from "../Interfaces/ThemeTypography";
import { ThemeZIndex } from "../Interfaces/ThemeZIndex";

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
