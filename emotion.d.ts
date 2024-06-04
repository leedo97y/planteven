import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    font: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xlg: string;
    };
    colors: {
      black: string;

      // main green
      darkGreen: string;
      mediumGreen: string;
      green: string;
      lightGreen: string;
      mistGreen: string;

      // sub yellow green
      darkYellowGreen: string;
      mediumYellowGreen: string;
      yellowGreen: string;
      mistYellowGreen: string;

      // water blue
      deepBlue: string;
      mediumBlue: string;
      blue: string;
      lightBlue: string;

      // sun orange
      deepOrange: string;
      orange: string;
      lightOrange: string;
    };
  }
}
