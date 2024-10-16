import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xlg: string;
      xxlg: string;
    };
    colors: {
      // font, basic color
      black: string;
      deepGray: string;
      brown: string;
      deepBrown: string;

      // main green
      deepGreen: string;
      mediumGreen: string;
      green: string;
      lightGreen: string;
      mistGreen: string;

      // sub yellow green
      deepYellowGreen: string;
      mediumYellowGreen: string;
      yellowGreen: string;
      mistYellowGreen: string;

      // water blue
      deepBlue: string;
      mediumBlue: string;
      blue: string;
      lightBlue: string;

      // caution
      deepRed: string;
      red: string;
      lightRed: string;
      deepNavy: string;
      navy: string;
      lightNavy: string;

      // sun orange
      deepOrange: string;
      orange: string;
      lightOrange: string;

      // label color
      labelLightGreen: string;
      labelLightOrange: string;

      // background color
      bgYellowGreen: string;
      bgGreen: string;
      bgGray: string;
      memoBgGray: string;
    };
  }
}
