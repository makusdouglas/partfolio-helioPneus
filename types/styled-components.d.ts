export type ThemeInterface = {
    color: {
      text: string;
      primary: string;
      info: string;
      bgPrimary: string;
      bgSecondary: string;
      success: string;
      warning: string;
      danger: string;
    };
    shadow: string;
    fontSizes: {
      h4: number;
      h3: number;
      h2: number;
      h1: number;
    };
    sizes: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;

    }
  };
  declare module 'styled-components' {
    interface DefaultTheme extends ThemeInterface {}
  }
  