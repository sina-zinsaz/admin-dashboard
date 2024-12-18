import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/slices/loginSlice";
import Loading from "@/components/loading";

export default function Dashboard() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <Box>{isLoggedIn ? "dashboard" : <Loading />}</Box>;
}
