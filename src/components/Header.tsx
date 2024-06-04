import { HeaderContainer, HomeTitle, MenuDiv } from "@/styles/HeaderStyle";
import { Slackey } from "next/font/google";

const slackey = Slackey({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <HeaderContainer>
      <HomeTitle className={slackey.className}>
        <h1>PLANTEVEN</h1>
      </HomeTitle>
      <MenuDiv>
        <h3>menu1</h3>
        <h3>menu2</h3>
      </MenuDiv>
    </HeaderContainer>
  );
};

export default Header;
