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
      font-size: ${({ theme }) => theme.font.sm};
    }

    #plantLabel {
      margin-top: 10px;
      font-size: ${({ theme }) => theme.font.sm};
    }
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;

  #photoDiv {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  #plantTextInfoDiv {
    width: 100%;
    height: 100%;
  }
`;
