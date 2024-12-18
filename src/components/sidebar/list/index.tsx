import { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { links } from "@/constants/links";
import { icons } from "@/constants/icons";
import useAppBarStyles from "@/constants/styles";
import { setActiveIndex, setPageTitle } from "@/redux/slices/pageSlice";
import { selectIsLoggedIn } from "@/redux/slices/loginSlice";

export default function ListSidebar() {
  const dispatch = useDispatch();
  const { isDarkMode } = useAppBarStyles();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [active, setActive] = useState(() => {
    const savedIndex = localStorage.getItem("activeIndex");
    return savedIndex !== null ? Number(savedIndex) : 0;
  });

  useEffect(() => {
    dispatch(
      setPageTitle(
        ["Dashboard", "Profile", isLoggedIn ? "Sign Out" : "Sign In"][active]
      )
    );
  }, [active, dispatch, isLoggedIn]);

  const handleListItemClick = (index: number, text: string) => {
    const newIndex = text === "Sign In" ? 0 : index;

    setActive(index);
    dispatch(setActiveIndex(newIndex));
    dispatch(setPageTitle(text));
    localStorage.setItem("activeIndex", newIndex.toString());
  };

  return (
    <List>
      {["Dashboard", "Profile", isLoggedIn ? "Sign Out" : "Sign In"].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={links[text === "Sign Out" ? index + 1 : index]}
              onClick={() => handleListItemClick(index, text)}
              sx={{
                "&:hover": {
                  backgroundColor: "inherit",
                },
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  right: 0,
                  top: 5,
                  bottom: 0,
                  width: 4,
                  height: "calc(100% - 10px)",
                  borderRadius: "5px",
                  backgroundColor: active === index ? "#4318FF" : "transparent",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 35 }}>
                <Box
                  component={icons[index]}
                  sx={{
                    width: 24,
                    height: 24,
                    color: !isDarkMode
                      ? active === index
                        ? "#4318FF"
                        : "#A3AED0"
                      : active === index
                      ? "#fff"
                      : "#A3AED0",
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  color: !isDarkMode
                    ? active === index
                      ? "#000"
                      : "#A3AED0"
                    : active === index
                    ? "#fff"
                    : "#A3AED0",
                }}
              />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );
}
