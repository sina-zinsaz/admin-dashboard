import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { links } from "@/app/constants/links";
import { icons } from "@/app/constants/icons";

export default function ListSidebar() {
  return (
    <List>
      {["Dashboard", "Profile", "Sign In"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton
            component={RouterLink}
            to={links[index]} // Simplified
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
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 35 }}>
              <Box
                component={icons[index]}
                sx={{
                  width: 24,
                  height: 24,
                }}
              />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
