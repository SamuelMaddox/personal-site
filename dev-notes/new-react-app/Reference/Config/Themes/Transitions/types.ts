export interface ThemeTransitionsEasing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}

export interface ThemeTransitionsDuration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}

export interface ThemeTransitions {
  easing: ThemeTransitionsEasing;
  duration: ThemeTransitionsDuration;
}
