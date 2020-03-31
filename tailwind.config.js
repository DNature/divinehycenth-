module.exports = {
  theme: {
    extend: {},
    borderRadius: {
      none: "0",
      sm: "0.4375rem",
      default: "0.625rem",
      md: "1.875rem",
      lg: "2.5rem",
      full: "9999rem"
    },
    container: {
      center: true
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      lg: "22px",
      xl: "24px",
      "2xl": "36px",
      "3xl": "48px",
      "4xl": "52px",
      "5xl": "72px"
    }
  },
  corePlugins: {
    boxShadow: false
  },
  variants: {
    width: ["responsive", "hover"]
  },
  plugins: []
};
