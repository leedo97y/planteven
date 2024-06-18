import styled from "@emotion/styled";

export const DetailContainer = styled.main`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 82vh;
  margin: 0 auto;
  padding: 20px;
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
    margin-bottom: 20px;

    #plantNumber {
      font-family: "Pretendard";
      font-size: ${({ theme }) => theme.font.lg};
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

    #plantLabel {
      font-family: "Pretendard";
      margin-top: 10px;
      font-size: ${({ theme }) => theme.font.sm};
    }
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 30px;

  #photoDiv {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }

  #plantTextInfoDiv {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;

    #textDiv {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;

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
