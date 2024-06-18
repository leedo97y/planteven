import { LabelContainer, LabelMainDiv } from "@/styles/LabelStyle";
import { PlantInfoDetail } from "@/types";

const Label = ({
  light,
  watering,
  fertilizer,
}: Pick<PlantInfoDetail, "light"> &
  Pick<PlantInfoDetail, "fertilizer"> &
  Pick<PlantInfoDetail, "watering">) => {
  let cycle = 0;
  watering?.map((num) => (cycle += num));
  const average = cycle / 2;

  return (
    <LabelContainer>
      {light === "양지" ? (
        <LabelMainDiv id="hardToGrowIndoor">밖이 좋아!</LabelMainDiv>
      ) : (
        <LabelMainDiv id="easyToGrowIndoor">순둥이</LabelMainDiv>
      )}
      {average > 7.5 ? (
        <LabelMainDiv id="needLessWater">과습 주의</LabelMainDiv>
      ) : (
        <LabelMainDiv id="waterLover">물이 좋아!</LabelMainDiv>
      )}
      {fertilizer === "HIGH" ? (
        <LabelMainDiv id="high">다비성</LabelMainDiv>
      ) : fertilizer === "MEDIUM" ? (
        <LabelMainDiv id="medium">적당한 비료</LabelMainDiv>
      ) : (
        <LabelMainDiv id="low">비료 적게</LabelMainDiv>
      )}
    </LabelContainer>
  );
};

export default Label;
