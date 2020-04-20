const nightOwl = require("@theme-ui/prism/presets/shades-of-purple.json");

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [16, 18, 21, 24, 26, 38, 52, 64, 96],
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
    text: "var(--text)",
    background: "var(--bg)",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "3rem",
      fontSize: 6,
    },
    h2: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
      marginBottom: "1rem",
      marginTop: "2.9rem",
      fontSize: 5,
    },
    h3: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "2.5rem",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "2.4rem",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "2rem",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "1rem",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      margin: "1.5rem 0",
      fontSize: 2,
      code: {
        backgroundColor: "var(--primary2)",
        fontFamily: "monospace",
        color: "var(--gray4)",
        margin: "0 2px",
      },
    },
    a: {
      color: "var(--primary0)",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    li: {
      code: {
        fontFamily: "monospace",
        backgroundColor: "#21262d",
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
