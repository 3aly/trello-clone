import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { taskloader } from "../../assets/animations";
import { Container } from "@mui/material";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home"); // Navigate to the home screen after 2 seconds
    }, 5000);
  }, [navigate]);

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie animationData={taskloader} loop={true} />
    </Container>
  );
}

export default SplashScreen;
