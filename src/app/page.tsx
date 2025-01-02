import { Box } from "@mui/material";
import Header from "./layout/panel/Header";

export const metadata = {
  title: "My Blog",
  description: "create by Sina Zinsaz",
};

export default function Home() {
  return (
    <Box>
      <Header />
    </Box>
  );
}
