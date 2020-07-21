import { createMuiTheme } from "@material-ui/core/styles";
import { purple, red, green, deepPurple } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: deepPurple,
    textPrimary: {
      main: "#9c27b0"
    },
    // error: green,
    success: {
      main: "#ef5350"
    },
    error: {
      main: "#ef5350"
    }
  }
});

export const themeRed = createMuiTheme({
  palette: {
    primary: red
  }
});

export const themeGreen = createMuiTheme({
  palette: {
    primary: green
  }
});
