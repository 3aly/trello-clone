import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../screens/Login/Login";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import { Dashboard } from "@mui/icons-material";

const Navigators = () => {
  return (
    <Router>
      <div>
        {/* Other components like Navbar can go here */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/home" element={<Dashboard />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </Router>
  );
};
export default Navigators;
