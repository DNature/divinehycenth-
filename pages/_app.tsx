import * as React from "react";
import { AppProps } from "next/app";
// import { ThemeProvider } from "theme-ui";
// import Prism from "@theme-ui/prism";

// import theme from "../theme";
import "../styles/tailwind.css";
import "../styles/styles.css";

// const components = {
//   pre: ({ children }: any): JSX.Element => (<>{children}</>) as JSX.Element,
//   code: Prism
// };

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {/* <ThemeProvider components={components} theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
