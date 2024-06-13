import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.bgYellowGreen};
  padding: 20px;

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.font.sm};
  }
`;
