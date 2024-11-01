import Map from "@/components/World/Map";
import { WorldMapContainer, WorldMapSection } from "@/styles/WorldMapPageStyle";

const WorldMapPage = () => {
  return (
    <>
      <WorldMapContainer>
        <WorldMapSection>
          <Map />
        </WorldMapSection>
      </WorldMapContainer>
    </>
  );
};
export default WorldMapPage;
