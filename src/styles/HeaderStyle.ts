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

export const HomeTitleSection = styled.section`
  width: fit-content;
  height: fit-content;
  margin: 20px 0 10px 0;
  padding-left: 20px;
  font-family: "GabiaHeuldot";
  font-weight: 700;

  a {
    text-decoration: none;
    width: fit-content;
    margin: 0;

    #title {
      font-size: ${({ theme }) => theme.font.xlg};
      color: white;
      background-color: ${({ theme }) => theme.colors.deepGreen};
      border-radius: 100%;
      padding: 6px;
    }

    span {
      font-size: ${({ theme }) => theme.font.md};
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const WorldMapSection = styled.section`
  padding-right: 20px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    width: fit-content;
    height: fit-content;
    color: ${({ theme }) => theme.colors.deepGray};
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.bgGray};
    border-radius: 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
