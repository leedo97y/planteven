import styled from "@emotion/styled";

export const LabelContainer = styled.div`
  font-family: "Pretendard";
  margin-top: 7px;
  font-size: ${({ theme }) => theme.font.sm};
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const LabelMainDiv = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 13px;
  border-radius: 50px;

  /* 키우기 난이도 */
  &#easyToGrowIndoor {
    background-color: ${({ theme }) => theme.colors.yellowGreen};
    color: #fff;
  }

  &#hardToGrowIndoor {
    background-color: ${({ theme }) => theme.colors.deepOrange};
    color: #fff;
  }

  /* 과습 예방 */
  &#waterLover {
    background-color: ${({ theme }) => theme.colors.mediumBlue};
    color: #fff;
  }

  &#needLessWater {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.black};
  }

  /* 공중 습도 */
  &#needAirHumidity {
    background-color: ${({ theme }) => theme.colors.labelLightGreen};
    color: ${({ theme }) => theme.colors.black};
  }

  &#iLikeDryAir {
    background-color: ${({ theme }) => theme.colors.labelLightOrange};
    color: ${({ theme }) => theme.colors.black};
  }

  /* 비료 요구도 */
  &#high {
    background-color: transparent;
    border: 1px solid #fff;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.red};
  }

  &#medium {
    background-color: transparent;
    border: 1px solid #fff;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.lightGreen};
  }

  &#low {
    background-color: transparent;
    border: 1px solid #fff;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    color: ${({ theme }) => theme.colors.navy};
  }

  /* 냉해 예방 */
  &#canBeFreezeInWinter {
    background-color: ${({ theme }) => theme.colors.deepNavy};
    color: #fff;
  }

  &#surviveInWinter {
    background-color: ${({ theme }) => theme.colors.lightNavy};
    color: ${({ theme }) => theme.colors.black};
  }
`;
