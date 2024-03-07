import "./App.css";
import Navigators from "./navigators/Navigators";
import { ProvidersWrapper } from "./ProvidersWrapper";
import { ThemeProvider } from "@emotion/react";

import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "@constants/theme";

function App() {
  const { darkMode } = useSelector(
    (state: { theme: { darkMode: boolean } }) => state.theme
  );

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Navigators />
    </ThemeProvider>
  );
}

const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};

export default AppWithProvider;
