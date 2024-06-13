import { HeaderContainer, HomeTitle } from "@/styles/HeaderStyle";
import { Gugi } from "next/font/google";

const gugi = Gugi({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <HeaderContainer>
      <HomeTitle className={gugi.className}>
        <p>
          내 식<span>물을</span> 소<span>개합니다</span>
        </p>
      </HomeTitle>
    </HeaderContainer>
  );
};

export default Header;
