import { lightToDark } from "./Gray";
import { ThemePalette } from "./types";

const lightPalette: ThemePalette = {
  background: {
    main: "#ffffff",
    alt1: "#eeeeee",
    alt2: "#e0e0e0",
  },
  primary: {
    main: "#1976d2",
    alt1: "#42a5f5",
    alt2: "#1565c0",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#9c27b0",
    alt1: "#ba68c8",
    alt2: "#7b1fa2",
    contrastText: "#ffffff",
  },
  error: {
    main: "#d32f2f",
    alt1: "#ef5350",
    alt2: "#c62828",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ed6c02",
    alt1: "#ff9800",
    alt2: "#e65100",
    contrastText: "#ffffff",
  },
  info: {
    main: "#0288d1",
    alt1: "#03a9f4",
    alt2: "#01579b",
    contrastText: "#ffffff",
  },
  success: {
    main: "#2e7d32",
    alt1: "#4caf50",
    alt2: "#1b5e20",
    contrastText: "#ffffff",
  },
  disabled: {
    main: "#e0e0e0",
    alt1: "#eeeeee",
    alt2: "#bdbdbd",
    contrastText: "#9e9e9e",
  },
  text: {
    primary: "#212121",
    secondary: "#424242",
  },
  gray: lightToDark,
};

export default lightPalette;
