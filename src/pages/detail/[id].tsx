import { DetailContainer } from "@/styles/DetailPageStyle";
import { useRouter } from "next/router";
import { PlantList } from "@/types";
import DetailMainInfo from "@/components/Detail/DetailMainInfo";

const detailPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  const data: PlantList[] = require("/public/data/data.json");

  return (
    <DetailContainer>
      <DetailMainInfo {...data[id]} />
    </DetailContainer>
  );
};

export default detailPage;
