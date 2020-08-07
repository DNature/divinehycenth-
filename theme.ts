const nightOwl = require("@theme-ui/prism/presets/shades-of-purple.json");

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui,"Roboto Slab", "Montserrat", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
    heading: "Roboto Slab",
    monospace: "Menlo, monospace",
  },
  fontSizes: [16, 18, 21, 22, 36, 40, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 500,
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
      color: "var(--gray0)",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "3rem",
      fontSize: 6,
    },
    h2: {
      color: "var(--gray0)",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "body",
      marginBottom: "1rem",
      marginTop: "2.9rem",
      fontSize: 5,
    },
    h3: {
      color: "var(--gray0)",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "2.5rem",
      fontSize: 4,
    },
    h4: {
      color: "var(--gray0)",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "2.4rem",
      fontSize: 3,
    },
    h5: {
      color: "var(--gray0)",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      marginBottom: "1rem",
      marginTop: "2rem",
      fontSize: 2,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      margin: "1.5rem 0",
      fontSize: 2,
      code: {
        fontFamily: "monospace",
        color: "var(--gray0)",
        margin: "0 2px",
        backgroundColor: "var(--gray4)",
      },
    },
    em: {
      backgroundColor: "var(--accent3)",
      "&:hover": {
        backgroundColor: "var(--accent2)",
      },
    },
    a: {
      color: "var(--primary0)",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    li: {
      fontSize: 1,

      code: {
        fontFamily: "monospace",
        color: "var(--gray0)",
        margin: "0 2px",
        backgroundColor: "var(--gray4)",
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
    blockquote: {
      padding: "0.5rem 0.7rem",
      // borderRadius: "0.3rem",
      background: "var(--trans)",

      p: {
        fontFamily: '"Roboto Slab", serif',
        margin: 0,
      },
    },
  },
};
