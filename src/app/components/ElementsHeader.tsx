import { Box } from "@mui/material";
import TitlePage from "./header/TitlePage";
import Option from "./header/option";

export default function ElementsHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        mx: "1.5rem",
        mb: "1rem",
      }}
    >
      <TitlePage />
      <Option />
    </Box>
  );
}
