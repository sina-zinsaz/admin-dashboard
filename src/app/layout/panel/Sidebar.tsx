import DrawerSidebar from "@/app/components/DrawerSidebar";
import { drawerWidth } from "@/app/constants/layout";
import { Box, Drawer } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            border: "none",
          },
        }}
        open
      >
        <DrawerSidebar />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
