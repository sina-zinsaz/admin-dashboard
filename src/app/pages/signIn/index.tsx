import { ChangeEvent, FormEvent, useState } from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";
import { showNotification } from "@/lib/notification";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useNavigate } from "react-router-dom";
import Background from "@/assets/img/Background 5.4.jpg";
import Profile from "@/assets/img/profile.jpg";
import { useDispatch } from "react-redux";
import { setLogin } from "@/redux/slices/loginSlice";
export default function SignIn() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(setLogin(true));
    setForm({ username: "", email: "", password: "" });
    navigate("/");
  };

  const handleBackToDashboard = () => {
    navigate("/");
    localStorage.setItem("activeIndex", "0");
  };

  return (
    <>
      <Grid container sx={{ height: "100vh", width: "100%" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="User Name"
                fullWidth
                margin="normal"
                name="username"
                value={form.username}
                onChange={handleChange}
                error={Boolean(emailError)}
                helperText={emailError}
                autoFocus
                required
              />
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
              >
                Sign In
              </Button>
              <Typography variant="body1" textAlign="center" mt={2}>
                or
              </Typography>
              <Button type="submit" fullWidth variant="outlined" sx={{ mt: 2 }}>
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5rem 0px 0px 5rem",
          }}
        >
          <Box
            component="img"
            src={Profile}
            sx={{
              borderRadius: "50%",
              width: "10rem",
              height: "10rem",
              cursor: "pointer",
            }}
          />
          <Typography variant="h3">Sina Zinsaz</Typography>
        </Grid>
      </Grid>
      <Box sx={{ position: "absolute", top: 16, left: 16 }}>
        <Typography
          variant="body2"
          display="flex"
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={handleBackToDashboard}
        >
          <ArrowBackIosNewRoundedIcon sx={{ mr: 1, fontSize: "1rem" }} /> Back
          to Dashboard
        </Typography>
      </Box>
    </>
  );
}
