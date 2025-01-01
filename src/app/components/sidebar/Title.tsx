import { Toolbar } from "@mui/material";

export default function Title() {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.7rem",
        fontWeight: "bold",
        my: "1rem",
      }}
    >
      Sina Zinsz
    </Toolbar>
  );
}
