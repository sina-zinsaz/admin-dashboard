import { ChangeEvent, FormEvent, useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { showNotification } from "../../lib/notification";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "email" && emailError) setEmailError("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!form.password) {
      showNotification("Please enter password!", "error");
      return;
    }
    showNotification("Successfully signed in!", "success");
    setForm({ email: "", password: "" });
  };

  return (
    <Grid container sx={{ height: "100vh", width: "100%" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography variant="h5" component="h1" textAlign="center" mb={2}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={Boolean(emailError)}
              helperText={emailError}
              autoFocus
              required
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h3">LOGO</Typography>
      </Grid>
    </Grid>
  );
}
