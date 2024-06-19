import styled from "@emotion/styled";

export const DetailContainer = styled.main`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 82vh;
  margin: 0 auto;
  padding: 10px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  font-family: "Pretendard";
`;

export const DetailMainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  #titleDiv {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 13px;

    #plantNumber {
      font-family: "Pretendard";
      font-size: ${({ theme }) => theme.font.md};
    }

    h1,
    p {
      margin: 0;
    }

    h1 {
      font-size: ${({ theme }) => theme.font.xlg};
    }

    #detailName {
      font-size: ${({ theme }) => theme.font.xs};
    }
  }
`;

export const InfoSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;

  #photoDiv {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: fit-content;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }

  #plantTextInfoDiv {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 0 0 0;

    #textDiv {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 7px;

      p {
        margin: 0;
      }

      p:first-of-type {
        font-size: ${({ theme }) => theme.font.sm};
        font-weight: 500;
      }

      p:last-of-type {
        font-size: ${({ theme }) => theme.font.xs};
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: ${({ theme }) => theme.font.xs};
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
    }
  }
`;
