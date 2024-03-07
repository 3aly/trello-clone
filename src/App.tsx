import React from "react";
import "./App.css";
import Navigators from "./navigators/Navigators";
import { ProvidersWrapper } from "./ProvidersWrapper";
function App() {
  return (
    <>
      <Navigators />
    </>
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
