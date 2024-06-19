import { LabelContainer, LabelMainDiv } from "@/styles/LabelStyle";
import { PlantInfoDetail } from "@/types";

const Label = ({
  temp,
  light,
  humidity,
  watering,
  fertilizer,
}: Pick<PlantInfoDetail, "temp"> &
  Pick<PlantInfoDetail, "light"> &
  Pick<PlantInfoDetail, "humidity"> &
  Pick<PlantInfoDetail, "fertilizer"> &
  Pick<PlantInfoDetail, "watering">) => {
  let waterCycle = 0;
  watering?.map((num) => (waterCycle += num));
  const wateringAverage = Math.floor(waterCycle / watering?.length);

  let tempSum = 0;
  temp?.map((num) => (tempSum += num));
  const tempAverage = Math.ceil(tempSum / temp?.length);

  let humidSum = 0;
  humidity?.map((num) => (humidSum += num));
  const humidAverage = Math.ceil(humidSum / humidity?.length);

  return (
    <LabelContainer>
      {light === "양지" ? (
        <LabelMainDiv id="hardToGrowIndoor">밖이 좋아!</LabelMainDiv>
      ) : (
        <LabelMainDiv id="easyToGrowIndoor">순둥이</LabelMainDiv>
      )}
      {wateringAverage > 7.5 ? (
        <LabelMainDiv id="needLessWater">과습 주의</LabelMainDiv>
      ) : (
        <LabelMainDiv id="waterLover">물먹는 하마</LabelMainDiv>
      )}
      {fertilizer === "HIGH" ? (
        <LabelMainDiv id="high">다비성</LabelMainDiv>
      ) : fertilizer === "MEDIUM" ? (
        <LabelMainDiv id="medium">적당한 비료</LabelMainDiv>
      ) : (
        <LabelMainDiv id="low">비료 적게</LabelMainDiv>
      )}
      {tempAverage > 18 ? (
        <LabelMainDiv id="canBeFreezeInWinter">냉해 주의</LabelMainDiv>
      ) : (
        <LabelMainDiv id="surviveInWinter">겨울에도 짱셈</LabelMainDiv>
      )}
      {humidAverage > 50 ? (
        <LabelMainDiv id="needAirHumidity">공중 분무</LabelMainDiv>
      ) : (
        <LabelMainDiv id="iLikeDryAir">건조한게 좋아</LabelMainDiv>
      )}
    </LabelContainer>
  );
};

export default Label;
