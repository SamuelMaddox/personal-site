export interface ThemeTypographyGroup {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface ThemeTypography {
  htmlFontSize: string;
  primaryFontFamily: string;
  secondaryFontFamily: string;
  monoFontFamily: string;
  h1: ThemeTypographyGroup;
  h2: ThemeTypographyGroup;
  h3: ThemeTypographyGroup;
  h4: ThemeTypographyGroup;
  h5: ThemeTypographyGroup;
  h6: ThemeTypographyGroup;
  body: ThemeTypographyGroup;
  p: ThemeTypographyGroup;
  button: ThemeTypographyGroup;
  caption: ThemeTypographyGroup;
  pre: ThemeTypographyGroup;
  code: ThemeTypographyGroup;
  samp: ThemeTypographyGroup;
}
