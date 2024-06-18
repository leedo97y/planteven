import { HeaderContainer, HomeTitle } from "@/styles/HeaderStyle";
import { Gugi } from "next/font/google";
import Link from "next/link";

const gugi = Gugi({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <HeaderContainer>
      <HomeTitle className={gugi.className}>
        <Link href={"/"}>
          내 식<span>물을</span> 소<span>개합니다</span>
        </Link>
      </HomeTitle>
    </HeaderContainer>
  );
};

export default Header;
