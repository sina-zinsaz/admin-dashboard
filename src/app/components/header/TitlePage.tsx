import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function TitlePage() {
  return (
    <Box display="flex" flexDirection="column">
      <Box color="#707EAE">Pages / {}</Box>
      <Box fontSize="2rem" fontWeight="bold" mt="0.5rem">
        {}
      </Box>
    </Box>
  );
}
