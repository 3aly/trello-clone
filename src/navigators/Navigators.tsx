import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { Home, Login, SplashScreen } from "@screens/index";
import { useStyles } from "./Navigators.styles";

const Navigators = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        {/* Other components like Navbar can go here */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </div>
  );
};
export default Navigators;
