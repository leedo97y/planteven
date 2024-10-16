import styled from "@emotion/styled";

export const MemoSection = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 5px;
  background-color: aliceblue;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.memoBgGray};
  font-size: ${({ theme }) => theme.font.sm};

  #textContent {
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
`;
