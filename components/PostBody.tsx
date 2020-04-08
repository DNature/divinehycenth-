import React from "react";
import markdownStyles from "../styles/markdown-styles.module.css";

export default function PostBody({ content }: { content: any }): JSX.Element {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
