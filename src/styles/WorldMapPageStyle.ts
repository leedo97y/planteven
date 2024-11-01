import styled from "@emotion/styled";

export const WorldMapContainer = styled.main`
  box-sizing: border-box;
  width: 100vw;
  height: 82vh;
  margin: 0 auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorldMapSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.bgGray};
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 100%;

  .country:hover {
    fill: ${({ theme }) => theme.colors.grayYellowGreen};
  }
`;
