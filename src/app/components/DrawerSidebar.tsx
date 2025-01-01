import { Divider } from "@mui/material";
import Title from "./sidebar/Title";
import ListSidebar from "./sidebar/list";

export default function DrawerSidebar() {
  return (
    <div>
      <Title />
      <Divider sx={{ mb: "1rem" }} />
      <ListSidebar />
    </div>
  );
}
