import styled from "@emotion/styled";

export const LabelMainDiv = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 13px;
  border-radius: 50px;
  font-family: "Pretendard";
  font-size: ${({ theme }) => theme.font.sm};

  &#native {
    background-color: ${({ theme }) => theme.colors.labelLightGreen};
    color: #fff;
  }

  &#light {
    background-color: ${({ theme }) => theme.colors.labelLightOrange};
    color: #fff;
  }
`;
