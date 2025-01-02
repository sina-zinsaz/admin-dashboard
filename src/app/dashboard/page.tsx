import Loading from "@/app/components/loading";
import { selectIsLoggedIn } from "@/app/redux/slices/loginSlice";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

export default function Dashboard() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return <Box>dashboard</Box>;
}
