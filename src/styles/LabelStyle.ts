import styled from "@emotion/styled";

export const LabelContainer = styled.div`
  font-family: "Pretendard";
  margin-top: 10px;
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

  &#easyToGrowIndoor {
    background-color: ${({ theme }) => theme.colors.yellowGreen};
    color: #fff;
  }

  &#hardToGrowIndoor {
    background-color: ${({ theme }) => theme.colors.deepOrange};
    color: #fff;
  }

  &#waterLover {
    background-color: ${({ theme }) => theme.colors.mediumBlue};
    color: #fff;
  }

  &#needLessWater {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.black};
  }

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
`;
