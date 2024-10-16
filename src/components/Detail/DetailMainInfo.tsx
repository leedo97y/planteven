import { DetailMainDiv, InfoSection, TitleSection } from "@/styles/DetailPageStyle";
import { PlantList } from "@/types";
import Image from "next/image";
import Memo from "./Memo";
import DetailInfoContent from "./DetailInfoContent";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const DetailMainInfo = (props: PlantList) => {
  return (
    <DetailMainDiv>
      <TitleSection>
        <div id="plantTitleDiv">
          <div id="nameDiv">
            <div id="krName">
              <h1>{props.name}</h1>
              <span id="plantNumber">#{props.id + 1}</span>
            </div>
            <p id="detailName">{props.detailName}</p>
          </div>
          <Link href={"/"}>
            <TbGridDots />
            <span>home</span>
          </Link>
        </div>
        <Memo light={props.info?.light} native={props.info?.native} />
      </TitleSection>
      <InfoSection>
        {props.imgSrc && (
          <div id="photoDiv">
            <Image
              src={props.imgSrc}
              alt="plant photo"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL={props.imgSrc}
              priority
            />
          </div>
        )}
        <DetailInfoContent
          temp={props.info?.temp}
          humidity={props.info?.humidity}
          watering={props.info?.watering}
          repotting={props.info?.repotting}
          desc={props.info?.desc}
        />
      </InfoSection>
    </DetailMainDiv>
  );
};

export default DetailMainInfo;
