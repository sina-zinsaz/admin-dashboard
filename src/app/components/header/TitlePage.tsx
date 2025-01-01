import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/slices";

export default function TitlePage() {
  const pageTitle = useSelector((state: RootState) => state.page.pageTitle);
  console.log("pageTitle", pageTitle);

  return (
    <Box display="flex" flexDirection="column">
      <Box color="#707EAE">Pages / {pageTitle}</Box>
      <Box fontSize="2rem" fontWeight="bold" mt="0.5rem">
        {pageTitle}
      </Box>
    </Box>
  );
}
