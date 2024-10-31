import { HeaderContainer, HomeTitleSection, WorldMapSection } from "@/styles/HeaderStyle";
import Link from "next/link";
import { PiMapTrifold } from "react-icons/pi";
import { HiMiniHome } from "react-icons/hi2";

const Header = () => {
  const pathname = window.location.pathname || "";

  return (
    <HeaderContainer>
      <HomeTitleSection>
        <Link href={"/"} title="home page">
          <span id="title">내</span> <span id="title">식</span>
          <span>물을</span> <span id="title">소</span>
          <span>개합니다</span>
        </Link>
      </HomeTitleSection>
      <WorldMapSection>
        {pathname === "/world" ? (
          <Link href={"/"}>
            <HiMiniHome />
          </Link>
        ) : (
          <Link href={"/world"} title="world map page">
            <PiMapTrifold />
          </Link>
        )}
      </WorldMapSection>
    </HeaderContainer>
  );
};

export default Header;
