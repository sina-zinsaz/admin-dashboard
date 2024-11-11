import { Box } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { toggleTheme } from "../../../../store/themeSlice";
import { AppDispatch, RootState } from "../../../../store";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../../../assets/img/profile.jpg";
import { useNavigate } from "react-router-dom";

export default function ButtonHead() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  const handleProfileClick = () => {
    localStorage.setItem("activeIndex", "2");
    navigate("sign-in");
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <NotificationsNoneRoundedIcon
        sx={{ color: "#A3AED0", cursor: "pointer" }}
      />
      {isDarkMode ? (
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
      )}
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
        src={Profile}
        sx={{
          borderRadius: "50%",
          width: "2.5rem",
          height: "2.5rem",
          cursor: "pointer",
        }}
        onClick={handleProfileClick}
      />
    </Box>
  );
}
