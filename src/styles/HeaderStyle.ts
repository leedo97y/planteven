import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 8vh;
  justify-content: space-between;
`;

export const HomeTitle = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 20px 0 10px 0;
  padding-left: 20px;

  a {
    text-decoration: none;
    width: fit-content;
    margin: 0;
    font-size: ${({ theme }) => theme.font.xxlg};
    color: ${({ theme }) => theme.colors.deepGreen};

    span {
      font-size: ${({ theme }) => theme.font.lg};
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
