import "@/styles/globals.css";
import Layout from "@/components/Layout";
import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "@emotion/react";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}
