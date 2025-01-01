import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Box position="relative" display="inline-flex">
        <CircularProgress
          sx={{ color: "#3498db" }}
          size={150}
          thickness={0.5}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Typography variant="body2" component="div" color="text.secondary">
            Loading...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
