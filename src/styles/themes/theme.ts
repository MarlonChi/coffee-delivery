export default {
  colors: {
    yellowDark: "#c47f17",
    yellow: "#dbac2c",
    yellowLight: "#f1e9c9",

    purpleDark: "#4B2995",
    purple: "#8047F8",
    purpleLight: "#EBE5F9",

    baseTitle: "#272221",
    baseSubtitle: "#403937",
    baseText: "#574f4d",
    baseLabel: "#8d8686",
    baseHover: "#d7d5d5",
    baseButton: "#e6e5e5",
    baseInput: "#ededed",
    baseCard: "#f3f2f2",

    background: "#fafafa",

    white: "#ffffff",
  },
  fonts: {
    family: {
      primary: "Roboto",
      secondary: "Baloo 2",
    },
    size: {
      titleXl: "4.8rem",
      titleL: "3.2rem",
      titleM: "2.4rem",
      titleS: "2rem",
      titleXs: "1.8rem",

      textL: "2.0rem",
      textM: "1.6rem",
      textS: "1.4rem",
      textXs: "1.2rem",

      tag: "1rem",
      buttonG: "1.4rem",
      buttonM: "1.2rem",
    },
  },
  breakpoints: {
    desktop: "1200px",
    tabletLandscape: "1024px",
    tabletPortrait: "768px",
    mobileLarge: "481px",
    mobileSmall: "480px",
  },
  shadow: {
    header: "0px 1px 10px 3px rgba(0, 0, 0, 0.1)",
  },
} as const;
