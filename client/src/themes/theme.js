import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
    MuiInputLabel: {
      root: {
        color: "hsla(0, 0%, 69%, 1)",
        "&$focused": {
          color: "hsla(0, 0%, 69%, 1)",
        },
        "&:not(:placeholder-shown)": {
          transform: "scale(1)",
          marginTop: "-10px",
        },
      },
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  },
});
