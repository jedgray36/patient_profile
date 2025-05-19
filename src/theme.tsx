import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F4F6F8",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#0A99FF",
      light: "#50A2FF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    divider: "#DADCE0",
  },
});

export default theme;
