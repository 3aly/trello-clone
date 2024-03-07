import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { Home, Login, SplashScreen } from "@screens/index";

const Navigators = () => {
  return (
    <Router>
      {/* Other components like Navbar can go here */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};
export default Navigators;
