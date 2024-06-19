import { Gugi } from "next/font/google";
import { DetailMainDiv, InfoSection } from "@/styles/DetailPageStyle";
import { PlantList } from "@/types";
import Image from "next/image";
import Label from "./Label";

const gugi = Gugi({
  subsets: ["latin"],
  weight: "400",
});

const DetailMainInfo = (props: PlantList) => {
  return (
    <DetailMainDiv>
      <div id="titleDiv" className={gugi.className}>
        <div id="plantNumber"># {props.id + 1}</div>
        <h1>{props.name}</h1>
        <p id="detailName">{props.detailName}</p>
        <Label
          light={props.info?.light}
          watering={props.info?.watering}
          fertilizer={props.info?.fertilizer}
        />
      </div>
      <InfoSection>
        {props.imgSrc && (
          <div id="photoDiv">
            <Image
              src={props.imgSrc}
              alt="plant photo"
              width={500}
              height={500}
              sizes="responsive"
              placeholder="blur"
              blurDataURL={props.imgSrc}
              priority
            />
          </div>
        )}
        <div id="plantTextInfoDiv">
          <div id="textDiv">
            <p id="nativeTitle">자생지</p>
            <p id="native">{props.info?.native}</p>
          </div>
          <div id="textDiv">
            <p id="lightTitle">빛</p>
            <p id="light">{props.info?.light}</p>
          </div>
          <div id="textDiv">
            <p id="tempTitle">온도</p>
            <p id="temp">
              {props.info?.temp[0]} - {props.info?.temp[1]} ℃
            </p>
          </div>
          <div id="textDiv">
            <p id="humidityTitle">습도</p>
            <p id="humidity">
              {props.info?.humidity[0]} - {props.info?.humidity[1]} %
            </p>
          </div>
          <div id="textDiv">
            <p id="wateringTitle">물주기</p>
            <p id="watering">
              {props.info?.watering[0]} - {props.info?.watering[1]} 일
            </p>
          </div>
          <div id="textDiv">
            <p id="repottingTitle">분갈이</p>
            <ul id="repotting">
              {props.info?.repotting.map((item, index) =>
                props.info?.repotting.length > 1 ? (
                  <li key={index}>・ {item}</li>
                ) : (
                  <li key={index}>{item === "" ? "필요없음" : item}</li>
                ),
              )}
            </ul>
          </div>
          <div id="textDiv">
            <p id="descTitle">추가 사항</p>
            <ul id="desc">
              {props.info?.desc.map((item, index) =>
                props.info?.desc.length > 1 ? (
                  <li key={index}>・ {item}</li>
                ) : (
                  <li key={index}>{item}</li>
                ),
              )}
            </ul>
          </div>
        </div>
      </InfoSection>
    </DetailMainDiv>
  );
};

export default DetailMainInfo;
