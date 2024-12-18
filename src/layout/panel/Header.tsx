import { AppBar } from "@mui/material";
import ElementsHeader from "@/components/ElementsHeader";
import useAppBarStyles from "@/constants/styles";

export default function Header() {
  const { appBarStyle, appBarSx } = useAppBarStyles();

  return (
    <AppBar style={appBarStyle} sx={appBarSx}>
      <ElementsHeader />
    </AppBar>
  );
}
