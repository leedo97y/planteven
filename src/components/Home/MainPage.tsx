import { MainContainer, MainContentSection } from "@/styles/HomeStyle";
import { Gugi } from "next/font/google";
import Image from "next/image";
import plantImg from "/public/images/testPlant.png";
import Link from "next/link";
import { PlantList } from "@/types";

const gugi = Gugi({
  subsets: ["latin"],
  weight: "400",
});

const Main = () => {
  const data: PlantList[] = require("/public/data/data.json");

  return (
    <MainContainer>
      <div id="sectionLayer">
        {data.map((item, index) => {
          const today = new Date();
          const day = new Date(item.period[0], item.period[1], item.period[2]);
          const timeGap = today.getTime() - day.getTime();
          const remainDays = Math.floor(timeGap / (1000 * 60 * 60 * 24));

          return (
            <MainContentSection className={gugi.className} key={index}>
              <Link href={`/detail/${item.id}`}>
                <div id="photoDiv">
                  <Image src={plantImg} alt="plant photo" placeholder="blur" />
                </div>
                <div id="photoTextDiv">
                  <div id="nameDiv">
                    <p id="name">{item.name}</p>
                    <p id="detailName">{item.detailName}</p>
                  </div>
                  <span id="days">{remainDays} days</span>
                </div>
              </Link>
            </MainContentSection>
          );
        })}
      </div>
    </MainContainer>
  );
};

export default Main;
