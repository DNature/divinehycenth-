import * as React from "react";
import { AppProps } from "next/app";

import "../styles/tailwind.css";
import "../styles/styles.css";


export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {/* <ThemeProvider components={components} theme={theme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
