const nightOwl = require("@theme-ui/prism/presets/shades-of-purple.json");

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      code: {
        backgroundColor: "#21262d",
        fontFamily: "monospace",
        fontSize: "inherit",
        // backgroundColor: "#2D2A55",
        padding: "0 5px",
        borderRadius: "4px",
        color: "#9EFEFF",
      },
    },
    a: {
      color: "primary",
    },
    li: {
      code: {
        fontFamily: "monospace",
        backgroundColor: "#21262d",
        // backgroundColor: "#2D2A55",
        padding: "3px 5px",
        borderRadius: "4px",
        fontSize: "16px",
        color: "#9EFEFF",
      },
    },
    code: {
      fontFamily: "monospace",
      backgroundColor: "#21262d",
      fontSize: "16px",
    },
    pre: {
      ...nightOwl,
      // clipPath: "polygon(33% 0, 53% 1%, 72% 0, 100% 1%, 100% 99%, 69% 100%, 37% 99%, 0 100%, 0 0, 18% 1%);",
      backgroundColor: "#21262d",
      padding: "18px",
      borderRadius: "7px",
      fontFamily: "'Fira Code', monospace",
      margin: "10px 0",
      overFlow: "scroll",
      maxHeight: "80vh",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};
