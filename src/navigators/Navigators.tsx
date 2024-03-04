import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../screens/Login/Login";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { Dashboard } from "@mui/icons-material";
import { Box } from "@mui/material";

const Navigators = () => {
  return (
    <Router>
      <Box style={{ flex: 1 }}>
        {/* Other components like Navbar can go here */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/home" element={<Dashboard />} />
          {/* Add more routes here */}
        </Routes>
      </Box>
    </Router>
  );
};
export default Navigators;
