import * as React from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import "../styles/styles.css";
import "../styles/tailwind.css";
import "../styles/progress.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // NProgress.configure({ easing: "ease-in-out", speed: 200 });

    Router.events.on("routeChangeStart", () => {
      NProgress.inc(0.3);
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, []);

  return (
    <>
      {/* <ThemeProvider components={components} theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}
