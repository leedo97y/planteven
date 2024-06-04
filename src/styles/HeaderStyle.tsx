import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;

export const HomeTitle = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 20px 0 20px 0;
  padding-left: 20px;

  h1 {
    width: fit-content;
    margin: 0;
    font-size: ${({ theme }) => theme.font.xlg};
    color: ${({ theme }) => theme.colors.darkGreen};
  }
`;

export const MenuDiv = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px;
  margin-right: 20px;

  h3 {
    width: fit-content;
    height: fit-content;
  }
`;
