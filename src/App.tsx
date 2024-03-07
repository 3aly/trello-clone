import React from "react";
import "./App.css";
import Navigators from "./navigators/Navigators";
import { ProvidersWrapper } from "./ProvidersWrapper";
import { ThemeProvider } from "@emotion/react";

import { useSelector } from "react-redux";
// import { useStyles } from "./App.styles";
import { makeStyles } from "tss-react/mui";
import { darkTheme, lightTheme } from "@constants/theme";

function App() {
  const useStyles = makeStyles()((theme) => {
    return {
      container: {
        backgroundColor: theme.palette.primary.main,
      },
    };
  });

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
