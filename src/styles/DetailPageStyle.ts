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

  @media (max-width: 3000px) {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 13px;

  #plantTitleDiv {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    #nameDiv {
      display: flex;
      flex-direction: column;
      gap: 5px;

      #krName {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 10px;

        #plantNumber {
          font-family: "Pretendard";
          font-size: ${({ theme }) => theme.font.md};
          color: ${({ theme }) => theme.colors.deepGray};
        }

        h1 {
          margin: 0;
          font-size: ${({ theme }) => theme.font.xlg};
          font-weight: 600;
        }
      }

      #detailName {
        margin: 0;
        font-size: ${({ theme }) => theme.font.xs};
      }
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7px;
      width: fit-content;
      height: fit-content;
      text-decoration: none;
      padding: 5px;
      color: ${({ theme }) => theme.colors.darkGray};
      font-size: ${({ theme }) => theme.font.sm};
      border: 1px solid ${({ theme }) => theme.colors.bgGray};
      border-radius: 5px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const InfoSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 25px;

  #photoDiv {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }

  #plantTextInfoDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const PlantBasicInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.bgGray};
  border-radius: 5px;

  #textDiv {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-right: 20px;
    border-right: 1px solid ${({ theme }) => theme.colors.bgGray};

    &:last-of-type {
      border-right: none;
      padding-right: 0;
    }

    #tempTitle,
    #humidityTitle,
    #wateringTitle {
      svg {
        width: 20px;
        height: 20px;
      }
    }

    p {
      margin: 0;
      font-size: ${({ theme }) => theme.font.sm};
      font-weight: 500;
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
`;

export const PlantExtraInfo = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  #textDiv {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.colors.bgGray};
    border-radius: 5px;

    &:first-of-type {
      height: 25%;
      justify-content: center;
    }

    &:last-of-type {
      height: 75%;
    }

    p {
      margin: 0;
    }

    p:first-of-type {
      font-size: ${({ theme }) => theme.font.sm};
      font-weight: 500;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: ${({ theme }) => theme.font.xs};
      display: flex;
      flex-direction: column;
      gap: 3px;
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;
