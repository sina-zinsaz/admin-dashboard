import { Box } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

export default function ButtonHead() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <NotificationsNoneRoundedIcon
        sx={{ color: "#A3AED0", cursor: "pointer" }}
      />
      {/* {isDarkMode ? (
        <LightModeIcon
          sx={{
            color: "#A3AED0",
            transform: "rotate(-20deg)",
            mx: "1rem",
            cursor: "pointer",
          }}
          onClick={handleToggleTheme}
        />
      ) : (
        <NightlightIcon
          sx={{
            color: "#A3AED0",
            transform: "rotate(-20deg)",
            mx: "1rem",
            cursor: "pointer",
          }}
          onClick={handleToggleTheme}
        />
      )} */}
      <ErrorOutlineRoundedIcon
        sx={{
          color: "#A3AED0",
          transform: "rotate(180deg)",
          mr: "1rem",
          cursor: "pointer",
        }}
      />
      <Box
        component="img"
        // src={Profile}
        sx={{
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
        }}
      />
    </Box>
  );
}
