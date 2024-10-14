import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function App({ Component, pageProps }: AppProps) {

  const DEFAULT_SEO = {
    title: "Planteven | 내식소",
    description: "Planteven, 반려 식물 관리 및 소개 페이지 입니다.",
    canonical: "https://planteven.vercel.app/",
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "https://planteven.vercel.app/",
      title: "Planteven | 내식소",
      site_name: "Planteven | 내식소",
      images: [
        {
          url: "/share.png",
          width: 285,
          height: 167,
          alt: "Planteven | 내식소",
        },
      ],
    },
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    additionalMetaTags: [
      {
        name: "application-name",
        content: "Planteven | 내식소",
      },
      {
        name: "msapplication-tooltip",
        content: "Planteven | 내식소",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
  };
  
  return (
    <>
      <Layout>
        <GlobalStyle />
        <DefaultSeo {...DEFAULT_SEO} />
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </Layout>
    </>
  );
}
