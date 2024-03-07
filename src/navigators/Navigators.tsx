import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Login, SplashScreen } from "@screens/index";
import { useStyles } from "./Navigators.styles";

const Navigators = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Navigators;
