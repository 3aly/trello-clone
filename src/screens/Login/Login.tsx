import React from "react";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets/images";
import { COLORS } from "../../constants/colors";
import { useStyles } from "./Login.styles";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here...
    navigate("/splash"); // Navigate to the splash screen after login
  };

  const { classes } = useStyles();

  return (
    <div
      //   maxWidth="xs"
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        // padding: "20px",
        // borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={IMAGES.logo} width={500} height={350} />

        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            className={classes.inputField}
            InputLabelProps={{
              style: {
                lineHeight: 1,
                color: "white",
              },
            }}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            className={classes.inputField}
            margin="normal"
            required
            InputLabelProps={{
              style: {
                lineHeight: 1,
                color: "white",
              },
            }}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "white" }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ mt: 2, mb: 2, backgroundColor: "white" }}
          >
            Sign in with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ mt: 2, mb: 2, backgroundColor: "white", color: "black" }}
          >
            Sign in with Facebook
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
