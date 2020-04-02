import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Blog</h1>
    <p>This is the blog page</p>
    <p>
      <Link href="/blog/faq">
        <a>Go faq</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
