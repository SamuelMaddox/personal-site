import { darkToLight } from "./Gray";
import { ThemePalette } from "./Types";

const darkPalette: ThemePalette = {
  background: {
    main: "#121212",
    alt1: "#212121",
    alt2: "#424242",
  },
  primary: {
    main: "#90caf9",
    alt1: "#e3f2fd",
    alt2: "#42a5f5",
    contrastText: "#121212",
  },
  secondary: {
    main: "#ce93d8",
    alt1: "#f3e5f5",
    alt2: "#ab47bc",
    contrastText: "#121212",
  },
  error: {
    main: "#f44336",
    alt1: "#e57373",
    alt2: "#d32f2f",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#ffa726",
    alt1: "#ffb74d",
    alt2: "#f57c00",
    contrastText: "#121212",
  },
  info: {
    main: "#29b6f6",
    alt1: "#4fc3f7",
    alt2: "#0288d1",
    contrastText: "#121212",
  },
  success: {
    main: "#66bb6a",
    alt1: "#81c784",
    alt2: "#388e3c",
    contrastText: "#121212",
  },
  disabled: {
    main: "424242",
    alt1: "212121",
    alt2: "616161",
    contrastText: "757575",
  },
  text: {
    primary: "#f5f5f5",
    secondary: "#eeeeee",
  },
  gray: darkToLight,
};

export default darkPalette;
