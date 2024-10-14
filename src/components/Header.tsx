import { HeaderContainer, HomeTitle } from "@/styles/HeaderStyle";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <HomeTitle>
        <Link href={"/"}>
          <span id="title">내</span> <span id="title">식</span>
          <span>물을</span> <span id="title">소</span>
          <span>개합니다</span>
        </Link>
      </HomeTitle>
    </HeaderContainer>
  );
};

export default Header;
