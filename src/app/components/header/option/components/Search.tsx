import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <Box>
      <TextField
        placeholder="Search"
        variant="outlined"
        sx={{
          bgcolor: "background.default",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
          borderRadius: "5rem",
          height: "2.5rem",
          width: "13rem",
          mr: "1rem",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{}}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
