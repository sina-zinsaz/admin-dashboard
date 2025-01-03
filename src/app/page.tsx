import { Box } from "@mui/material";
import PanelLayout from "./layout/panel";

export const metadata = {
  title: "My Blog",
  description: "create by Sina Zinsaz",
};

export default function Home() {
  return (
    <Box>
      <PanelLayout />
    </Box>
  );
}
