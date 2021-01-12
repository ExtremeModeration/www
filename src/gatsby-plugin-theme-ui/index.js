import dark from "@theme-ui/preset-dark"

export default {
  ...dark,
  styles: {
    root: {
      padding: 0,
      margin: 0,
      background: "#241a30",
      color: "#ddd",
      a: {
        color: "primary",
        textDecoration: "none",
        "&:hover": {
          color: "white",
          textDecoration: "underline",
        },
      },
    },
  },
}
