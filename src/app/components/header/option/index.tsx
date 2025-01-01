import { Box } from "@mui/material";
import ButtonHead from "./components/ButtonHead";
import Search from "./components/Search";

export default function Option() {
  return (
    <Box
      bgcolor="background.paper"
      display="flex"
      alignItems="center"
      borderRadius="5rem"
      padding="0.4rem"
    >
      <Search />
      <ButtonHead />
    </Box>
  );
}
