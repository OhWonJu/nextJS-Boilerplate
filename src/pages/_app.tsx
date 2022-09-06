import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "src/styles/GlobalStyle";
// import Theme from "src/styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NEXTJS BOILERPLATE</title>
        <meta name="description" content="NEXTJS BOILERPLATE" />
      </Head>
      <GlobalStyle />
      {/* <ThemeProvider theme={Theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
