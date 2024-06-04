import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Main from "@/components/Home/Main";
import { MainContainer } from "@/styles/HomeStyle";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <SideMenu />
        <Main />
      </MainContainer>
      <footer></footer>
    </>
  );
}
