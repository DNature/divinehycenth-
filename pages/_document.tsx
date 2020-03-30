import * as React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // componentDidMount() {
  //   document.querySelectorAll
  // }
  
  
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          
        </Head>
        <body className="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
