import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F4F7FE",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0B1437",
      paper: "#111C44",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
