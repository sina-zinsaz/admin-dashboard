import { Box, Toolbar } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { drawerWidth } from "../../constants/layout";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function PanelLayout() {
  const location = useLocation();
  const isSignInPage = location.pathname === "/sign-in";

  return (
    <Box display="flex" m="-0.5rem">
      {!isSignInPage && <Header />}
      {!isSignInPage && <Sidebar />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: { xs: !isSignInPage ? 6 : 0 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "background.default",
          height: "100vh",
          color: "text.primary",
        }}
      >
        {!isSignInPage && <Toolbar />}
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
}
