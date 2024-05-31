import { Global, css } from "@emotion/react";

const style = css`
  html {
    background-color: #fff;
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
