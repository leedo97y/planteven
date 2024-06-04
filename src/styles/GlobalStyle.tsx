import { Global, css } from "@emotion/react";

const style = css`
  html {
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
