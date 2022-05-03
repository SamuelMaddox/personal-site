// NOTE: The Roboto Font Families are in the '/src/Fonts/roboto-fonts.css' file

import { ThemeTypography } from "../../../Types/Config/Themes/Interfaces/ThemeTypography";

// and are imported into the '/src/index.css'
const PRIMARY_FONT_FAMILY = "'Roboto', sans-serif";
const SECONDARY_FONT_FAMILY = "'Roboto Slab', serif";
const MONO_FONT_FAMILY = "'Roboto Mono', monospace";

export const defaultTypography: ThemeTypography = {
  primaryFontFamily: PRIMARY_FONT_FAMILY,
  secondaryFontFamily: SECONDARY_FONT_FAMILY,
  monoFontFamily: MONO_FONT_FAMILY,
  htmlFontSize: "16px",
  h1: {
    fontFamily: SECONDARY_FONT_FAMILY,
    fontWeight: "600",
    fontSize: "6rem",
    lineHeight: "1.2",
    letterSpacing: "normal",
  },
  h2: {
    fontFamily: SECONDARY_FONT_FAMILY,
    fontWeight: "600",
    fontSize: "3.75rem",
    lineHeight: "1.3",
    letterSpacing: "normal",
  },
  h3: {
    fontFamily: SECONDARY_FONT_FAMILY,
    fontWeight: "600",
    fontSize: "3rem",
    lineHeight: "1.3",
    letterSpacing: "normal",
  },
  h4: {
    fontFamily: SECONDARY_FONT_FAMILY,
    fontWeight: "600",
    fontSize: "2.125rem",
    lineHeight: "1.3",
    letterSpacing: "normal",
  },
  h5: {
    fontFamily: SECONDARY_FONT_FAMILY,
    fontWeight: "600",
    fontSize: "1.5rem",
    lineHeight: "1.4",
    letterSpacing: "normal",
  },
  h6: {
    fontFamily: SECONDARY_FONT_FAMILY,
    fontWeight: "600",
    fontSize: "1.25rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  body: {
    fontFamily: PRIMARY_FONT_FAMILY,
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  p: {
    fontFamily: PRIMARY_FONT_FAMILY,
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  button: {
    fontFamily: PRIMARY_FONT_FAMILY,
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  caption: {
    fontFamily: PRIMARY_FONT_FAMILY,
    fontWeight: "400",
    fontSize: "0.75rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  pre: {
    fontFamily: MONO_FONT_FAMILY,
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  code: {
    fontFamily: MONO_FONT_FAMILY,
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  samp: {
    fontFamily: MONO_FONT_FAMILY,
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
};
