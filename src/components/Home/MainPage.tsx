import { MainContainer, MainContentSection } from "@/styles/HomeStyle";
import Image from "next/image";
import Link from "next/link";
import { PlantList } from "@/types";

const Main = () => {
  const data: PlantList[] = require("/public/data/data.json");

  return (
    <MainContainer>
      <div id="scrollLayer">
        <div id="sectionLayer">
          {data.map((item, index) => {
            const today = new Date();
            const day = new Date(item.onDate[0], item.onDate[1], item.onDate[2]);
            const timeGap = today.getTime() - day.getTime();
            const remainDays = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

            return (
              <MainContentSection key={index} title={item.name + " detail page"}>
                <Link href={`/detail/${item.id}`}>
                  <div id="photoDiv">
                    <Image
                      src={item.imgSrc}
                      alt="plant photo"
                      width={100}
                      height={100}
                      priority
                      sizes="responsive"
                      placeholder="blur"
                      blurDataURL={item.imgSrc}
                    />
                  </div>
                  <div id="photoTextDiv">
                    <div id="nameDiv">
                      <p id="name">{item.name}</p>
                      <p id="detailName">{item.detailName}</p>
                    </div>
                    <div id="daysDiv">
                      <span id="days">{remainDays}</span>
                      <span> days</span>
                    </div>
                  </div>
                </Link>
              </MainContentSection>
            );
          })}
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
