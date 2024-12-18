import { useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { drawerWidth } from "./layout";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/slices";

const useAppBarStyles = () => {
  const theme = useTheme();
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  const appBarStyle = useMemo(
    () => ({
      background: theme.palette.mode === "dark" ? "#0B1437" : "#F4F7FE",
    }),
    [theme.palette.mode]
  );

  const appBarSx = useMemo(
    () => ({
      position: "absolute",
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      height: "15%",
      ml: { sm: `${drawerWidth}px` },
      color: "text.primary",
      boxShadow: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    }),
    []
  );

  return { appBarStyle, appBarSx , isDarkMode };
};

export default useAppBarStyles;
