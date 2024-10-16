import { PlantBasicInfo, PlantExtraInfo } from "@/styles/DetailPageStyle";
import { PlantInfoDetail } from "@/types";
import { PiDropSimple, PiSun, PiPintGlass } from "react-icons/pi";

const DetailInfoContent = ({
  temp,
  humidity,
  watering,
  repotting,
  desc,
}: Pick<PlantInfoDetail, "temp"> &
  Pick<PlantInfoDetail, "humidity"> &
  Pick<PlantInfoDetail, "watering"> &
  Pick<PlantInfoDetail, "repotting"> &
  Pick<PlantInfoDetail, "desc">) => {
  return (
    <>
      <div id="plantTextInfoDiv">
        <PlantBasicInfo>
          <div id="textDiv">
            <div id="tempTitle">
              <PiSun />
            </div>
            <p id="temp">{temp?.join(" - ")} ℃</p>
          </div>
          <div id="textDiv">
            <div id="humidityTitle">
              <PiDropSimple />
            </div>
            <p id="humidity">{humidity?.join(" - ")} %</p>
          </div>
          <div id="textDiv">
            <div id="wateringTitle">
              <PiPintGlass />
            </div>
            <p id="watering">{watering?.join(" - ")} 일</p>
          </div>
        </PlantBasicInfo>
        <PlantExtraInfo>
          <div id="textDiv">
            <p id="repottingTitle">최근 분갈이</p>
            <ul id="repotting">
              {repotting?.map((item, index) =>
                repotting.length > 1 ? (
                  <li key={index}>{item}</li>
                ) : (
                  <li key={index}>{item === "" ? "필요없음" : item}</li>
                ),
              )}
            </ul>
          </div>
          <div id="textDiv">
            <p id="descTitle">추가 사항</p>
            <ul id="desc">
              {desc?.map((item, index) =>
                desc.length > 1 ? <li key={index}>- {item}</li> : <li key={index}>- {item}</li>,
              )}
            </ul>
          </div>
        </PlantExtraInfo>
      </div>
    </>
  );
};
export default DetailInfoContent;
