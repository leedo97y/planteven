import { Gugi } from "next/font/google";

import { DetailMainDiv, InfoSection } from "@/styles/DetailPageStyle";
import { PlantList } from "@/types";
import Image from "next/image";

const gugi = Gugi({
  subsets: ["latin"],
  weight: "400",
});

const DetailMainInfo = (props: PlantList) => {
  return (
    <DetailMainDiv>
      <div id="titleDiv" className={gugi.className}>
        <div id="plantNumber">#{props.id + 1}</div>
        <h1>{props.name}</h1>
        <p id="detailName">{props.detailName}</p>
        <div id="plantLabel">label</div>
      </div>
      <InfoSection>
        {props.imgSrc && (
          <div id="photoDiv">
            <Image src={props.imgSrc} alt="plant photo" width={500} height={500} priority />
          </div>
        )}
        <div id="plantTextInfoDiv">
          <div id="nativeDiv">
            <p>자생지</p>
            <p>{props.info?.native}</p>
          </div>
          <div id="lightDiv">
            <p>빛</p>
            <p>{props.info?.light}</p>
          </div>
          <div id="TempDiv">
            <p>온도</p>
            <p>
              {props.info?.temp[0]} - {props.info?.temp[1]}
            </p>
          </div>
          <div id="humidityDiv">
            <p>습도</p>
            <p>
              {props.info?.humidity[0]} - {props.info?.humidity[1]}
            </p>
          </div>
          <div id="waterDiv">
            <p>물주기</p>
            <p>{props.info?.water} days</p>
          </div>
        </div>
      </InfoSection>
    </DetailMainDiv>
  );
};

export default DetailMainInfo;
