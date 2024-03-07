import { Button, TextField, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets/images";
import { useStyles } from "./Login.styles";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/splash");
  };

  const { classes } = useStyles();
  return (
    <div className={classes.container}>
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
          className={classes.button}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          className={classes.socialButton}
          variant="contained"
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          className={classes.socialButton}
          variant="contained"
          startIcon={<FacebookIcon />}
        >
          Sign in with Facebook
        </Button>
      </Box>
    </div>
  );
}

export default Login;
