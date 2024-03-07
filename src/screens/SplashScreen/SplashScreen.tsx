import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { taskloader } from "../../assets/animations";
import { Container } from "@mui/material";
import { useStyles } from "./SplashScreen.styles";

function SplashScreen() {
  const navigate = useNavigate();
  const { classes } = useStyles();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, [navigate]);

  return (
    <Container className={classes.container}>
      <Lottie animationData={taskloader} loop={true} />
    </Container>
  );
}

export default SplashScreen;
