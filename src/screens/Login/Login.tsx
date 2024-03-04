import React from "react";
import { Button, TextField, Box, Typography, Container } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here...
    navigate("/splash"); // Navigate to the splash screen after login
  };
  //   return (
  //     // <Container sx={{ backgroundColor: "#FF725E", flex: 1 }}>
  //     //   <Stack spacing={2}>
  //     //     <Container>
  //     //       <Button
  //     //         disableElevation
  //     //         variant="outlined"
  //     //         sx={{
  //     //           color: "#ffff",
  //     //           borderColor: "#ffff",
  //     //           width: "50%",
  //     //           borderRadius: 20,
  //     //           borderWidth: 3,
  //     //         }}
  //     //       >
  //     //         Primary
  //     //       </Button>
  //     //     </Container>
  //     //   </Stack>
  //     //   Login
  //       // </Container>
  //       <div</dic>
  //   );
  return (
    <Container
      component="main"
      //   maxWidth="xs"
      style={{
        backgroundColor: "#FF725E",
        padding: "20px",
        borderRadius: "8px",
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
        <Typography component="h1" variant="h5" sx={{ color: "white" }}>
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
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
            margin="normal"
            required
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
    </Container>
  );
}

export default Login;
