import { Theme } from "@emotion/react";

const theme: Theme = {
  font: {
    xxs: "12px",
    xs: "13px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "24px",
    xlg: "32px",
  },
  colors: {
    black: "#000",

    // main green
    darkGreen: "#00320D",
    mediumGreen: "#0C501E",
    green: "#216E35",
    lightGreen: "#39864D",
    mistGreen: "#63a775",

    // sub yellow green
    darkYellowGreen: "#3C4200",
    mediumYellowGreen: "#60690F",
    yellowGreen: "#A7B04B",
    mistYellowGreen: "#D2DB82",

    // water blue
    deepBlue: "#0A9BBD",
    mediumBlue: "#2DB2D1",
    blue: "#50C5E0",
    lightBlue: "#78D6EC",

    // sun orange
    deepOrange: "#FF8207",
    orange: "#FF9731",
    lightOrange: "#FFBE7E",
  },
};

export default theme;
