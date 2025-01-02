"use client";
import ElementsHeader from "@/app/components/ElementsHeader";
import { AppBar } from "@mui/material";
import { useAppBarStyles } from "@/app/constants/styles";
export default function Header() {
  const { appBarStyle, appBarSx } = useAppBarStyles();
  return (
    <AppBar style={appBarStyle} sx={appBarSx}>
      <ElementsHeader />
    </AppBar>
  );
}
