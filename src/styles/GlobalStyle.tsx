import { Global, css } from "@emotion/react";

const style = css`
  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/PretendardVariable.woff2") format("truetype");
  }

  @font-face {
    font-family: "GabiaHeuldot";
    src: url("/fonts/GabiaHeuldot.ttf") format("truetype");
  }

  html {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #fff;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
