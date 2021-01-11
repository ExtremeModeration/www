import dark from "@theme-ui/preset-dark"

export default {
  ...dark,
  styles: {
    a: {
      color: "primary",
      "&.active": {
        color: "primary",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },
}
