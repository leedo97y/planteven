import styled from "@emotion/styled";

export const MainContainer = styled.main`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 82vh;
  padding-bottom: 20px;

  #sectionLayer {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px 25px 20px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    overflow: hidden;

    &:hover {
      overflow: scroll;
      padding: 20px;
      overflow-x: hidden;
    }

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #d9d9d9;
    }

    &::-webkit-scrollbar-track {
      color: transparent;
    }
  }
`;

export const MainContentSection = styled.div`
  rotate: -2deg;

  &:nth-of-type(2n) {
    rotate: 2deg;
  }

  a {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    width: 90%;
    height: 350px;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
    padding: 30px 15px 20px 15px;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    p {
      margin: 0;
    }

    #photoDiv {
      width: 100%;
      height: 85%;
      background-color: #f0f0f0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    #photoTextDiv {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 5px;

      #nameDiv {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding-left: 10px;

        #name {
          font-size: ${({ theme }) => theme.font.xs};
        }

        #detailName {
          font-size: ${({ theme }) => theme.font.xxs};
        }
      }

      #days {
        height: fit-content;
        padding-right: 10px;
        font-size: ${({ theme }) => theme.font.xs};
      }
    }
  }
`;
