import dark from "@theme-ui/preset-dark"

export default {
  ...dark,
  styles: {
    body: {
      padding: 0,
      margin: 0,
    },
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
